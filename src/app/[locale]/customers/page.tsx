"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Alert, Backdrop, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Tab, Tabs } from "@mui/material"
import { Customer } from "../../types/customer"
import { Invoice } from "../../types/invoice"
import CustomerList from "../../components/customers/customer-list"
import CustomerDetail from "../../components/customers/customer-detail"
import { useTranslation } from "next-i18next"
import { useTranslations } from "next-intl"

export default function CustomersPage() {
  const t = useTranslations("Customers");
  const g = useTranslations("General");
  const [customers, setCustomers] = useState<Customer[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);

  useEffect(() => {
    fetchCustomers()
    fetchInvoices()
  }, [])

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    if (newValue === 0) {
      setSelectedCustomer(null)
    }
  }

  const handleAddCustomer = async (customerData: Omit<Customer, "id" | "createdAt">) => {
    try {
      setLoading(true);
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      })
      const data = await response.json()
      fetchCustomers();
      setSuccessMessage(t("customer-created"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  const handleEditCustomer = async (id: string, customerData: Omit<Customer, "id" | "createdAt">) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/customers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      const updated = await response.json();

      if (selectedCustomer) {
        setSelectedCustomer(updated);
      }

      fetchCustomers();

      setSuccessMessage(t("customer-updated"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }


  }

  const handleConfirmDelete = (id: string) => {
    setSelectedCustomerId(id)
    setShowDeleteModal(true);
  }

  const handleDeleteCustomer = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/customers/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error("Error deleting customer");
      fetchCustomers();
      setShowDeleteModal(false);
      setSuccessMessage(t("customer-deleted"));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleViewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer)
    setActiveTab(1)
  }

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label={t("all-customer")} />
          {selectedCustomer && <Tab label={`${selectedCustomer.name}`} />}
        </Tabs>
      </Box>

      {activeTab === 0 ? (
        <CustomerList
          customers={customers}
          onAddCustomer={handleAddCustomer}
          onEditCustomer={handleEditCustomer}
          // onDeleteCustomer={(id: string) => { handleDeleteCustomer(id) }}
          onDeleteCustomer={handleConfirmDelete}
          onConsultCustomer={(customer: Customer) => { handleViewCustomer(customer) }}
        />
      ) : (
        selectedCustomer && (
          <CustomerDetail
            customer={selectedCustomer}
            invoices={invoices}
            onEdit={handleEditCustomer}
          />
        )
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
            {t("sure-delete-customer")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)}>{g("cancel")}</Button>
          <Button onClick={() => selectedCustomerId && handleDeleteCustomer(selectedCustomerId)}>
            {t("delete-customer")}
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  )
}
