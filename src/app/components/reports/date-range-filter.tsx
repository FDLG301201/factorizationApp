"use client"

import { useState, useEffect } from "react"
import { FormControl, InputLabel, Select, MenuItem, Stack, Box, Typography, Paper, Divider, Grid } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { useTranslations } from "next-intl"
import {
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
    format,
    isToday,
    isSameWeek,
    isSameMonth,
    isSameYear,
} from "date-fns"
import { es } from "date-fns/locale"
import type { DateRange, PeriodType } from "@/app/types/reports"

interface DateRangeFilterProps {
    value: DateRange
    onChange: (dateRange: DateRange) => void
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
    const t = useTranslations("Reports.filters")
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [customRange, setCustomRange] = useState<[Date | null, Date | null]>([null, null])

    // Calcular el rango de fechas basado en el período y fecha seleccionada
    const calculateDateRange = (period: PeriodType, referenceDate: Date): { startDate: Date; endDate: Date } => {
        const now = new Date()

        switch (period) {
            case "today":
                return {
                    startDate: new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate()),
                    // endDate: new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 23, 59, 59),
                    endDate: new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate()),
                }

            case "week":
                return {
                    startDate: startOfWeek(referenceDate, { weekStartsOn: 1 }), // Lunes
                    endDate: endOfWeek(referenceDate, { weekStartsOn: 1 }), // Domingo
                }

            case "month":
                return {
                    startDate: startOfMonth(referenceDate),
                    endDate: endOfMonth(referenceDate),
                }

            case "year":
                return {
                    startDate: startOfYear(referenceDate),
                    endDate: endOfYear(referenceDate),
                }

            case "custom":
                return {
                    startDate: customRange[0] || now,
                    endDate: customRange[1] || now,
                }

