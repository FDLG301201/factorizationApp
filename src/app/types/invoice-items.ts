export interface InvoiceItems {
    id: string
    invoice_id: string
    inventory_id: string
    quantity: number
    unit_price: number
    item_custom_price?: number
    subtotal: number
    // Campos para descuento individual
    item_discount_type?: 'none' | 'percentage' | 'amount'
    item_discount_value?: number
    item_discount_amount?: number
    subtotal_after_discount?: number
}