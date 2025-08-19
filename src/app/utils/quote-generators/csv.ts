import { QuoteData } from '@/app/types/quote'
 
// Enhanced CSV generator keeping backward compatibility with the route signature
export async function generateQuoteCSV(
  data: QuoteData,
  customer: any,
  products: any[]
): Promise<string> {
  // CSV escaping helper
  const escape = (val: any): string => {
    if (val === null || val === undefined) return ''
    const str = String(val)
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return '"' + str.replace(/"/g, '""') + '"'
    }
    return str
  }

  // Header extended with Custom Price and Discount (%)
  const header = [
    'Quote Number',
    'Customer',
    'Valid Until',
    'Item',
    'Quantity',
    'Unit Price',
    'Custom Price',
    'Discount (%)',
    'Item Subtotal',
  ]

  const rows: string[][] = []

  const customerName = customer ? `${customer.name ?? ''}` : ''
  const validUntil = data.valid_until
    ? (typeof data.valid_until === 'string'
        ? data.valid_until
        : new Date(data.valid_until).toISOString().split('T')[0])
    : ''

  for (const item of data.items) {
    const numericId = Number(
      item.inventory_id ?? (item as any).id ?? (item as any).product_id ?? 0
    )
    const prod = products.find(p => Number(p.id) === numericId)

    const name = item.description || prod?.name || String(item.inventory_id ?? numericId)
    const qty = item.quantity ?? 0
    const unitPrice = item.unit_price ?? Number(prod?.price ?? 0)
    const customPrice = item.item_custom_price ?? Number(prod?.custom_price ?? 0)
    const discount = item.discount ?? 0

    const effectivePrice = customPrice > 0 ? customPrice : unitPrice
    let subtotal = item.subtotal_after_discount ?? item.subtotal ?? (qty * effectivePrice)

    // If no precomputed discount applied, apply percentage discount if present
    if (discount > 0 && item.subtotal_after_discount === undefined) {
      subtotal = subtotal - (subtotal * discount / 100)
    }

    rows.push([
      data.quote_number,
      customerName,
      validUntil,
      name,
      String(qty),
      unitPrice.toFixed(2),
      customPrice > 0 ? customPrice.toFixed(2) : '',
      discount > 0 ? `${discount}` : '',
      subtotal.toFixed(2),
    ])
  }

  // Footer totals (values in the last column aligned with header width)
  rows.push([])
  rows.push(['Subtotal', '', '', '', '', '', '', '', data?.subtotal?.toFixed(2) ?? ''])
  rows.push(['Discount', '', '', '', '', '', '', '', `-${data?.discount_amount?.toFixed(2) ?? ''}`])
  rows.push(['Tax', '', '', '', '', '', '', '', data?.tax_amount?.toFixed(2) ?? ''])
  rows.push(['Total', '', '', '', '', '', '', '', data?.total?.toFixed(2) ?? ''])

  // Optional informational sections
  rows.push([])
  rows.push(['=== ADDITIONAL INFO ==='])
  rows.push(['Quote Date', '', '', '', '', '', '', '', data.quote_date ? (typeof data.quote_date === 'string' ? data.quote_date : new Date(data.quote_date).toISOString()) : ''])
  rows.push(['Currency', '', '', '', '', '', '', '', data.currency ?? 'USD'])

  if (customer?.identifier) rows.push(['Customer ID', '', '', '', '', '', '', '', customer.identifier])
  if (customer?.email) rows.push(['Customer Email', '', '', '', '', '', '', '', customer.email])
  if (customer?.phone) rows.push(['Customer Phone', '', '', '', '', '', '', '', customer.phone])

  if (customer && (customer.street || customer.city || customer.state || customer.zip_code || customer.country)) {
    const address = [customer.street, customer.city, customer.state, customer.zip_code, customer.country]
      .filter(Boolean)
      .join(', ')
    if (address) rows.push(['Customer Address', '', '', '', '', '', '', '', address])
  }

  if (customer?.companies && customer.companies.length > 0) {
    const company = customer.companies[0]
    rows.push([])
    rows.push(['=== COMPANY INFO ==='])
    rows.push(['Company Name', '', '', '', '', '', '', '', company?.name ?? ''])
    if (company?.email) rows.push(['Company Email', '', '', '', '', '', '', '', company.email])
    if (company?.phone) rows.push(['Company Phone', '', '', '', '', '', '', '', company.phone])
    if (company && (company.street || company.city || company.state || company.zip_code || company.country)) {
      const addr = [company.street, company.city, company.state, company.zip_code, company.country]
        .filter(Boolean)
        .join(', ')
      if (addr) rows.push(['Company Address', '', '', '', '', '', '', '', addr])
    }
  }

  if (data.notes) {
    rows.push([])
    rows.push(['=== NOTES ==='])
    rows.push([String(data.notes)])
  }

  if (data.terms_and_conditions) {
    rows.push([])
    rows.push(['=== TERMS & CONDITIONS ==='])
    rows.push([String(data.terms_and_conditions)])
  }

  rows.push([])
  rows.push(['=== STATISTICS ==='])
  rows.push(['Total Items', '', '', '', '', '', '', '', String(data.items.length)])
  rows.push(['Total Quantity', '', '', '', '', '', '', '', String(data.items.reduce((sum, i) => sum + (i.quantity || 0), 0))])
  if (data.tax_rate !== undefined) rows.push(['Tax Rate', '', '', '', '', '', '', '', `${(data.tax_rate * 100).toFixed(2)}%`])
  rows.push(['Generated At', '', '', '', '', '', '', '', new Date().toLocaleString('es-ES')])

  const csv = [header, ...rows]
    .map(r => r.map(escape).join(','))
    .join('\n')

  return csv
}
