"use client"

import { useEffect, useState } from "react"
import { Box, Container, Paper, Typography, Button, Divider, Snackbar, Alert, Backdrop, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

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

  const handleCreateInvoice = async (invoice: Omit<Invoice, "id">) => {
    try {
      setLoading(true);
      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
      })
      const data = await response.json()
      fetchInvoices();
      setSuccessMessage(t("invoice-created"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
      setShowInvoiceForm(false);
    }
  }

  const handleEditInvoice = async (id: string, updatedInvoice: Omit<Invoice, "id">) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInvoice),
      });
      const data = await response.json();
      fetchInvoices();
      setSuccessMessage(t("invoice-updated"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
      setShowInvoiceForm(false);
      setEditingInvoice(undefined);
    }
  }

  const handleDeleteInvoice = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/invoices/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error deleting invoice");
      fetchInvoices();
      setShowDeleteModal(false);
      setSuccessMessage(t("invoice-deleted"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  const handleAddClick = () => {
    setEditingInvoice(undefined)
    setShowInvoiceForm(true)
  }

  const handleEditClick = (invoice: Invoice) => {
    setEditingInvoice(invoice)
    setShowInvoiceForm(true)
  }

  const handleDeleteClick = (id: string) => {
    setSelectedInvoiceId(id);
    setShowDeleteModal(true);
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
          onDeleteClick={handleDeleteClick}
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

      <Snackbar
        open={!!successMessage}
        autoHideDuration={4000}
        onClose={() => setSuccessMessage(null)}
      >
        <Alert
          onClose={() => setSuccessMessage(null)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {successMessage}
        </Alert>
      </Snackbar>

      <Dialog
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {g("confirmation")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("sure-delete-invoice")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)}>{g("cancel")}</Button>
          <Button onClick={() => selectedInvoiceId && handleDeleteInvoice(selectedInvoiceId)}>
            {t("delete-invoice")}
          </Button>
        </DialogActions>
      </Dialog>


    </Container>
  )
}
