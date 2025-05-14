"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import { Invoice } from "../../types/invoice"
import { Customer } from "../../types/customer"
import { useTranslations } from "next-intl"

interface InvoiceFormProps {
  onSubmit: (invoice: Omit<Invoice, "id">) => void
  onCancel: () => void
  customers: Customer[]
  invoice?: Invoice
}

export default function InvoiceForm({ onSubmit, onCancel, customers, invoice }: InvoiceFormProps) {

  const t = useTranslations("Invoices");
  const g = useTranslations("General");
  const s = useTranslations("Status");
  
  const [formData, setFormData] = useState({
    customer: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    status: "pending",
  })

  useEffect(() => {
    if (invoice) {
      setFormData({
        customer: invoice.customer,
        amount: invoice.amount.toString(),
        date: invoice.date,
        dueDate: invoice.dueDate,
        status: invoice.status,
      })
    }
  }, [invoice])

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  const handleCustomerChange = (event: React.SyntheticEvent, value: string | null) => {
    setFormData({
      ...formData,
      customer: value || "",
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      customer: formData.customer,
      amount: Number.parseFloat(formData.amount),
      date: formData.date,
      dueDate: formData.dueDate,
      status: formData.status as "pending" | "paid" | "overdue",
    })
  }

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h6">{invoice ? t("edit-invoice") : t("create-new-invoice")}</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid size={{xs:12}}>
              <Autocomplete
                id="customer-select"
                options={customers.map((customer) => customer.name)}
                value={formData.customer}
                onChange={handleCustomerChange}
                renderInput={(params) => (
                  <TextField {...params} required name="customer" label={g("customer")} fullWidth variant="outlined" />
                )}
              />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField
                required
                id="amount"
                name="amount"
                label={g("amount")}
                type="number"
                fullWidth
                variant="outlined"
                value={formData.amount}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                }}
              />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <FormControl fullWidth>
                <InputLabel id="status-label">{g("status")}</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  value={formData.status}
                  label={g("status")}
                  onChange={handleChange}
                >
                  <MenuItem value="pending">{s("pending")}</MenuItem>
                  <MenuItem value="paid">{s("paid")}</MenuItem>
                  <MenuItem value="overdue">{s("overdue")}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField
                required
                id="date"
                name="date"
                label={t("invoice-date")}
                type="date"
                fullWidth
                variant="outlined"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField
                required
                id="dueDate"
                name="dueDate"
                label={g("due-date")}
                type="date"
                fullWidth
                variant="outlined"
                value={formData.dueDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>{g("cancel")}</Button>
          <Button type="submit" variant="contained" color="primary">
            {invoice ? t("update-invoice") : t("create-invoice")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
