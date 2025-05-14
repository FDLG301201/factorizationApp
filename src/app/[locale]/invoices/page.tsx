"use client"

import { useEffect, useState } from "react"
import { Box, Container, Paper, Typography, Button, Divider, Snackbar, Alert, Backdrop, CircularProgress } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"
import InvoiceForm from "@/app/components/invoices/invoice-form"
import InvoiceList from "@/app/components/invoices/invoice-list"
import { Customer } from "@/app/types/customer"
import { Invoice } from "@/app/types/invoice"
import { useTranslations } from "next-intl"

export default function InvoicesPage() {

  const t = useTranslations("Invoices");
  const g = useTranslations("General");
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState<Invoice | undefined>(undefined)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInvoices()
    fetchCustomers()
  }, []);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/invoices")
      const data = await response.json()
      setInvoices(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/customers")
      const data = await response.json()
      setCustomers(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

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

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("invoices")}
        </Typography>
        {/* <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
          {t("create-invoice")}
        </Button> */}
      </Box>

      <Divider sx={{ color: "primary.main", width: "100%", mb: 3 }} />

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
          customers={customers}
          invoice={editingInvoice}
        />
      )}

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert
          onClose={() => setError(null)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>

    </Container>
  )
}
