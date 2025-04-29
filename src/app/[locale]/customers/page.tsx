"use client"

import type React from "react"

import { useState } from "react"
import { Box, Container, Tab, Tabs } from "@mui/material"
import { Customer } from "../../types/customer"
import { Invoice } from "../../types/invoice"
import CustomerList from "../../components/customers/customer-list"
import CustomerDetail from "../../components/customers/customer-detail"
import { useTranslation } from "next-i18next"
import { useTranslations } from "next-intl"


// Sample data
const sampleCustomers: Customer[] = [
  {
    id: "1",
    identifier: "Cliente 003",
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
    identifier: "00045",
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
    identifier: "402-0052344-3",
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
  {
    id: "4",
    identifier: "1234567890",
    name: "Luis Felipe",
    email: "luis@example.com",
    phone: "(555) 555-5555",
    company: "Luis Felipe Dev",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA",
    },
    notes: "Desarrollador web",
    createdAt: "2023-04-15",
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

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>(sampleCustomers)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [activeTab, setActiveTab] = useState(0)

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

  const t = useTranslations("Custumers");
  const g = useTranslations("General");

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
    </Container>
  )
}
