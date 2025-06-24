export interface InvoiceItems {
    id: string
    invoice_id: string
    inventory_id: string
    quantity: number
    unit_price: number
    item_custom_price?: number
    subtotal: number
}
    