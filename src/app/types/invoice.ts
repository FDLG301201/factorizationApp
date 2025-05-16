import { Customer } from "./customer"

export interface Invoice {
    id: string
    customer_id: string
    customers?: Customer
    amount: number
    date: Date
    due_date: Date
    status: "pending" | "paid" | "overdue"
  }
  