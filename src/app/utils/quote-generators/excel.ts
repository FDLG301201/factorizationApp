import { QuoteData } from '@/app/types/quote'

import * as XLSX from 'xlsx'

export async function generateQuoteExcel(
  data: QuoteData,
  customer: any,
  products: any[]
): Promise<Buffer> {
  try {
    const workbook = XLSX.utils.book_new()

    // ========== HOJA PRINCIPAL: COTIZACIÓN ==========
    const quoteSheet: any[][] = []

    // Encabezado
    quoteSheet.push(['COTIZACIÓN'])
    quoteSheet.push([])
    quoteSheet.push(['Número de Cotización:', data.quote_number])
    quoteSheet.push(['Fecha:', data.quote_date ? new Date(data.quote_date).toLocaleDateString('es-ES') : ''])
    quoteSheet.push(['Válida hasta:', data.valid_until ? new Date(data.valid_until).toLocaleDateString('es-ES') : ''])
    quoteSheet.push(['Moneda:', data.currency || 'USD'])
    quoteSheet.push([])

    // Información del cliente
    quoteSheet.push(['INFORMACIÓN DEL CLIENTE'])
    quoteSheet.push([])
    quoteSheet.push(['Nombre:', customer?.name || ''])
    quoteSheet.push(['Identificador:', customer?.identifier || ''])
    quoteSheet.push(['Email:', customer?.email || ''])
    quoteSheet.push(['Teléfono:', customer?.phone || ''])
    quoteSheet.push(['Dirección:', customer?.street || ''])
    quoteSheet.push(['Ciudad:', customer?.city || ''])
    quoteSheet.push(['Estado:', customer?.state || ''])
    quoteSheet.push(['Código Postal:', customer?.zip_code || ''])
    quoteSheet.push(['País:', customer?.country || ''])

    // Información de la compañía si existe
    if (customer?.companies) {
      const company = customer.companies
      quoteSheet.push([])
      quoteSheet.push(['INFORMACIÓN DE LA COMPAÑÍA'])
      quoteSheet.push(['Nombre:', company.name || ''])
      quoteSheet.push(['Email:', company.email || ''])
      quoteSheet.push(['Teléfono:', company.phone || ''])
      quoteSheet.push(['Dirección:', company.street || ''])
      quoteSheet.push(['Ciudad:', company.city || ''])
      quoteSheet.push(['Estado:', company.state || ''])
      quoteSheet.push(['Código Postal:', company.zip_code || ''])
      quoteSheet.push(['País:', company.country || ''])
    }

    quoteSheet.push([])

    // Encabezados de productos
    quoteSheet.push(['DETALLE DE PRODUCTOS'])
    quoteSheet.push([])
    const headerRow = [
      'ID Producto',
      'Descripción',
      'Categoría',
      'Proveedor',
      'Cantidad',
      'Precio Base',
      'Precio Personalizado',
      'Precio Efectivo',
      'Descuento (%)',
      'Subtotal'
    ]
    quoteSheet.push(headerRow)

    // Datos de productos
    data.items.forEach(item => {
      const productId = Number(item.inventory_id || (item as any).id)
      const product = products.find(p => p.id === productId)

      const unitPrice = item.unit_price ?? Number(product?.price ?? 0)
      const customPrice = item.item_custom_price ?? Number(product?.custom_price ?? 0)
      const effectivePrice = customPrice > 0 ? customPrice : unitPrice
      const quantity = item.quantity || 1
      const discount = item.discount || 0

      // Calcular subtotal igual que en CSV
      let subtotal = item.subtotal_after_discount ?? item.subtotal ?? (quantity * effectivePrice)

      if (discount > 0 && !item.subtotal_after_discount) {
        subtotal = subtotal - (subtotal * discount / 100)
      }

      const row = [
        productId,
        item.description || product?.name || 'Sin descripción',
        product?.categories?.name || 'Sin categoría',
        product?.providers?.name || 'Sin proveedor',
        quantity,
        unitPrice,
        customPrice > 0 ? customPrice : '',
        effectivePrice,
        discount,
        subtotal
      ]
      quoteSheet.push(row)
    })

    quoteSheet.push([])
    quoteSheet.push([])

    // Totales
    quoteSheet.push(['RESUMEN FINANCIERO'])
    quoteSheet.push([])
    quoteSheet.push(['Subtotal:', data.subtotal || 0])
    if ((data.discount_amount || 0) > 0) {
      quoteSheet.push(['Descuento:', -(data.discount_amount || 0)])
    }
    if ((data.tax_amount || 0) > 0) {
      if (data.tax_rate) {
        quoteSheet.push([`Tasa de Impuesto (${(data.tax_rate * 100).toFixed(1)}%):`, data.tax_rate])
      }
      quoteSheet.push(['Impuestos:', data.tax_amount || 0])
    }
    quoteSheet.push(['TOTAL:', data.total || 0])

    // Notas y términos
    if (data.notes) {
      quoteSheet.push([])
      quoteSheet.push(['NOTAS:'])
      quoteSheet.push([data.notes])
    }

    if (data.terms_and_conditions) {
      quoteSheet.push([])
      quoteSheet.push(['TÉRMINOS Y CONDICIONES:'])
      quoteSheet.push([data.terms_and_conditions])
    }

    const ws = XLSX.utils.aoa_to_sheet(quoteSheet)

    // Configurar anchos de columna
    const columnWidths = [
      { wch: 12 }, // ID Producto
      { wch: 40 }, // Descripción
      { wch: 20 }, // Categoría
      { wch: 20 }, // Proveedor
      { wch: 10 }, // Cantidad
      { wch: 15 }, // Precio Base
      { wch: 18 }, // Precio Personalizado
      { wch: 15 }, // Precio Efectivo
      { wch: 12 }, // Descuento
      { wch: 15 }  // Subtotal
    ]
    ;(ws as any)['!cols'] = columnWidths

    // Aplicar formato de moneda
    const range = XLSX.utils.decode_range((ws as any)['!ref'] || 'A1')
    for (let R = 0; R <= range.e.r; ++R) {
      for (let C = 0; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C })
        const cell = (ws as any)[cellAddress]

        if (cell && typeof cell.v === 'number') {
          // Formato de moneda para columnas de precios
          if (C >= 5 && C <= 9) {
            cell.z = '"$"#,##0.00'
          }
        }
      }
    }

    XLSX.utils.book_append_sheet(workbook, ws, 'Cotización')

    // ========== HOJA DE RESUMEN ==========
    const summarySheet: any[][] = []

    summarySheet.push(['RESUMEN EJECUTIVO'])
    summarySheet.push([])
    summarySheet.push(['Cotización #:', data.quote_number])
    summarySheet.push(['Cliente:', customer?.name || 'N/A'])
    summarySheet.push(['Identificador Cliente:', customer?.identifier || 'N/A'])
    summarySheet.push(['Email Cliente:', customer?.email || 'N/A'])
    summarySheet.push(['Teléfono Cliente:', customer?.phone || 'N/A'])
    summarySheet.push(['Fecha de Cotización:', data.quote_date ? new Date(data.quote_date).toLocaleDateString('es-ES') : 'N/A'])
    summarySheet.push(['Fecha de Vencimiento:', data.valid_until ? new Date(data.valid_until).toLocaleDateString('es-ES') : 'N/A'])
    summarySheet.push([])

    // Información de la compañía en resumen
    if (customer?.companies) {
      const company = customer.companies
      summarySheet.push(['COMPAÑÍA DEL CLIENTE'])
      summarySheet.push(['Nombre de la Compañía:', company.name || 'N/A'])
      summarySheet.push(['Email de la Compañía:', company.email || 'N/A'])
      summarySheet.push(['Teléfono de la Compañía:', company.phone || 'N/A'])
      summarySheet.push([])
    }

    summarySheet.push(['ESTADÍSTICAS'])
    summarySheet.push([])
    summarySheet.push(['Total de Productos:', data.items.length])
    summarySheet.push(['Cantidad Total de Items:', data.items.reduce((sum, item) => sum + (item.quantity || 0), 0)])
    summarySheet.push(['Subtotal:', data.subtotal || 0])
    summarySheet.push(['Total Final:', data.total || 0])

    if (data.tax_rate) {
      summarySheet.push(['Tasa de Impuesto:', `${(data.tax_rate * 100).toFixed(2)}%`])
    }

    summarySheet.push(['Descuento Promedio:',
      data.items.length > 0 ?
        `${(data.items.reduce((sum, item) => sum + (item.discount || 0), 0) / data.items.length).toFixed(2)}%` :
        '0%'
    ])

    const summaryWS = XLSX.utils.aoa_to_sheet(summarySheet)
    ;(summaryWS as any)['!cols'] = [
      { wch: 30 }, // Labels
      { wch: 25 }  // Values
    ]

    XLSX.utils.book_append_sheet(workbook, summaryWS, 'Resumen')

    // ========== HOJA DE PRODUCTOS DETALLADA ==========
    if (products.length > 0) {
      const productsSheet: any[][] = []

      productsSheet.push(['CATÁLOGO DE PRODUCTOS UTILIZADOS'])
      productsSheet.push([])
      productsSheet.push([
        'ID', 'Nombre', 'Descripción', 'Precio Base',
        'Precio Personalizado', 'Cantidad Disponible',
        'Categoría', 'Proveedor'
      ])

      products.forEach(product => {
        productsSheet.push([
          product.id,
          product.name || 'Sin nombre',
          product.description || 'Sin descripción',
          Number(product.price || 0),
          Number(product.custom_price || 0),
          product.quantity || 0,
          product.categories?.name || 'Sin categoría',
          product.providers?.name || 'Sin proveedor'
        ])
      })

      const productsWS = XLSX.utils.aoa_to_sheet(productsSheet)

      ;(productsWS as any)['!cols'] = [
        { wch: 8 },  // ID
        { wch: 25 }, // Nombre
        { wch: 40 }, // Descripción
        { wch: 15 }, // Precio Base
        { wch: 18 }, // Precio Personalizado
        { wch: 12 }, // Cantidad
        { wch: 20 }, // Categoría
        { wch: 20 }  // Proveedor
      ]

      XLSX.utils.book_append_sheet(workbook, productsWS, 'Productos')
    }

    // Generar el archivo
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'buffer',
      compression: true
    })

    return excelBuffer as unknown as Buffer

  } catch (error) {
    console.error('Error generating Excel:', error)
    throw new Error(`Excel generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
