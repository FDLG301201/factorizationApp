"use client"

import { useState, useEffect } from "react"
import { 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Stack, 
    Box, 
    Typography, 
    Paper, 
    Divider, 
    Grid,
    useTheme,
    alpha
} from "@mui/material"
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
    const theme = useTheme()
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [customRange, setCustomRange] = useState<[Date | null, Date | null]>([null, null])

    // Calcular el rango de fechas basado en el período y fecha seleccionada
    const calculateDateRange = (period: PeriodType, referenceDate: Date): { startDate: Date; endDate: Date } => {
        const now = new Date()

        switch (period) {
            case "today":
                // Para "today", ambas fechas son el mismo día
                const todayStart = new Date(referenceDate);
                const todayEnd = new Date(referenceDate);
                return {
                    startDate: todayStart,
                    endDate: todayEnd,
                }

            case "week":
                return {
                    startDate: startOfWeek(referenceDate, { weekStartsOn: 1 }),
                    endDate: endOfWeek(referenceDate, { weekStartsOn: 1 }),
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
                    endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                }
        }
    }

    // Manejar cambio de período
    const handlePeriodChange = (period: PeriodType) => {
        
        if (period === "custom") {
            const startDate = customRange[0] || new Date()
            const endDate = customRange[1] || new Date()
            onChange({ startDate, endDate, period })
        } else {
            const { startDate, endDate } = calculateDateRange(period, selectedDate)
            onChange({ startDate, endDate, period })
        }
    }

    // Manejar cambio de fecha de referencia
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
                    return t("descriptions.today") || "Hoy"
                }
                return format(startDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })

            case "week":
                if (isSameWeek(startDate, new Date(), { weekStartsOn: 1 })) {
                    return t("descriptions.currentWeek") || "Semana actual"
                }
                return `${format(startDate, "d MMM", { locale: es })} - ${format(endDate, "d MMM yyyy", { locale: es })}`

            case "month":
                if (isSameMonth(startDate, new Date())) {
                    return t("descriptions.currentMonth") || "Mes actual"
                }
                return format(startDate, "MMMM 'de' yyyy", { locale: es })

            case "year":
                if (isSameYear(startDate, new Date())) {
                    return t("descriptions.currentYear") || "Año actual"
                }
                return format(startDate, "yyyy", { locale: es })

            case "custom":
                return `${format(startDate, "d MMM", { locale: es })} - ${format(endDate, "d MMM yyyy", { locale: es })}`

            default:
                return ""
        }
    }

    // Colores de los indicadores adaptados al tema
    const getIndicatorColor = (type: string) => {
        const colors = {
            today: theme.palette.success.main,
            week: theme.palette.warning.main,
            month: theme.palette.info.main,
            year: theme.palette.error.main,
            custom: theme.palette.primary.main,
        }
        return colors[type as keyof typeof colors] || theme.palette.primary.main
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <Paper
                elevation={theme.palette.mode === 'dark' ? 8 : 2}
                sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    border: 1,
                    borderColor: theme.palette.mode === 'dark' 
                        ? alpha(theme.palette.primary.main, 0.3)
                        : 'divider',
                    backgroundColor: theme.palette.mode === 'dark' 
                        ? theme.palette.grey[900]
                        : theme.palette.background.paper,
                }}
            >
                {/* Header con gradiente adaptado al tema */}
                <Box
                    sx={{
                        background: theme.palette.mode === 'dark'
                            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`
                            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: theme.palette.primary.contrastText,
                        p: 3,
                        position: "relative",
                        '&::before': theme.palette.mode === 'dark' ? {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                            opacity: 0.1,
                        } : {}
                    }}
                >
                    <Typography variant="h6" fontWeight="600" sx={{ color: 'inherit' }}>
                        {t("title") || "Filtros de Período"}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            opacity: 0.9, 
                            mt: 0.5,
                            color: 'inherit'
                        }}
                    >
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
                                    <InputLabel>{t("period") || "Período"}</InputLabel>
                                    <Select
                                        value={value.period}
                                        label={t("period") || "Período"}
                                        onChange={(e) => handlePeriodChange(e.target.value as PeriodType)}
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.mode === 'dark' 
                                                    ? alpha(theme.palette.primary.main, 0.3)
                                                    : undefined
                                            }
                                        }}
                                    >
                                        <MenuItem value="today">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: getIndicatorColor("today"),
                                                    }}
                                                />
                                                {t("today") || "Hoy"}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="week">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: getIndicatorColor("week"),
                                                    }}
                                                />
                                                {t("week") || "Semana"}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="month">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: getIndicatorColor("month"),
                                                    }}
                                                />
                                                {t("month") || "Mes"}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="year">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: getIndicatorColor("year"),
                                                    }}
                                                />
                                                {t("year") || "Año"}
                                            </Box>
                                        </MenuItem>
                                        <MenuItem value="custom">
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box
                                                    sx={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: "50%",
                                                        bgcolor: getIndicatorColor("custom"),
                                                    }}
                                                />
                                                {t("custom") || "Personalizado"}
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
                                        background: theme.palette.mode === 'dark'
                                            ? `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)} 0%, ${alpha(theme.palette.grey[800], 0.8)} 100%)`
                                            : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                                        border: 1,
                                        borderColor: theme.palette.mode === 'dark' 
                                            ? alpha(theme.palette.primary.main, 0.2)
                                            : "grey.200",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        backdropFilter: theme.palette.mode === 'dark' ? 'blur(10px)' : 'none',
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        📅 {t("selectedPeriod") || "Período seleccionado"}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight="600"
                                        sx={{
                                            background: theme.palette.mode === 'dark'
                                                ? `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`
                                                : "linear-gradient(45deg, #667eea, #764ba2)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            color: theme.palette.mode === 'dark' 
                                                ? theme.palette.primary.main 
                                                : undefined,
                                        }}
                                    >
                                        {getPeriodDescription()}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Divider sx={{ 
                            borderColor: theme.palette.mode === 'dark' 
                                ? alpha(theme.palette.primary.main, 0.1)
                                : undefined 
                        }} />

                        {/* Date Picker Section */}
                        {value.period !== "custom" ? (
                            <Box>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    gutterBottom
                                >
                                    {value.period === "today" && (t("selectDate") || "Selecciona una fecha específica")}
                                    {value.period === "week" && (t("selectWeek") || "Selecciona una semana")}
                                    {value.period === "month" && (t("selectMonth") || "Selecciona un mes")}
                                    {value.period === "year" && (t("selectYear") || "Selecciona un año")}
                                </Typography>

                                <DatePicker
                                    label={
                                        value.period === "today"
                                            ? (t("date") || "Fecha")
                                            : value.period === "week"
                                            ? (t("weekReference") || "Referencia de semana")
                                            : value.period === "month"
                                            ? (t("monthReference") || "Referencia de mes")
                                            : (t("yearReference") || "Referencia de año")
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
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: theme.palette.mode === 'dark' 
                                                        ? alpha(theme.palette.primary.main, 0.3)
                                                        : undefined
                                                }
                                            }
                                        },
                                    }}
                                />
                            </Box>
                        ) : (
                            <Box>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    gutterBottom
                                >
                                    {t("selectCustomRange") || "Selecciona un rango personalizado"}
                                </Typography>

                                <Stack direction="row" spacing={2} alignItems="center">
                                    <DatePicker
                                        label={t("startDate") || "Fecha de inicio"}
                                        value={customRange[0]}
                                        onChange={(date) => handleCustomRangeChange([date, customRange[1]])}
                                        slotProps={{ 
                                            textField: { 
                                                size: "small",
                                                sx: {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: theme.palette.mode === 'dark' 
                                                            ? alpha(theme.palette.primary.main, 0.3)
                                                            : undefined
                                                    }
                                                }
                                            } 
                                        }}
                                    />

                                    <Typography 
                                        variant="body2" 
                                        sx={{
                                            color: theme.palette.mode === 'dark' 
                                                ? theme.palette.text.secondary
                                                : "text.secondary"
                                        }}
                                    >
                                        {t("to") || "a"}
                                    </Typography>

                                    <DatePicker
                                        label={t("endDate") || "Fecha de fin"}
                                        value={customRange[1]}
                                        onChange={(date) => handleCustomRangeChange([customRange[0], date])}
                                        minDate={customRange[0] || undefined}
                                        slotProps={{ 
                                            textField: { 
                                                size: "small",
                                                sx: {
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: theme.palette.mode === 'dark' 
                                                            ? alpha(theme.palette.primary.main, 0.3)
                                                            : undefined
                                                    }
                                                }
                                            } 
                                        }}
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