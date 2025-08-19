import { QuoteData } from '@/app/types/quote'
import { Inventory } from '@/app/types/inventory'

export async function generateQuoteCSV(
  quote: QuoteData,
  customer?: { name: string | null },
  products: Array<{ id: string | number; name: string | null }> = []
): Promise<string> {
  const header = [
    'Quote Number',
    'Customer',
    'Valid Until',
    'Item',
    'Quantity',
    'Unit Price',
    'Item Subtotal',
  ]

  const rows: string[][] = []

  const customerName = customer ? `${customer.name ?? ''}` : ''

  for (const item of quote.items) {
    const prod = products.find(p => String(p.id) === String(item.inventory_id))
    const name = prod?.name ?? String(item.inventory_id ?? '')
    const qty = item.quantity ?? 0
    const unit = (item.item_custom_price ?? item.unit_price ?? 0)
    const subtotal = (item.subtotal_after_discount ?? item.subtotal ?? qty * unit)

    rows.push([
      quote.quote_number,
      customerName,
      quote.valid_until,
      name,
      String(qty),
      unit.toFixed(2),
      subtotal.toFixed(2),
    ])
  }

  // Footer totals
  rows.push([])
  rows.push(['Subtotal', '', '', '', '', '', quote.subtotal.toFixed(2)])
  rows.push(['Discount', '', '', '', '', '', `-${quote.discount_amount.toFixed(2)}`])
  rows.push(['Tax', '', '', '', '', '', quote.tax_amount.toFixed(2)])
  rows.push(['Total', '', '', '', '', '', quote.total.toFixed(2)])

  const escape = (val: string) => {
    if (val.includes(',') || val.includes('"') || val.includes('\n')) {
      return '"' + val.replace(/"/g, '""') + '"'
    }
    return val
  }

  const data = [header, ...rows]
    .map(r => r.map(escape).join(','))
    .join('\n')

  return data
}
