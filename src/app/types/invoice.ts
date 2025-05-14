import { Customer } from "./customer"

export interface Invoice {
    id: string
    customer_id: string
    customers: Customer
    amount: number
    date: string
    due_date: string
    status: "pending" | "paid" | "overdue"
  }
  