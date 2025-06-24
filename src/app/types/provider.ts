import { User } from "next-auth"
// import { User } from "./user"

export interface Provider {
    id: string
    name: string
    street?: string
    city?: string
    state?: string
    zip_code?: string
    country?: string
    user_id?: string
    users?: User
  }
  