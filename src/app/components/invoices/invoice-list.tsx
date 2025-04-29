"use client"

import {
  Box,
  Button,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { Invoice } from "@/app/types/invoice"
import { useTranslations } from "next-intl"

interface InvoiceListProps {
  invoices: Invoice[]
  onCreateClick: () => void
  onEditClick: (invoice: Invoice) => void
  onDeleteClick: (id: string) => void
}

export default function InvoiceList({ invoices, onCreateClick, onEditClick, onDeleteClick }: InvoiceListProps) {
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

  const t = useTranslations("Invoices");
  const g = useTranslations("General");
  const s = useTranslations("Status");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography component="h2" variant="h6" color="primary">
          {t("recent-invoices")}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={onCreateClick}>
          {t("create-invoice")}
        </Button>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{t("invoice-number")}</TableCell>
            <TableCell>{g("custumer")}</TableCell>
            <TableCell>{g("date")}</TableCell>
            <TableCell>{g("due-date")}</TableCell>
            <TableCell align="right">{g("amount")}</TableCell>
            <TableCell align="center">{g("status")}</TableCell>
            <TableCell align="right">{g("actions")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>INV-{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
              <TableCell align="right">{formatCurrency(invoice.amount)}</TableCell>
              <TableCell align="center">
                <Chip
                  // label={invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  label={s(invoice.status)}
                  color={getStatusColor(invoice.status) as any}
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onEditClick(invoice)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => onDeleteClick(invoice.id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
