"use client"

import { useState } from "react"
import { Paper, Box, Typography, Tabs, Tab, useTheme } from "@mui/material"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { useTranslations } from "next-intl"
import type { SalesData, DateRange } from "@/app/types/reports"

interface SalesChartsProps {
  data: SalesData | null
  dateRange: DateRange
}

export function SalesCharts({ data, dateRange }: SalesChartsProps) {
  const t = useTranslations("Reports.charts")
  const theme = useTheme()
  const [activeTab, setActiveTab] = useState(0)

  if (!data) return null

  const COLORS = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.error.main,
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" gutterBottom>
            {label}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Typography key={index} variant="body2" sx={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </Typography>
          ))}
        </Paper>
      )
    }
    return null
  }

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data.dailySales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatCurrency} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke={theme.palette.primary.main}
          strokeWidth={2}
          name={t("dailySales")}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data.dailySales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatCurrency} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="sales" fill={theme.palette.primary.main} name={t("dailySales")} />
      </BarChart>
    </ResponsiveContainer>
  )

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data.salesByCategory}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent ? percent * 100 : 0).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.salesByCategory.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => formatCurrency(value as number)} />
      </PieChart>
    </ResponsiveContainer>
  )

  const charts = [
    { label: t("linechart"), component: renderLineChart },
    { label: t("barchart"), component: renderBarChart },
    { label: t("piechart"), component: renderPieChart },
  ]

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {t("title")}
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
          {charts.map((chart, index) => (
            <Tab key={index} label={chart.label} />
          ))}
        </Tabs>
      </Box>

      {charts[activeTab].component()}
    </Paper>
  )
}
