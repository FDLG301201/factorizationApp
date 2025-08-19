import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../../lib/prisma'
import { generateQuoteCSV } from '@/app/utils/quote-generators/csv'
import { generateQuotePDF } from '@/app/utils/quote-generators/pdf'
import { generateQuoteExcel } from '@/app/utils/quote-generators/excel'
import { generateQuoteWord } from '@/app/utils/quote-generators/word'
import { QuoteData } from '@/app/types/quote'
import { z } from 'zod'

// Ensure Node.js runtime for proper Buffer handling (docx/xlsx generators)
export const runtime = 'nodejs'

// ================== TIPOS Y CONFIGURACIÓN ==================

type SupportedFormat = 'csv' | 'pdf' | 'xlsx' | 'docx'

interface FormatConfig {
  mimeType: string
  extension: string
  generator: (data: QuoteData, customer: any, products: any[]) => Promise<Buffer | string>
}

const FORMAT_CONFIG: Record<SupportedFormat, FormatConfig> = {
  csv: {
    mimeType: 'text/csv; charset=utf-8',
    extension: '.csv',
    generator: async (data, customer, products) => await generateQuoteCSV(data, customer, products)
  },
  pdf: {
    mimeType: 'application/pdf',
    extension: '.pdf',
    generator: async (data, customer, products) => await generateQuotePDF(data, customer, products)
  },
  xlsx: {
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    extension: '.xlsx',
    generator: async (data, customer, products) => await generateQuoteExcel(data, customer, products)
  },
  docx: {
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    extension: '.docx',
    generator: async (data, customer, products) => await generateQuoteWord(data, customer, products)
  }
}

// ================== VALIDACIÓN SCHEMA ==================

const QuoteItemSchema = z.object({
  // Soporta tanto string como number, los convierte a string
  inventory_id: z.union([
    z.string(),
    z.number().transform(val => val.toString())
  ]).optional(),
  
  product_id: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional(),
  
  id: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional(),
  
  quantity: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val > 0, 'Quantity must be positive'),
  
  // unit_price puede ser string o number, lo convierte a number
  unit_price: z.union([
    z.number(),
    z.string().transform(val => {
      const num = Number(val)
      if (isNaN(num)) throw new Error('Invalid price format')
      return num
    })
  ]).refine(val => val >= 0, 'Unit price must be non-negative').optional(),
  
  // item_custom_price también es soportado en los generadores
  item_custom_price: z.union([
    z.number(),
    z.string().transform(val => {
      const num = Number(val)
      if (isNaN(num)) throw new Error('Invalid custom price format')
      return num
    })
  ]).refine(val => val >= 0, 'Custom price must be non-negative').optional(),
  
  discount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0 && val <= 100, 'Discount must be between 0-100').optional(),
  
  description: z.string().optional(),
  
  // Campos adicionales que veo en tus datos
  subtotal: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional(),
  
  item_discount_value: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional(),
  
  item_discount_amount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional(),
  
  subtotal_after_discount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).optional()
  
}).refine((item) => {
  // Al menos uno de estos campos debe estar presente
  return item.inventory_id || item.product_id || item.id
}, {
  message: "Each item must have at least one of: inventory_id, product_id, or id"
})

const QuoteDataSchema = z.object({
  customer_id: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]),
  
  quote_number: z.string().min(1, 'Quote number is required'),
  
  quote_date: z.union([
    z.string(),
    z.date().transform(val => val.toISOString())
  ]).optional(),
  
  valid_until: z.union([
    z.string(),
    z.date().transform(val => val.toISOString())
  ]).optional(),
  
  items: z.array(QuoteItemSchema).min(1, 'At least one item is required'),
  
  // Campos numéricos con transformaciones flexibles
  subtotal: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0, 'Subtotal must be non-negative').optional(),
  
  tax_rate: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0 && val <= 1, 'Tax rate must be between 0-1').optional(),
  
  tax_amount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0, 'Tax amount must be non-negative').optional(),
  
  total: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0, 'Total must be non-negative').optional(),
  
  discount_amount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0, 'Discount amount must be non-negative').optional(),
  
  discount: z.union([
    z.number(),
    z.string().transform(val => Number(val))
  ]).refine(val => val >= 0, 'Discount must be non-negative').optional(),
  
  currency: z.string().default('USD'),
  notes: z.string().optional(),
  terms_and_conditions: z.string().optional()
})

// ================== CLASES DE ERROR PERSONALIZADAS ==================

class QuoteValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = 'QuoteValidationError'
  }
}

