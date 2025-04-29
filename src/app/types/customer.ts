export interface Customer {
    id: string
    identifier?: string
    name: string
    email: string
    phone: string
    address: {
      street: string
      city: string
      state: string
      zipCode: string
      country: string
    }
    company?: string
    notes?: string
    createdAt: string
  }
  