"use client"

import type React from "react"

import { useState } from "react"
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  IconButton,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material"
import { Search, Visibility } from "@mui/icons-material"
import { useTranslations } from "next-intl"
import type { Invoice, DateRange } from "@/app/types/reports"

interface InvoicesListProps {
  invoices: Invoice[]
  dateRange: DateRange
}

export function InvoicesList({ invoices, dateRange }: InvoicesListProps) {
  const t = useTranslations("Reports.invoices")
  const g = useTranslations("General")

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInvoices = invoices.filter((invoice) => {
    const searchTermLower = searchTerm.toLowerCase()
    const invoiceNumber = invoice.number?.toString().toLowerCase() || ''
    const customerName = invoice.customerName?.toLowerCase() || ''
    
    return (
      invoiceNumber.includes(searchTermLower) ||
      customerName.includes(searchTermLower)
    )
  })

  const paginatedInvoices = filteredInvoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

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

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("es-ES").format(new Date(date))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "success"
      case "pending":
        return "warning"
      case "overdue":
        return "error"
      default:
        return "default"
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">
          {t("title")} ({filteredInvoices.length})
        </Typography>
        <TextField
          size="small"
          placeholder={t("search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("number")}</TableCell>
              <TableCell>{t("date")}</TableCell>
              <TableCell>{t("customer")}</TableCell>
              <TableCell align="right">{t("amount")}</TableCell>
              <TableCell>{t("status")}</TableCell>
              <TableCell align="center">{t("actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedInvoices.map((invoice) => (
              <TableRow key={invoice.id} hover>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {invoice.number}
                  </Typography>
                </TableCell>
                <TableCell>{formatDate(invoice.date)}</TableCell>
                <TableCell>{invoice.customerName}</TableCell>
                <TableCell align="right">
                  <Typography variant="body2" fontWeight="medium">
                    {formatCurrency(invoice.amount)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={t(`status.${invoice.status}`)}
                    color={getStatusColor(invoice.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton size="small" color="primary">
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredInvoices.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={g("rows-per-page")}
      />
    </Paper>
  )
}
