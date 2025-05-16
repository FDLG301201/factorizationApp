"use client"

import { Box, Button, Card, CardContent, Chip, Divider, Grid, Paper, Typography, useTheme } from "@mui/material"
import { Edit as EditIcon, Email as EmailIcon, Phone as PhoneIcon, Business as BusinessIcon } from "@mui/icons-material"
import { Customer } from "@/app/types/customer"
import { Invoice } from "@/app/types/invoice"
import { useLocale, useTranslations } from "next-intl"
import CustomerForm from "./customer-form"
import { useState } from "react"


interface CustomerDetailProps {
  customer: Customer
  invoices: Invoice[]
  onEdit: (id: string, customerData: Omit<Customer, "id" | "createdAt">) => void
}

export default function CustomerDetail({ customer, invoices, onEdit }: CustomerDetailProps) {
  const t = useTranslations("Customers");
  const g = useTranslations("General");
  const s = useTranslations("Status");

    
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"
  const locale = useLocale();
  const [showForm, setShowForm] = useState(false)

  const customerInvoices = invoices.filter((invoice) => invoice.customers.name === customer.name)

  const totalBilled = customerInvoices.reduce((sum, invoice) => sum + Number(invoice.amount), 0)
  const totalPaid = customerInvoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => sum + Number(invoice.amount), 0)
  const totalPending = customerInvoices
    .filter((invoice) => invoice.status === "pending")
    .reduce((sum, invoice) => sum + Number(invoice.amount), 0)
  const totalOverdue = customerInvoices
    .filter((invoice) => invoice.status === "overdue")
    .reduce((sum, invoice) => sum + Number(invoice.amount), 0)


  const handleEditClick = () => {
    setShowForm(true)
  }

  const handleFormSubmit = (customerData: Omit<Customer, "id" | "createdAt">) => {
    if (customer) {
      onEdit(customer.id.toString(), customerData)
    }
    setShowForm(false)
  }

  const handleFormCancel = () => {
    setShowForm(false)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);

    if (locale === "es") {
      // Español: dd/mm/yyyy
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } else {
      // Inglés u otro: mm/dd/yyyy
      return date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "success"
      case "pending":
        return "warning"
      case "overdue":
        return "error"
      default:
        return "default"
    }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
          <Box>
            <Typography variant="h5" component="h2">
              {customer.name}
            </Typography>
            {customer.companies?.name && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                <BusinessIcon fontSize="small" sx={{ mr: 1 }} />
                {customer.companies?.name}
              </Typography>
            )}
          </Box>
          <Button variant="outlined" startIcon={<EditIcon />} onClick={() => handleEditClick()}>
            {g("edit")}
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
              <Typography variant="subtitle1" gutterBottom>
                {t("contact-information")}
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography>{customer.email}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography>{customer.phone}</Typography>
              </Box>

              <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                {g("address")}
              </Typography>
              <Typography>
                {customer.street}
                <br />
                {customer.city}, {customer.state} {customer.zip_code}
                <br />
                {customer.country}
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
              <Typography variant="subtitle1" gutterBottom>
                {t("billing-summary")}
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {g("total-billed")}
                  </Typography>
                  <Typography variant="h6">{formatCurrency(totalBilled)}</Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {g("total-paid")}
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    {formatCurrency(totalPaid)}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {s("pending")}
                  </Typography>
                  <Typography variant="h6" color="warning.main">
                    {formatCurrency(totalPending)}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {s("overdue")}
                  </Typography>
                  <Typography variant="h6" color="error.main">
                    {formatCurrency(totalOverdue)}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t("invoice-history")} ({customerInvoices.length})
                </Typography>
                {customerInvoices.length > 0 ? (
                  customerInvoices.map((invoice) => (
                    <Box
                      key={invoice.id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 1,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography variant="body2">
                        INV-{invoice.id} ({formatDate(invoice.date)})
                      </Typography>
                      <Box>
                        <Chip
                          label={s(invoice.status)}
                          color={getStatusColor(invoice.status) as any}
                          size="small"
                          sx={{ mr: 3 }}
                        />
                        <Typography variant="body2" component="span">
                          {formatCurrency(invoice.amount)}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {t("no-invoices-yet")}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>

          {customer.notes && (
            <Grid size={{ xs: 12 }}>
              <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
                <Typography variant="subtitle1" gutterBottom>
                  {g("notes")}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2">{customer.notes}</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </CardContent>

      {showForm && (
        <CustomerForm customer={customer} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}

    </Card>
  )
}
