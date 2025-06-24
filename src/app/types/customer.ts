import { Company } from "./company"
import { User } from "next-auth"
// import { User } from "./user"

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
    user_id?: string
    users?: User
  }
  