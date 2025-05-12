"use client"

import { useState } from "react"
import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material"
import { Customer } from "../../types/customer"
import { Invoice } from "../../types/invoice"
import InvoiceForm from "../../components/invoices/invoice-form"
import RecentPayments from "../../components/recent-payments"
import InvoiceList from "../../components/invoices/invoice-list"
import BillingStats from "../../components/billing-stats"
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

export default function Dashboard() {
    
    const theme = useTheme()
    const [showInvoiceForm, setShowInvoiceForm] = useState(false)
    const [invoices, setInvoices] = useState<Invoice[]>([
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
    ])

    const handleCreateInvoice = (invoice: Omit<Invoice, "id">) => {
        const newInvoice = {
            ...invoice,
            id: Math.random().toString(36).substr(2, 9),
        }
        setInvoices([...invoices, newInvoice])
        setShowInvoiceForm(false)
    }

    const t = useTranslations("HomePage");
    const g = useTranslations("General");

    return (
        <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {t("billing-dashboard")}
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Billing Stats */}
                <Grid size={{ xs: 12 }}>
                    <BillingStats invoices={invoices} />
                </Grid>

                {/* Recent Invoices */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 450,
                            overflow: "auto",
                        }}
                    >
                        <InvoiceList
                            invoices={invoices}
                            onCreateClick={() => setShowInvoiceForm(true)}
                            onEditClick={() => { }}
                            onDeleteClick={() => { }}
                        />
                    </Paper>
                </Grid>

                {/* Recent Payments */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            height: 450,
                            overflow: "auto",
                        }}
                    >
                        <RecentPayments invoices={invoices.filter((inv) => inv.status === "paid")} />
                    </Paper>
                </Grid>
            </Grid>

            {showInvoiceForm && (
                <InvoiceForm
                    onSubmit={handleCreateInvoice}
                    onCancel={() => setShowInvoiceForm(false)}
                    customers={sampleCustomers}
                />
            )}
        </Container>
    )
}
