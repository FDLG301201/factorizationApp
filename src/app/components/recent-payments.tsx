"use client"

import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { Invoice } from "../types/invoice"
import { useTranslations } from "next-intl"

interface RecentPaymentsProps {
  invoices: Invoice[]
}

export default function RecentPayments({ invoices }: RecentPaymentsProps) {

  const t = useTranslations("HomePage");
  const g = useTranslations("General");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {t("recent-payments")}
      </Typography>
      <List>
        {invoices.length > 0 ? (
          invoices.map((invoice) => (
            <ListItem key={invoice.id} divider>
              <ListItemText primary={invoice.customer} secondary={` ${g("payment-received-on")}  ${invoice.date}`} />
              <Typography variant="body2" color="text.secondary">
                {formatCurrency(invoice.amount)}
              </Typography>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No recent payments" />
          </ListItem>
        )}
      </List>
    </>
  )
}
