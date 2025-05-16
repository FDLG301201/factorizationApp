import { Company } from "./company"

export interface Customer {
    id: string
    identifier?: string
    name: string
    email?: string
    phone: string
    company_id?: string
    companies?: Company
    street?: string
    city?: string
    state?: string
    zip_code?: string
    country?: string
    notes?: string
  }
  