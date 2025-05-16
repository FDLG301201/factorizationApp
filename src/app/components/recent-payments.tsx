"use client"

import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { Invoice } from "../types/invoice"
import { useLocale, useTranslations } from "next-intl"

interface RecentPaymentsProps {
  invoices: Invoice[]
}

export default function RecentPayments({ invoices }: RecentPaymentsProps) {

  const t = useTranslations("HomePage");
  const g = useTranslations("General");
  const locale = useLocale();

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

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {t("recent-payments")}
      </Typography>
      <List>
        {invoices.length > 0 ? (
          invoices.map((invoice) => (
            <ListItem key={invoice.id} divider>
              <ListItemText primary={invoice.customers?.name + " - " + invoice.customers?.identifier} secondary={` ${g("payment-received-on")}  ${formatDate(invoice.date.toString())}`} />
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
