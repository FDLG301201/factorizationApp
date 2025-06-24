import { User } from "next-auth"
// import { User } from "./user"
import { Category } from "./category"
import { Provider } from "./provider"

export interface Inventory {
    id: string
    name: string
    price: number
    customPrice?: number
    quantity: number
    provider_id?: string
    providers?: Provider
    description?: string
    category_id?: string
    categories?: Category
    user_id?: string
    users?: User
  } 
  