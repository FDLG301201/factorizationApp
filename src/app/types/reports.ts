export type PeriodType = "today" | "week" | "month" | "year" | "custom"

export interface DateRange {
    startDate: Date
    endDate: Date
    period: PeriodType
    referenceDate?: Date // ← NUEVA LÍNEA
}

export interface Invoice {
  id: string
  number: string
  date: string
  customerName: string
  amount: number
  status: "paid" | "pending" | "overdue"
}

export interface DailySales {
  date: string
  sales: number
  invoices: number
}

export interface SalesByCategory {
  name: string
  value: number
}

export interface SalesData {
  totalSales: number
  invoicesCount: number
  averageDaily: number
  salesGrowth: number
  invoicesGrowth: number
  averageGrowth: number
  dailySales: DailySales[]
  salesByCategory: SalesByCategory[]
  invoices: Invoice[]
}

// AGREGAR al final del archivo:
export interface DateRangePickerValue {
    startDate: Date | null
    endDate: Date | null
  }
  
export interface PeriodConfig {
    type: PeriodType
    referenceDate?: Date
    customRange?: DateRangePickerValue
  }
  