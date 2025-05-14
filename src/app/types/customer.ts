import { Address } from "./address"
import { Company } from "./company"

export interface Customer {
    id: string
    identifier?: string
    name: string
    email: string
    phone: string
    address_id: string
    addresses?: Address
    company?: string
    companies?: Company
    notes?: string
    createdAt: string
  }
  