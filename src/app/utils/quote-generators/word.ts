import { QuoteData } from '@/app/types/quote'
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, HeadingLevel, BorderStyle } from 'docx'

export async function generateQuoteWord(
  data: QuoteData,
  customer: any,
  products: any[]
): Promise<Buffer> {
  try {
    const doc = new Document({
      creator: 'Sistema de Cotizaciones',
      title: `Cotización ${data.quote_number}`,
      description: `Cotización generada para ${customer?.name || 'Cliente'}`,
      sections: [{
        properties: {
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 }
          }
        },
        children: [
          // ========== ENCABEZADO PRINCIPAL ==========
          new Paragraph({
            children: [
              new TextRun({ text: 'COTIZACIÓN', bold: true, size: 32, color: '2980B9' })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 }
          }),

          new Paragraph({
            children: [
              new TextRun({ text: `Número: ${data.quote_number}`, bold: true, size: 24 })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 }
          }),

          // Fechas
          ...(data.quote_date || data.valid_until ? [
            new Paragraph({
              children: [
                ...(data.quote_date ? [
                  new TextRun({ text: `Fecha: ${new Date(data.quote_date).toLocaleDateString('es-ES')}`, size: 20 }),
                  new TextRun({ text: '    ', size: 20 })
                ] : []),
                ...(data.valid_until ? [
                  new TextRun({ text: `Válida hasta: ${new Date(data.valid_until).toLocaleDateString('es-ES')}`, size: 20 })
                ] : [])
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 360 }
            })
          ] : []),

          // ========== INFORMACIÓN DEL CLIENTE ==========
          new Paragraph({
            children: [
              new TextRun({ text: 'INFORMACIÓN DEL CLIENTE', bold: true, size: 24, color: '2C3E50' })
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 }
          }),

          // Tabla de información del cliente
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              insideVertical: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' }
            },
            rows: [
              ...(customer?.name ? [new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Nombre:', bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: customer.name })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE }
                  })
                ]
              })] : []),

              ...(customer?.identifier ? [new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Identificador:', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: customer.identifier })] })] })
                ]
              })] : []),

              ...(customer?.email ? [new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Email:', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: customer.email })] })] })
                ]
              })] : []),

              ...(customer?.phone ? [new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Teléfono:', bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: customer.phone })] })] })
                ]
              })] : []),

              ...(customer?.street ? [new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Dirección:', bold: true })] })] }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({
                      text: [customer.street, customer.city, customer.state, customer.zip_code, customer.country].filter(Boolean).join(', ')
                    })] })]
                  })
                ]
              })] : [])
            ]
          }),

          // Información de la compañía si existe
          ...(customer?.companies ? [
            new Paragraph({
              children: [new TextRun({ text: 'INFORMACIÓN DE LA COMPAÑÍA', bold: true, size: 18, color: '2C3E50' })],
              spacing: { before: 240, after: 120 }
            }),

            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
                bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
                left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
                right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
                insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
                insideVertical: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' }
              },
              rows: [
                ...(customer.companies.name ? [new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: 'Nombre:', bold: true })] })],
                      width: { size: 25, type: WidthType.PERCENTAGE }
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: customer.companies.name })] })],
                      width: { size: 75, type: WidthType.PERCENTAGE }
                    })
                  ]
                })] : []),
                ...(customer.companies.email ? [new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Email:', bold: true })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: customer.companies.email })] })] })
                  ]
                })] : []),
                ...(customer.companies.phone ? [new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Teléfono:', bold: true })] })] }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: customer.companies.phone })] })] })
                  ]
                })] : [])
              ]
            })
          ] : []),

          // ========== DETALLE DE PRODUCTOS ==========
          new Paragraph({
            children: [new TextRun({ text: 'DETALLE DE PRODUCTOS', bold: true, size: 24, color: '2C3E50' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 480, after: 120 }
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 2, color: '2980B9' },
              bottom: { style: BorderStyle.SINGLE, size: 2, color: '2980B9' },
              left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
              insideVertical: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' }
            },
            rows: [
              // Header
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Descripción', bold: true, color: 'FFFFFF' })] })],
                    shading: { fill: '2980B9' },
                    width: { size: 35, type: WidthType.PERCENTAGE }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Cantidad', bold: true, color: 'FFFFFF' })], alignment: AlignmentType.CENTER })],
                    shading: { fill: '2980B9' },
                    width: { size: 12, type: WidthType.PERCENTAGE }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Precio', bold: true, color: 'FFFFFF' })], alignment: AlignmentType.CENTER })],
                    shading: { fill: '2980B9' },
                    width: { size: 15, type: WidthType.PERCENTAGE }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Desc%', bold: true, color: 'FFFFFF' })], alignment: AlignmentType.CENTER })],
                    shading: { fill: '2980B9' },
                    width: { size: 10, type: WidthType.PERCENTAGE }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Subtotal', bold: true, color: 'FFFFFF' })], alignment: AlignmentType.CENTER })],
                    shading: { fill: '2980B9' },
                    width: { size: 18, type: WidthType.PERCENTAGE }
                  })
                ]
              }),

              // Rows
              ...data.items.map((item, index) => {
                const productId = Number(item.inventory_id || item.product_id || (item as any).id)
                const product = products.find(p => p.id === productId)

                const unitPrice = item.unit_price ?? Number(product?.price ?? 0)
                const customPrice = item.item_custom_price ?? Number(product?.custom_price ?? 0)
                const effectivePrice = customPrice > 0 ? customPrice : unitPrice
                const quantity = item.quantity || 1
                const discount = item.discount || 0

                let subtotal = item.subtotal_after_discount ?? item.subtotal ?? (quantity * effectivePrice)
                if (discount > 0 && !item.subtotal_after_discount) {
                  subtotal = subtotal - (subtotal * discount / 100)
                }

                return new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: item.description || product?.name || `Producto #${productId}`, size: 20 })] })],
                      shading: { fill: index % 2 === 0 ? 'FFFFFF' : 'F8F9FA' }
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: quantity.toString(), size: 20 })], alignment: AlignmentType.CENTER })],
                      shading: { fill: index % 2 === 0 ? 'FFFFFF' : 'F8F9FA' }
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: customPrice > 0 ? `$${customPrice.toFixed(2)}` : `$${unitPrice.toFixed(2)}`, size: 20 })], alignment: AlignmentType.RIGHT })],
                      shading: { fill: index % 2 === 0 ? 'FFFFFF' : 'F8F9FA' }
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: discount > 0 ? `${discount}%` : '-', size: 20 })], alignment: AlignmentType.CENTER })],
                      shading: { fill: index % 2 === 0 ? 'FFFFFF' : 'F8F9FA' }
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: `$${subtotal.toFixed(2)}`, size: 20, bold: true })], alignment: AlignmentType.RIGHT })],
                      shading: { fill: index % 2 === 0 ? 'FFFFFF' : 'F8F9FA' }
                    })
                  ]
                })
              })
            ]
          }),

          // ========== TOTALES ==========
          new Paragraph({ children: [new TextRun({ text: '' })], spacing: { before: 360, after: 120 } }),

          (() => {
            const subtotal = data.subtotal || 0
            const discountAmount = data.discount_amount || 0
            const taxAmount = data.tax_amount || 0
            const total = data.total || 0

            const totalsRows: TableRow[] = [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Subtotal:', bold: true, size: 22 })] })],
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: `$${subtotal.toFixed(2)}`, size: 22 })], alignment: AlignmentType.RIGHT })],
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } }
                  })
                ]
              })
            ]

            if (discountAmount > 0) {
              totalsRows.push(new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Descuento:', bold: true, size: 22 })] })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `-$${discountAmount.toFixed(2)}`, size: 22, color: 'E74C3C' })], alignment: AlignmentType.RIGHT })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } })
                ]
              }))
            }

            if (taxAmount > 0) {
              if (data.tax_rate) {
                totalsRows.push(new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Tasa de Impuesto:', bold: true, size: 22 })] })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } }),
                    new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `${(data.tax_rate * 100).toFixed(1)}%`, size: 22 })], alignment: AlignmentType.RIGHT })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } })
                  ]
                }))
              }
              totalsRows.push(new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'Impuestos:', bold: true, size: 22 })] })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `$${taxAmount.toFixed(2)}`, size: 22 })], alignment: AlignmentType.RIGHT })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } })
                ]
              }))
            }

            totalsRows.push(new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: 'TOTAL:', bold: true, size: 24 })] })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } }),
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: `$${total.toFixed(2)}`, bold: true, size: 24, color: '2C3E50' })], alignment: AlignmentType.RIGHT })], borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } } })
              ]
            }))

            return new Table({
              width: { size: 60, type: WidthType.PERCENTAGE },
              rows: totalsRows,
              borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } }
            })
          })()
        ]
      }]
    })

    const buffer = await Packer.toBuffer(doc)
    return buffer
  } catch (error) {
    console.error('Error generating Word:', error)
    throw new Error(`Word generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
