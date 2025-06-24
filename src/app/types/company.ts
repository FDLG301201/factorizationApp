import { User } from "next-auth"
// import { User } from "./user"

export interface Company {
    id: string
    name: string
    phone: string
    email: string
    street?: string
    city?: string
    state?: string
    zip_code?: string
    country?: string
    user_id?: string
    users?: User
}