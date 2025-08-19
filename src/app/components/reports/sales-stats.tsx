"use client"

import { Grid, Card, CardContent, Typography, Box, Chip, Avatar, Skeleton } from "@mui/material"
import { TrendingUp, TrendingDown, Receipt, AttachMoney, Assessment } from "@mui/icons-material"
import { useTranslations } from "next-intl"
import type { SalesData, DateRange } from "@/app/types/reports"

interface SalesStatsProps {
  data: SalesData | null
  dateRange: DateRange
}

export function SalesStats({ data, dateRange }: SalesStatsProps) {
  const t = useTranslations("Reports.stats")

  const formatCurrency = (amount: number) => {
    if (!amount || isNaN(amount)) return "$0.00 DOP";
    
    return new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatPercentage = (value: number | null | undefined) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "N/A"
    }
    const sign = value >= 0 ? "+" : ""
    return `${sign}${value.toFixed(1)}%`
  }

  // Mostrar skeleton mientras carga
  if (!data) {
    return (
      <Grid container spacing={3}>
        {[1, 2, 3].map((index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="80%" height={40} sx={{ mt: 1 }} />
                    <Box display="flex" alignItems="center" mt={1}>
                      <Skeleton variant="rectangular" width={80} height={24} sx={{ borderRadius: 1 }} />
                      <Skeleton variant="text" width="40%" height={16} sx={{ ml: 1 }} />
                    </Box>
                  </Box>
                  <Skeleton variant="circular" width={56} height={56} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  }

  const stats = [
    {
      title: t("totalSales") || "Ventas Totales",
      value: formatCurrency(data.totalSales || 0),
      change: data.salesGrowth || 0,
      icon: AttachMoney,
      color: "primary" as const,
    },
    {
      title: t("invoicesCount") || "Cantidad de Facturas",
      value: (data.invoicesCount || 0).toString(),
      change: data.invoicesGrowth || 0,
      icon: Receipt,
      color: "secondary" as const,
    },
    {
      title: t("averageDaily") || "Promedio Diario",
      value: formatCurrency(data.averageDaily || 0),
      change: data.averageGrowth || 0,
      icon: Assessment,
      color: "success" as const,
    },
  ]

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        const isPositive = (stat.change || 0) >= 0
        const hasValidChange = stat.change !== null && stat.change !== undefined && !isNaN(stat.change)

        return (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[8],
                }
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box flex={1}>
                    <Typography 
                      color="text.secondary" 
                      gutterBottom 
                      variant="body2"
                      sx={{ fontWeight: 500 }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography 
                      variant="h4" 
                      component="div" 
                      sx={{ 
                        fontWeight: 700,
                        color: `${stat.color}.main`,
                        mb: 1
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      {hasValidChange ? (
                        <>
                          <Chip
                            icon={isPositive ? <TrendingUp /> : <TrendingDown />}
                            label={formatPercentage(stat.change)}
                            color={isPositive ? "success" : "error"}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              fontWeight: 600,
                              '& .MuiChip-icon': {
                                fontSize: '1rem'
                              }
                            }}
                          />
                          <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            ml={1}
                            sx={{ fontSize: '0.75rem' }}
                          >
                            {t("comparedToPrevious") || "vs período anterior"}
                          </Typography>
                        </>
                      ) : (
                        <Chip
                          label="Sin datos previos"
                          size="small"
                          variant="outlined"
                          color="default"
                          sx={{ fontWeight: 500 }}
                        />
                      )}
                    </Box>
                  </Box>
                  <Avatar 
                    sx={{ 
                      bgcolor: `${stat.color}.main`, 
                      width: 56, 
                      height: 56,
                      boxShadow: (theme) => theme.shadows[3],
                    }}
                  >
                    <IconComponent sx={{ fontSize: '1.5rem' }} />
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