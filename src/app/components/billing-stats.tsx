"use client"

import { Grid, Paper, Typography, Box, useTheme as useMuiTheme } from "@mui/material"
import {
  AttachMoney as MoneyIcon,
  AccessTime as PendingIcon,
  Warning as OverdueIcon,
  Receipt as InvoiceIcon,
} from "@mui/icons-material"
import { Invoice } from "../types/invoice"
import { useTranslations } from "next-intl"
import { useEffect } from "react"

interface BillingStatsProps {
  invoices: Invoice[]
}

export default function BillingStats({ invoices }: BillingStatsProps) {
  
  const t = useTranslations("HomePage");
  const g = useTranslations("General");
  const theme = useMuiTheme()
  const isDarkMode = theme.palette.mode === "dark"

  const totalPaid = invoices.filter((inv) => inv.status?.toLowerCase() === "paid").reduce((sum, inv) => sum + Number(inv.amount || 0), 0)

  const totalPending = invoices.filter((inv) => inv.status?.toLowerCase() === "pending").reduce((sum, inv) => sum + Number(inv.amount || 0), 0)

  const totalOverdue = invoices.filter((inv) => inv.status?.toLowerCase() === "overdue").reduce((sum, inv) => sum + Number(inv.amount || 0), 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const stats = [
    {
      title: t("total-paid"),
      value: formatCurrency(totalPaid),
      icon: <MoneyIcon sx={{ fontSize: 40 }} color="success" />,
      color: theme.palette.success.main,
      bgColor: isDarkMode ? "rgba(76, 175, 80, 0.1)" : "rgba(76, 175, 80, 0.05)",
    },
    {
      title: t("pending"),
      value: formatCurrency(totalPending),
      icon: <PendingIcon sx={{ fontSize: 40 }} color="warning" />,
      color: theme.palette.warning.main,
      bgColor: isDarkMode ? "rgba(255, 152, 0, 0.1)" : "rgba(255, 152, 0, 0.05)",
    },
    {
      title: t("overdue"),
      value: formatCurrency(totalOverdue),
      icon: <OverdueIcon sx={{ fontSize: 40 }} color="error" />,
      color: theme.palette.error.main,
      bgColor: isDarkMode ? "rgba(244, 67, 54, 0.1)" : "rgba(244, 67, 54, 0.05)",
    },
    {
      title: t("total-invoices"),
      value: invoices.length,
      icon: <InvoiceIcon sx={{ fontSize: 40 }} color="info" />,
      color: theme.palette.info.main,
      bgColor: isDarkMode ? "rgba(33, 150, 243, 0.1)" : "rgba(33, 150, 243, 0.05)",
    },
  ]

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid size={{xs:12, sm:6, md:3}} key={index}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderLeft: 4,
              borderColor: stat.color,
              backgroundColor: stat.bgColor,
            }}
          >
            <Box>
              <Typography component="h2" variant="subtitle1" color="text.secondary">
                {stat.title}
              </Typography>
              <Typography component="p" variant="h4">
                {stat.value}
              </Typography>
            </Box>
            {stat.icon}
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
