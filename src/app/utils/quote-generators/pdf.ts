import { QuoteData } from '@/app/types/quote'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

export async function generateQuotePDF(
  data: QuoteData,
  customer: any,
  products: any[]
): Promise<Buffer> {
  try {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

    // Use tuple types to satisfy TS when spreading or pass elements individually
    const primaryColor: [number, number, number] = [41, 128, 185]
    const secondaryColor: [number, number, number] = [52, 73, 94]
    const lightGray: [number, number, number] = [236, 240, 241]

    let yPosition = 20

    // Header
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.rect(0, 0, 210, 40, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('COTIZACIÓN', 20, 25)

    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(`#${data.quote_number}`, 20, 32)

    if (data.quote_date) {
      const date = new Date(data.quote_date as any).toLocaleDateString('es-ES')
      doc.text(`Fecha: ${date}`, 150, 25)
    }

    if (data.valid_until) {
      const validDate = new Date(data.valid_until as any).toLocaleDateString('es-ES')
      doc.text(`Válida hasta: ${validDate}`, 150, 32)
    }

    yPosition = 50

    // Cliente
    doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('CLIENTE', 20, yPosition)

    yPosition += 10
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')

    const customerInfo = [
      customer?.name || 'N/A',
      customer?.identifier ? `ID: ${customer.identifier}` : '',
      customer?.email || '',
      customer?.phone || '',
      customer?.street || '',
      [customer?.city, customer?.state, customer?.zip_code].filter(Boolean).join(', '),
      customer?.country || ''
    ].filter(Boolean)

    customerInfo.forEach((info: string) => {
      doc.text(info, 20, yPosition)
      yPosition += 5
    })

    // Compañía
    if (customer?.companies) {
      const company = customer.companies
      yPosition += 5
      doc.setFont('helvetica', 'bold')
      doc.text('COMPAÑÍA', 20, yPosition)
      yPosition += 5
      doc.setFont('helvetica', 'normal')

      const companyInfo = [
        company.name || '',
        company.email || '',
        company.phone || '',
        company.street || '',
        [company.city, company.state, company.zip_code].filter(Boolean).join(', '),
        company.country || ''
      ].filter(Boolean)

      companyInfo.forEach((info: string) => {
        doc.text(info, 20, yPosition)
        yPosition += 4
      })
    }

    yPosition += 10

    // Tabla de productos
    const tableData = data.items.map(item => {
      const productId = Number(item.inventory_id || (item as any).product_id || (item as any).id)
      const product = products.find(p => Number(p.id) === productId)

      const unitPrice = item.unit_price ?? Number(product?.price ?? 0)
      const customPrice = item.item_custom_price ?? Number(product?.custom_price ?? 0)
      const effectivePrice = customPrice > 0 ? customPrice : unitPrice
      const quantity = item.quantity || 1
      const discount = item.discount || 0

      let subtotal = item.subtotal_after_discount ?? item.subtotal ?? quantity * effectivePrice
      if (discount > 0 && item.subtotal_after_discount === undefined) {
        subtotal = subtotal - (subtotal * discount) / 100
      }

      return [
        item.description || product?.name || `Producto #${productId}`,
        quantity.toString(),
        customPrice > 0 ? `$${customPrice.toFixed(2)}` : `$${unitPrice.toFixed(2)}`,
        discount > 0 ? `${discount}%` : '-',
        `$${subtotal.toFixed(2)}`
      ]
    })

    autoTable(doc, {
      startY: yPosition,
      head: [['Descripción', 'Cantidad', 'Precio', 'Descuento', 'Subtotal']],
      body: tableData,
      styles: { fontSize: 9, cellPadding: 3 },
      headStyles: {
        fillColor: primaryColor,
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: { fillColor: lightGray },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 25, halign: 'center' },
        2: { cellWidth: 30, halign: 'right' },
        3: { cellWidth: 25, halign: 'center' },
        4: { cellWidth: 35, halign: 'right' }
      },
      margin: { left: 20, right: 20 }
    })

    // Totales
    yPosition = (doc as any).lastAutoTable.finalY + 15

    const subtotal = data.subtotal || 0
    const discountAmount = data.discount_amount || 0
    const taxAmount = data.tax_amount || 0
    const total = data.total || 0

    const totalsX = 130
    const totalsData = [
      ['Subtotal:', `$${subtotal.toFixed(2)}`],
      ...(discountAmount > 0 ? [["Descuento:", `-$${discountAmount.toFixed(2)}`]] : []),
      ...(taxAmount > 0
        ? [
            ...(data.tax_rate ? [["Tasa de Impuesto:", `${((data.tax_rate || 0) * 100).toFixed(1)}%`]] : []),
            ["Impuestos:", `$${taxAmount.toFixed(2)}`]
          ]
        : []),
      ['TOTAL:', `$${total.toFixed(2)}`]
    ]

    autoTable(doc, {
      startY: yPosition,
      body: totalsData,
      styles: { fontSize: 10, cellPadding: 2 },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold', halign: 'left' },
        1: { cellWidth: 40, halign: 'right' }
      },
      margin: { left: totalsX },
      theme: 'plain'
    })

    const lastRowY = (doc as any).lastAutoTable.finalY
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setLineWidth(1)
    doc.line(totalsX, lastRowY - 8, totalsX + 80, lastRowY - 8)

    // Notas y Términos
    yPosition = lastRowY + 15

    if (data.notes) {
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text('NOTAS', 20, yPosition)

      yPosition += 8
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')

      const notesLines = doc.splitTextToSize(String(data.notes), 170)
      notesLines.forEach((line: string) => {
        doc.text(line, 20, yPosition)
        yPosition += 4
      })
      yPosition += 5
    }

    if (data.terms_and_conditions) {
      doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2])
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text('TÉRMINOS Y CONDICIONES', 20, yPosition)

      yPosition += 8
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')

      const termsLines = doc.splitTextToSize(String(data.terms_and_conditions), 170)
      termsLines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 4
      })
    }

    // Footer
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setTextColor(128, 128, 128)
      doc.setFontSize(8)
      doc.text(
        `Página ${i} de ${pageCount}`,
        doc.internal.pageSize.width / 2,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      )

      doc.text(
        `Generado el ${new Date().toLocaleDateString('es-ES')}`,
        20,
        doc.internal.pageSize.height - 10
      )
    }

    const pdfBuffer = Buffer.from(doc.output('arraybuffer'))
    return pdfBuffer
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw new Error(`PDF generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
