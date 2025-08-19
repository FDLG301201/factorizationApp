import { QuoteData } from '@/app/types/quote'

// Minimal shape to avoid Prisma/app type coupling
export async function generateQuoteWord(
  quote: QuoteData,
  customer?: { name: string | null },
  products: Array<{ id: string | number; name: string | null }> = []
): Promise<Buffer> {
  const customerName = customer?.name ?? ''
  const body = [
    'QUOTE (Word placeholder)\n',
    `Number: ${quote.quote_number}\n`,
    `Customer: ${customerName}\n`,
    `Valid Until: ${quote.valid_until}\n`,
    `Items: ${quote.items.length}\n`,
    `Subtotal: ${quote.subtotal.toFixed(2)}\n`,
    `Discount: ${quote.discount_amount.toFixed(2)}\n`,
    `Tax: ${quote.tax_amount.toFixed(2)}\n`,
    `Total: ${quote.total.toFixed(2)}\n`,
  ].join('')
  return Buffer.from(body, 'utf-8')
}
