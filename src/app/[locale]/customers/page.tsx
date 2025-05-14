"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Alert, Backdrop, Box, CircularProgress, Container, Snackbar, Tab, Tabs } from "@mui/material"
import { Customer } from "../../types/customer"
import { Invoice } from "../../types/invoice"
import CustomerList from "../../components/customers/customer-list"
import CustomerDetail from "../../components/customers/customer-detail"
import { useTranslation } from "next-i18next"
import { useTranslations } from "next-intl"

const sampleInvoices: Invoice[] = [
  {
    id: "1",
    customer_id: "1",
    customers: {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      company: "Acme Inc.",
      address_id: "1",
      addresses: {
        id: "1",
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip_code: "94105",
        country: "USA",
      },
      notes: "Key client for enterprise solutions",
      createdAt: "2023-01-15",
    },
    amount: 1200,
    date: "2023-04-15",
    due_date: "2023-05-15",
    status: "paid",
  },
  {
    id: "2",
    customer_id: "2",
    customers: {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(555) 987-6543",
      company: "Globex Corporation",
      address_id: "1",
      addresses: {
        id: "1",
        street: "456 Market St",
        city: "San Francisco",
        state: "CA",
        zip_code: "94103",
        country: "USA",
      },
      notes: "Prefers communication via email",
      createdAt: "2023-02-20",
    },
    amount: 850,
    date: "2023-04-20",
    due_date: "2023-05-20",
    status: "pending",
  },
  {
    id: "3",
    customer_id: "3",
    customers: {
      id: "3",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      phone: "(555) 456-7890",
      company: "Stark Industries",
      address_id: "1",
      addresses: {
        id: "1",
        street: "789 Howard St",
        city: "San Francisco",
        state: "CA",
        zip_code: "94107",
        country: "USA",
      },
      notes: "Prefers communication via email",
      createdAt: "2023-03-10",
    },
    amount: 3200,
    date: "2023-04-25",
    due_date: "2023-05-25",
    status: "overdue",
  },
  {
    id: "4",
    customer_id: "4",
    customers: {
      id: "4",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      company: "Acme Inc.",
      address_id: "1",
      addresses: {
        id: "1",
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zip_code: "94105",
        country: "USA",
      },
      notes: "Key client for enterprise solutions",
      createdAt: "2023-01-15",
    },
    amount: 750,
    date: "2023-05-10",
    due_date: "2023-06-10",
    status: "pending",
  },
]

export default function CustomersPage() {
  const t = useTranslations("Customers");
  const g = useTranslations("General");
  const [customers, setCustomers] = useState<Customer[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCustomers()
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    if (newValue === 0) {
      setSelectedCustomer(null)
    }
  }

  const handleAddCustomer = (customerData: Omit<Customer, "id" | "createdAt">) => {
    const newCustomer: Customer = {
      ...customerData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString().split("T")[0],
    }
    setCustomers([...customers, newCustomer])
  }

  const handleEditCustomer = (id: string, customerData: Omit<Customer, "id" | "createdAt">) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === id
        ? {
          ...customer,
          ...customerData,
        }
        : customer,
    )
    setCustomers(updatedCustomers)

    if (selectedCustomer && selectedCustomer.id === id) {
      const updatedCustomer = updatedCustomers.find((c) => c.id === id)
      if (updatedCustomer) {
        setSelectedCustomer(updatedCustomer)
      }
    }
  }

  const handleDeleteCustomer = (id: string) => {
    setCustomers(customers.filter((customer) => customer.id !== id))
    if (selectedCustomer && selectedCustomer.id === id) {
      setSelectedCustomer(null)
      setActiveTab(0)
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
          onDeleteCustomer={handleDeleteCustomer}
        />
      ) : (
        selectedCustomer && (
          <CustomerDetail
            customer={selectedCustomer}
            invoices={sampleInvoices}
            onEdit={(customer) => {
              setSelectedCustomer(customer)
              setActiveTab(0)
            }}
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

    </Container>
  )
}