            default:
                return {
                    startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                    endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59),
                }
        }
    }

    // Manejar cambio de período
    const handlePeriodChange = (period: PeriodType) => {
        if (period === "custom") {
            // Para custom, usar las fechas del rango personalizado
            const startDate = customRange[0] || new Date()
            const endDate = customRange[1] || new Date()
            onChange({ startDate, endDate, period })
        } else {
            // Para otros períodos, usar la fecha de referencia seleccionada
            const { startDate, endDate } = calculateDateRange(period, selectedDate)
            onChange({ startDate, endDate, period })
        }
    }

    // Manejar cambio de fecha de referencia (para día, semana, mes, año)
    const handleReferenceDateChange = (date: Date | null) => {
        if (date && value.period !== "custom") {
            setSelectedDate(date)
            const { startDate, endDate } = calculateDateRange(value.period, date)
            onChange({ startDate, endDate, period: value.period })
        }
    }

    // Manejar cambio de rango personalizado
    const handleCustomRangeChange = (newRange: [Date | null, Date | null]) => {
        setCustomRange(newRange)
        if (newRange[0] && newRange[1] && value.period === "custom") {
            onChange({
                startDate: newRange[0],
                endDate: newRange[1],
                period: "custom",
            })
        }
    }

    // Inicializar con valores por defecto
    useEffect(() => {
        if (value.period !== "custom") {
            // Determinar la fecha de referencia basada en el rango actual
            const referenceDate = value.startDate
            setSelectedDate(referenceDate)
        } else {
            setCustomRange([value.startDate, value.endDate])
        }
    }, [value])

    // Formatear el texto descriptivo del período seleccionado
    const getPeriodDescription = () => {
        const { startDate, endDate } = value

        switch (value.period) {
            case "today":
                if (isToday(startDate)) {
                    return t("descriptions.today")
                }
                return format(startDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })

            case "week":
                if (isSameWeek(startDate, new Date(), { weekStartsOn: 1 })) {
                    return t("descriptions.currentWeek")
                }
                return `${format(startDate, "d MMM", { locale: es })} - ${format(endDate, "d MMM yyyy", { locale: es })}`

            case "month":
                if (isSameMonth(startDate, new Date())) {
                    return t("descriptions.currentMonth")
                }
                return format(startDate, "MMMM 'de' yyyy", { locale: es })

            case "year":
                if (isSameYear(startDate, new Date())) {
                    return t("descriptions.currentYear")
                }
                return format(startDate, "yyyy", { locale: es })

            case "custom":
                return `${format(startDate, "d MMM", { locale: es })} - ${format(endDate, "d MMM yyyy", { locale: es })}`

            default:
                return ""
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <Paper
                elevation={2}
                sx={{
                    p: 0,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        p: 3,
                        position: "relative",
                    }}
                >
                    <Typography variant="h6" fontWeight="600">
                        {t("title")}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                        Configura el período de análisis
                    </Typography>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3 }}>
                    <Stack spacing={3}>
                        {/* Period Selector */}
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>{t("period")}</InputLabel>
                                    <Select
                                        value={value.period}
                                        label={t("period")}
                                        onChange={(e) => handlePeriodChange(e.target.value as PeriodType)}
                                    >
                                        <MenuItem value="today">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: "success.main",
                                                    }}
                                                />
                                                {t("today")}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="week">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: "warning.main",
                                                    }}
                                                />
                                                {t("week")}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="month">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: "info.main",
                                                    }}
                                                />
                                                {t("month")}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="year">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: "error.main",
                                                    }}
                                                />
                                                {t("year")}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="custom">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: "primary.main",
                                                    }}
                                                />
                                                {t("custom")}
                                            </Box>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Period Description */}
                            <Grid size={{ xs: 12, md: 8 }}>
                                <Box
                                    sx={{
                                        p: 2.5,
                                        borderRadius: 2,
                                        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                                        border: "1px solid",
                                        borderColor: "grey.200",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        📅 {t("selectedPeriod")}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight="600"
                                        sx={{
                                            background: "linear-gradient(45deg, #667eea, #764ba2)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {getPeriodDescription()}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Divider />

                        {/* Date Picker Section */}
                        {value.period !== "custom" ? (
                            <Box>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {value.period === "today" && t("selectDate")}
                                    {value.period === "week" && t("selectWeek")}
                                    {value.period === "month" && t("selectMonth")}
                                    {value.period === "year" && t("selectYear")}
                                </Typography>

                                <DatePicker
                                    label={
                                        value.period === "today"
                                            ? t("date")
                                            : value.period === "week"
                                            ? t("weekReference")
                                            : value.period === "month"
                                            ? t("monthReference")
                                            : t("yearReference")
                                    }
                                    value={selectedDate}
                                    onChange={handleReferenceDateChange}
                                    views={
                                        value.period === "year"
                                            ? ["year"]
                                            : value.period === "month"
                                            ? ["year", "month"]
                                            : ["year", "month", "day"]
                                    }
                                    slotProps={{
                                        textField: {
                                            size: "small",
                                            fullWidth: true,
                                        },
                                    }}
                                />
                            </Box>
                        ) : (
                            <Box>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {t("selectCustomRange")}
                                </Typography>

                                <Stack direction="row" spacing={2} alignItems="center">
                                    <DatePicker
                                        label={t("startDate")}
                                        value={customRange[0]}
                                        onChange={(date) => handleCustomRangeChange([date, customRange[1]])}
                                        slotProps={{ textField: { size: "small" } }}
                                    />

                                    <Typography variant="body2" color="text.secondary">
                                        {t("to")}
                                    </Typography>

                                    <DatePicker
                                        label={t("endDate")}
                                        value={customRange[1]}
                                        onChange={(date) => handleCustomRangeChange([customRange[0], date])}
                                        minDate={customRange[0] || undefined}
                                        slotProps={{ textField: { size: "small" } }}
                                    />
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </Box>
            </Paper>
        </LocalizationProvider>
    )
}
