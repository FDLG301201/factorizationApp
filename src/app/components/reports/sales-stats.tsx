"use client"

import { Grid, Card, CardContent, Typography, Box, Chip, Avatar } from "@mui/material"
import { TrendingUp, TrendingDown, Receipt, AttachMoney, Assessment } from "@mui/icons-material"
import { useTranslations } from "next-intl"
import type { SalesData, DateRange } from "@/app/types/reports"

interface SalesStatsProps {
  data: SalesData | null
  dateRange: DateRange
}

export function SalesStats({ data, dateRange }: SalesStatsProps) {
  const t = useTranslations("Reports.stats")

  if (!data) return null

  const formatCurrency = (amount: number) => {
    const locale = document.documentElement.lang || 'es'
    const currency = locale === 'es' ? 'DOP' : 'USD'
    return new Intl.NumberFormat(locale, {
      style: 'currency' as const,
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatPercentage = (value: number | null | undefined) => {
    if (value === null || value === undefined) {
      return "N/A"
    }
    const sign = value >= 0 ? "+" : ""
    return `${sign}${value.toFixed(1)}%`
  }

  const stats = [
    {
      title: t("totalSales"),
      value: formatCurrency(data.totalSales),
      change: data.salesGrowth,
      icon: AttachMoney,
      color: "primary",
    },
    {
      title: t("invoicesCount"),
      value: data.invoicesCount.toString(),
      change: data.invoicesGrowth,
      icon: Receipt,
      color: "secondary",
    },
    {
      title: t("averageDaily"),
      value: formatCurrency(data.averageDaily),
      change: data.averageGrowth,
      icon: Assessment,
      color: "success",
    },
  ]

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        const isPositive = stat.change >= 0

        return (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="text.secondary" gutterBottom variant="body2">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Chip
                        icon={isPositive ? <TrendingUp /> : <TrendingDown />}
                        label={formatPercentage(stat.change)}
                        color={isPositive ? "success" : "error"}
                        size="small"
                        variant="outlined"
                      />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        {t("comparedToPrevious")}
                      </Typography>
                    </Box>
                  </Box>
                  <Avatar sx={{ bgcolor: `${stat.color}.main`, width: 56, height: 56 }}>
                    <IconComponent />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
