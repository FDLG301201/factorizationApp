import { Customer } from './customer'

// Lightweight item type for temporary quotes. We intentionally avoid
// invoice-only fields like id/invoice_id to keep creation in-memory and flexible.
export interface QuoteItem {
  inventory_id?: string | number
  quantity?: number
  unit_price?: number
  item_custom_price?: number
  subtotal?: number
  item_discount_type?: 'none' | 'percentage' | 'amount'
  item_discount_value?: number
  item_discount_amount?: number
  subtotal_after_discount?: number
}

export interface QuoteData {
  // Customer
  customer_id: number
  customer?: Customer

  // Items
  items: QuoteItem[]

  // Quote specifics
  quote_number: string
  valid_until?: string | Date // ISO date string or Date
  notes?: string

  // Calculations
  subtotal?: number
  tax_amount?: number
  discount_amount?: number
  total?: number
}
