"use client"

import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon, FilterList as FilterIcon, } from "@mui/icons-material"
import { Invoice } from "@/app/types/invoice"
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"

interface InvoiceListProps {
  invoices: Invoice[]
  onCreateClick: () => void
  onEditClick: (invoice: Invoice) => void
  onDeleteClick: (id: string) => void
  showActions?: boolean
  showCreateButton?: boolean
}

export default function InvoiceList({ invoices, onCreateClick, onEditClick, onDeleteClick, showActions = true, showCreateButton = true }: InvoiceListProps) {
  const locale = useLocale();
  const t = useTranslations("Invoices");
  const g = useTranslations("General");
  const s = useTranslations("Status");
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)


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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }


  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.customers?.identifier?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customers?.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography component="h2" variant="h6" color="primary">
          {t("recent-invoices")}
        </Typography>
        {showCreateButton && (
          <Button variant="contained" startIcon={<AddIcon />} onClick={onCreateClick}>
            {t("create-invoice")}
          </Button>
        )}
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t("search-invoice")}
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small">
                  <FilterIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{t("invoice-number")}</TableCell>
              <TableCell>{g("customer")}</TableCell>
              <TableCell>{g("date")}</TableCell>
              <TableCell>{g("due-date")}</TableCell>
              <TableCell align="right">{g("amount")}</TableCell>
              <TableCell align="center">{g("status")}</TableCell>
              {showActions && (
                <TableCell align="right">{g("actions")}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>INV-{invoice.id}</TableCell>
                <TableCell>{invoice.customers?.identifier}</TableCell>
                <TableCell>{formatDate(invoice.date.toString())}</TableCell>
                <TableCell>{formatDate(invoice.due_date.toString())}</TableCell>
                <TableCell align="right">{formatCurrency(invoice.amount)}</TableCell>
                <TableCell align="center">
                  <Chip
                    // label={invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    label={s(invoice.status)}
                    color={getStatusColor(invoice.status) as any}
                    size="small"
                  />
                </TableCell>
                {showActions && (
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => onEditClick(invoice)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => onDeleteClick(invoice.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredInvoices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={g("rows-per-page")}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${g("of")} ${count}`}
        />
      </TableContainer>
    </>
  )
}
