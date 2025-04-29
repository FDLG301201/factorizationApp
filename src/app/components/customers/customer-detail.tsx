"use client"

import { Box, Button, Card, CardContent, Chip, Divider, Grid, Paper, Typography, useTheme } from "@mui/material"
import { Edit as EditIcon, Email as EmailIcon, Phone as PhoneIcon, Business as BusinessIcon } from "@mui/icons-material"
import { Customer } from "@/app/types/customer"
import { Invoice } from "@/app/types/invoice"


interface CustomerDetailProps {
  customer: Customer
  invoices: Invoice[]
  onEdit: (customer: Customer) => void
}

export default function CustomerDetail({ customer, invoices, onEdit }: CustomerDetailProps) {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"

  const customerInvoices = invoices.filter((invoice) => invoice.customer === customer.name)

  const totalBilled = customerInvoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalPaid = customerInvoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalPending = customerInvoices
    .filter((invoice) => invoice.status === "pending")
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalOverdue = customerInvoices
    .filter((invoice) => invoice.status === "overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
          <Box>
            <Typography variant="h5" component="h2">
              {customer.name}
            </Typography>
            {customer.company && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                <BusinessIcon fontSize="small" sx={{ mr: 1 }} />
                {customer.company}
              </Typography>
            )}
          </Box>
          <Button variant="outlined" startIcon={<EditIcon />} onClick={() => onEdit(customer)}>
            Edit
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
              <Typography variant="subtitle1" gutterBottom>
                Contact Information
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
                Address
              </Typography>
              <Typography>
                {customer.address.street}
                <br />
                {customer.address.city}, {customer.address.state} {customer.address.zipCode}
                <br />
                {customer.address.country}
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
              <Typography variant="subtitle1" gutterBottom>
                Billing Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    Total Billed
                  </Typography>
                  <Typography variant="h6">{formatCurrency(totalBilled)}</Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    Total Paid
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    {formatCurrency(totalPaid)}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    Pending
                  </Typography>
                  <Typography variant="h6" color="warning.main">
                    {formatCurrency(totalPending)}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    Overdue
                  </Typography>
                  <Typography variant="h6" color="error.main">
                    {formatCurrency(totalOverdue)}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Invoice History ({customerInvoices.length})
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
                        INV-{invoice.id} ({invoice.date})
                      </Typography>
                      <Box>
                        <Chip
                          label={invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          color={
                            invoice.status === "paid" ? "success" : invoice.status === "pending" ? "warning" : "error"
                          }
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" component="span">
                          {formatCurrency(invoice.amount)}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No invoices yet
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>

          {customer.notes && (
            <Grid size={{ xs: 12 }}>
              <Paper sx={{ p: 2, bgcolor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Notes
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2">{customer.notes}</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  )
}
