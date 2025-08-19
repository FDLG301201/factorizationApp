"use client"

import { useEffect, useState } from 'react'
import QuoteForm from '@/app/components/quotes/quote-form'
import { Customer } from '@/app/types/customer'
import { Box } from '@mui/material'

export default function QuotesPage() {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/customers')
        const data = await res.json()
        setCustomers(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <QuoteForm customers={customers} />
    </Box>
  )
}
