"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Paper, Grid, CircularProgress, Alert } from "@mui/material"
import { useTranslations } from "next-intl"
import { DateRangeFilter } from "@/app/components/reports/date-range-filter"
import { SalesCharts } from "@/app/components/reports/sales-charts"
import { SalesStats } from "@/app/components/reports/sales-stats"
import { InvoicesList } from "@/app/components/reports/invoices-list"
import { ExportActions } from "@/app/components/reports/export-actions"
import { useSalesData } from "@/app/hooks/use-sales-data"
import type { DateRange } from "@/app/types/reports"

export default function ReportsPage() {
    const t = useTranslations("Reports")
    const [dateRange, setDateRange] = useState<DateRange>({
        startDate: new Date(new Date().setHours(0, 0, 0, 0)), // ← Día actual desde las 00:00
        endDate: new Date(new Date().setHours(23, 59, 59, 999)), // ← Día actual hasta las 23:59
        period: "today", // ← Cambiar de "month" a "today"
    })

    const { data, loading, error, refetch } = useSalesData(dateRange)

    useEffect(() => {
        refetch()
    }, [dateRange, refetch])

    if (loading) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
                    <CircularProgress />
                </Box>
            </Container>
        )
    }

    if (error) {
        return (
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Alert severity="error">{t("error.loadingData")}</Alert>
            </Container>
        )
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box mb={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {t("title")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t("subtitle")}
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Filtros y Acciones */}
                <Grid size={{ xs: 12 }}>
                    <Box display="flex" gap={3} flexDirection={{ xs: "column", lg: "row" }}>
                        {/* Filtros de fecha */}
                        <Box flex={1}>
                            <DateRangeFilter value={dateRange} onChange={setDateRange} />
                        </Box>

                        {/* Panel de acciones */}
                        <Box sx={{ minWidth: { lg: 280 } }}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                    color: "white",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6" gutterBottom fontWeight="600">
                                    {t("actions.quickActions")}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
                                    {t("actions.exportDescription")}
                                </Typography>
                                <ExportActions data={data} dateRange={dateRange} />
                            </Paper>
                        </Box>
                    </Box>
                </Grid>

                {/* Estadísticas Principales */}
                <Grid size={{ xs: 12 }}>
                    <SalesStats data={data} dateRange={dateRange} />
                </Grid>

                {/* Gráficos */}
                <Grid size={{ xs: 12 }}>
                    <SalesCharts data={data} dateRange={dateRange} />
                </Grid>

                {/* Lista de Facturas */}
                <Grid size={{ xs: 12 }}>
                    <InvoicesList invoices={data?.invoices || []} dateRange={dateRange} />
                </Grid>
            </Grid>
        </Container>
    )
}
