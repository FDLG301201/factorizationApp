export interface Invoice {
    id: string
    customer: string
    amount: number
    date: string
    dueDate: string
    status: "pending" | "paid" | "overdue"
  }
  