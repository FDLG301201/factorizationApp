"use client"

import { useEffect, useState } from "react"
import { Alert, Backdrop, Box, CircularProgress, Container, Grid, Paper, Snackbar, Typography, useTheme } from "@mui/material"
import { Customer } from "../../types/customer"
import { Invoice } from "../../types/invoice"
import InvoiceForm from "../../components/invoices/invoice-form"
import RecentPayments from "../../components/recent-payments"
import InvoiceList from "../../components/invoices/invoice-list"
import BillingStats from "../../components/billing-stats"
import { useTranslations } from "next-intl"

export default function Dashboard() {

    const t = useTranslations("HomePage");
    const g = useTranslations("General");
    const theme = useTheme()
    const [showInvoiceForm, setShowInvoiceForm] = useState(false)
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchInvoices()
        fetchCustomers()
    }, [])
    
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
                            showActions={false}
                            showCreateButton={false}
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
                    customers={customers}
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
