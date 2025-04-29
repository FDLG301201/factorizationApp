"use client"

import { useState } from "react"
import { Box, Container, Paper, Typography, Button } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"
import InvoiceForm from "@/app/components/invoices/invoice-form"
import InvoiceList from "@/app/components/invoices/invoice-list"
import { Customer } from "@/app/types/customer"
import { Invoice } from "@/app/types/invoice"
import { useTranslations } from "next-intl"


// Sample data
const sampleCustomers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    company: "Acme Inc.",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA",
    },
    notes: "Key client for enterprise solutions",
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 987-6543",
    company: "Globex Corporation",
    address: {
      street: "456 Market St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      country: "USA",
    },
    createdAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    phone: "(555) 456-7890",
    company: "Stark Industries",
    address: {
      street: "789 Howard St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "USA",
    },
    notes: "Prefers communication via email",
    createdAt: "2023-03-10",
  },
]

const sampleInvoices: Invoice[] = [
  {
    id: "1",
    customer: "John Doe",
    amount: 1200,
    date: "2023-04-15",
    dueDate: "2023-05-15",
    status: "paid",
  },
  {
    id: "2",
    customer: "Jane Smith",
    amount: 850,
    date: "2023-04-20",
    dueDate: "2023-05-20",
    status: "pending",
  },
  {
    id: "3",
    customer: "Robert Johnson",
    amount: 3200,
    date: "2023-04-25",
    dueDate: "2023-05-25",
    status: "overdue",
  },
  {
    id: "4",
    customer: "John Doe",
    amount: 750,
    date: "2023-05-10",
    dueDate: "2023-06-10",
    status: "pending",
  },
]

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>(sampleInvoices)
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState<Invoice | undefined>(undefined)

  const handleCreateInvoice = (invoice: Omit<Invoice, "id">) => {
    const newInvoice = {
      ...invoice,
      id: Math.random().toString(36).substr(2, 9),
    }
    setInvoices([...invoices, newInvoice])
    setShowInvoiceForm(false)
  }

  const handleEditInvoice = (id: string, updatedInvoice: Omit<Invoice, "id">) => {
    setInvoices(
      invoices.map((invoice) =>
        invoice.id === id
          ? {
              ...updatedInvoice,
              id,
            }
          : invoice,
      ),
    )
    setShowInvoiceForm(false)
    setEditingInvoice(undefined)
  }

  const handleDeleteInvoice = (id: string) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id))
  }

  const handleAddClick = () => {
    setEditingInvoice(undefined)
    setShowInvoiceForm(true)
  }

  const handleEditClick = (invoice: Invoice) => {
    setEditingInvoice(invoice)
    setShowInvoiceForm(true)
  }

  const t = useTranslations("Invoices");
  const g = useTranslations("General");

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("invoices")}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
          {t("create-invoice")}
        </Button>
      </Box>

      <Paper sx={{ p: 2 }}>
        <InvoiceList
          invoices={invoices}
          onCreateClick={handleAddClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteInvoice}
        />
      </Paper>

      {showInvoiceForm && (
        <InvoiceForm
          onSubmit={editingInvoice ? (invoice) => handleEditInvoice(editingInvoice.id, invoice) : handleCreateInvoice}
          onCancel={() => {
            setShowInvoiceForm(false)
            setEditingInvoice(undefined)
          }}
          customers={sampleCustomers}
          invoice={editingInvoice}
        />
      )}
    </Container>
  )
}
