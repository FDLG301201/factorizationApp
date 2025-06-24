import { Customer } from "./customer"
import { User } from "next-auth"
import { InvoiceStatus } from "./invoice-status"
import { InvoiceItems } from "./invoice-items"

// import { User } from "./user"

export interface Invoice {
    id: string
    customer_id: string
    customers?: Customer
    amount?: number | undefined
    date: Date
    due_date: Date
    payment_date?: Date

    // status: "pending" | "paid" | "overdue"
    status_id?: string
    invoice_statuses?: InvoiceStatus


    //USER
    user_id?: string
    users?: User

    // Nuevos campos
    subtotal?: number
    tax_percent?: number
    tax_amount?: number 
    discount_type?: 'percentage' | 'fixed'
    discount_value?: number
    discount_amount?: number
    invoice_items?: InvoiceItems[]
}