class QuoteDataError extends Error {
  constructor(message: string, public statusCode: number = 400) {
    super(message)
    this.name = 'QuoteDataError'
  }
}

// ================== UTILIDADES ==================

function isValidFormat(format: string): format is SupportedFormat {
  return format in FORMAT_CONFIG
}

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9.-]/g, '_').substring(0, 100)
}

async function validateQuoteData(data: any): Promise<QuoteData> {
  try {
    return QuoteDataSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      ).join(', ')
      throw new QuoteValidationError(`Validation failed: ${errorMessages}`)
    }
    throw error
  }
}

// ================== CONSULTAS OPTIMIZADAS ==================

async function fetchQuoteRelatedData(quoteData: QuoteData) {
  // Extraer IDs de productos con múltiples estrategias
  const productIds = quoteData.items
    .map(item => {
      // Prioridad: inventory_id > product_id > id
      // inventory_id ahora puede ser string o number (convertido por Zod)
      const rawId = item.inventory_id || (item as any).id?.toString()
      
      return rawId
    })
    .filter((id): id is string => !!id && id !== 'undefined' && id !== 'null')
    .map(id => {
      const numId = Number(id)
      return isNaN(numId) ? null : numId
    })
    .filter((id): id is number => id !== null && id > 0)

  if (productIds.length === 0) {
    // Información detallada sobre por qué falló
    const itemsAnalysis = quoteData.items.map((item, index) => ({
      index,
      inventory_id: item.inventory_id,
      id: (item as any).id,
      hasInventoryId: !!item.inventory_id,
      hasId: !!(item as any).id,
      allKeys: Object.keys(item)
    }))

    console.error('Product ID extraction failed:', {
      totalItems: quoteData.items.length,
      itemsAnalysis,
      sampleItem: quoteData.items[0]
    })

    throw new QuoteDataError(
      `No valid product IDs found in quote items. Received ${quoteData.items.length} items. ` +
      `Please ensure each item has 'inventory_id', 'product_id', or 'id' field with a valid number.`,
      400
    )
  }

  // Consulta optimizada con índices apropiados
  const [customer, products] = await Promise.all([
    prisma.customers.findUnique({
      where: { id: Number(quoteData.customer_id) },
      select: {
        id: true,
        identifier: true,
        name: true,
        email: true,
        phone: true,
        street: true,        // En tu schema es 'street', no 'address'
        city: true,
        state: true,
        zip_code: true,
        country: true,
        notes: true,
        companies: {
          select: {
            id: true,
            name: true,
            street: true,      // En tu schema es 'street', no 'address'
            phone: true,
            email: true,
            city: true,
            state: true,
            zip_code: true,
            country: true
            // tax_id y logo_url no existen en tu schema
          }
        }
      }
    }),
    prisma.products.findMany({
      where: { 
        id: { in: productIds }
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        custom_price: true,    // Campo específico de tu schema
        quantity: true,        // Campo específico de tu schema
        // sku y unit no existen en tu schema
        categories: {
          select: {
            id: true,
            name: true
          }
        },
        providers: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
  ])

  return { customer, products, productIds }
}

function validateDataIntegrity(customer: any, products: any[], productIds: number[], quoteData: QuoteData) {
  // Validar cliente existe
  if (!customer) {
    throw new QuoteDataError(`Customer with ID ${quoteData.customer_id} not found`, 404)
  }

  // Validar productos existen
  const foundProductIds = new Set(products.map(p => p.id))
  const missingProductIds = productIds.filter(id => !foundProductIds.has(id))
  
  if (missingProductIds.length > 0) {
    console.warn('Missing products:', {
      requested: productIds,
      found: Array.from(foundProductIds),
      missing: missingProductIds
    })
    
    throw new QuoteDataError(`Products not found: ${missingProductIds.join(', ')}`, 404)
  }

  // Validar que todos los items tienen productos válidos
  const itemsWithoutProducts = quoteData.items.filter(item => {
    const productId = item.inventory_id || (item as any).id?.toString()
    return productId && !foundProductIds.has(Number(productId))
  })

  if (itemsWithoutProducts.length > 0) {
    console.warn('Items without valid products:', itemsWithoutProducts)
    throw new QuoteDataError('Some quote items reference non-existent products', 400)
  }

}

// ================== GENERADOR DE ARCHIVOS ==================

async function generateQuoteFile(
  format: SupportedFormat, 
  quoteData: QuoteData, 
  customer: any, 
  products: any[]
): Promise<Buffer> {
  const config = FORMAT_CONFIG[format]
  
  try {
    const result = await config.generator(quoteData, customer, products)
    
    // Asegurar que retornamos un Buffer
    if (typeof result === 'string') {
      return Buffer.from(result, 'utf-8')
    }
    
    return result
  } catch (error) {
    throw new Error(`Failed to generate ${format.toUpperCase()} file: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// ================== HANDLERS HTTP ==================

export async function POST(
  request: NextRequest,
  {params}: { params: Promise<{ format: string }> }
) {
  const startTime = Date.now()
  let format: string = 'unknown'

  try {
    // 1. Validar formato
    const format = (await params).format;

    if (!isValidFormat(format)) {
      return NextResponse.json(
        { 
          error: `Format '${format}' not supported`,
          supportedFormats: Object.keys(FORMAT_CONFIG),
          message: 'Please use one of the supported formats'
        },
        { status: 400 }
      )
    }

    // 2. Validar y parsear datos de entrada
    const rawData = await request.json()
    
    const quoteData = await validateQuoteData(rawData)

    // 3. Obtener datos relacionados
    const { customer, products, productIds } = await fetchQuoteRelatedData(quoteData)

    // 4. Validar integridad de datos
    validateDataIntegrity(customer, products, productIds, quoteData)

    // 5. Generar archivo
    const fileBuffer = await generateQuoteFile(format, quoteData, customer, products)
    
    // 6. Preparar respuesta
    const config = FORMAT_CONFIG[format]
    const baseFilename = quoteData.quote_number || `quote_${Date.now()}`
    const filename = sanitizeFilename(`${baseFilename}${config.extension}`)
    
    const processingTime = Date.now() - startTime

    // 7. Headers optimizados para descarga
    const headers = new Headers({
      'Content-Type': config.mimeType,
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Processing-Time': `${processingTime}ms`,
      'X-File-Format': format,
      'X-Quote-Number': quoteData.quote_number
    })

    return new Response(fileBuffer, { headers })

  } catch (error) {
    const processingTime = Date.now() - startTime
    
    // Log detallado del error
    console.error('Quote export error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      format,
      processingTime: `${processingTime}ms`,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
      timestamp: new Date().toISOString()
    })

    // Manejo de errores específicos
    if (error instanceof QuoteValidationError) {
      return NextResponse.json(
        { 
          error: 'Invalid quote data',
          message: error.message,
          field: error.field
        },
        { status: 400 }
      )
    }

    if (error instanceof QuoteDataError) {
      return NextResponse.json(
        { 
          error: 'Data error',
          message: error.message
        },
        { status: error.statusCode }
      )
    }

    // Errores de Prisma
    if (error && typeof error === 'object' && 'code' in error) {
      const prismaError = error as any
      switch (prismaError.code) {
        case 'P2002':
          return NextResponse.json(
            { error: 'Duplicate constraint violation' },
            { status: 409 }
          )
        case 'P2025':
          return NextResponse.json(
            { error: 'Record not found' },
            { status: 404 }
          )
        case 'P2003':
          return NextResponse.json(
            { error: 'Foreign key constraint failed' },
            { status: 400 }
          )
        default:
          return NextResponse.json(
            { 
              error: 'Database error',
              code: prismaError.code
            },
            { status: 500 }
          )
      }
    }

    // Error genérico
    return NextResponse.json(
      { 
        error: 'Quote export failed',
        message: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : 'Unknown error')
          : 'Internal server error',
        format,
        processingTime: `${processingTime}ms`
      },
      { status: 500 }
    )
  }
}

// ================== ENDPOINT INFORMATIVO ==================

export async function GET() {
  return NextResponse.json({
    service: 'Quote Export Service',
    version: '2.0.0',
    supportedFormats: Object.keys(FORMAT_CONFIG),
    formatDetails: Object.fromEntries(
      Object.entries(FORMAT_CONFIG).map(([key, config]) => [
        key, 
        {
          mimeType: config.mimeType,
          extension: config.extension,
          description: `Export quote as ${key.toUpperCase()} format`
        }
      ])
    ),
    endpoints: {
      export: 'POST /api/quotes/generate/[format]',
      info: 'GET /api/quotes/generate/[format]'
    },
    requiredFields: [
      'customer_id',
      'quote_number', 
      'items (array with at least one item)'
    ],
    optionalFields: [
      'quote_date',
      'valid_until',
      'subtotal',
      'tax_rate',
      'tax_amount',
      'total',
      'currency',
      'notes',
      'terms_and_conditions'
    ]
  })
}