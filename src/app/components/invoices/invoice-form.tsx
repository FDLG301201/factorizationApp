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
    customer_id: "",
    amount: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    due_date: "",
    status: "pending",
  })

  useEffect(() => {
    if (invoice) {
      const foundCustomer = customers.find((c) => c.id === invoice.customer_id);

      const parsedDate = new Date(invoice.date).toISOString().split("T")[0];
      const parsedDueDate = new Date(invoice.due_date).toISOString().split("T")[0];

      setFormData({
        customer_id: invoice.customer_id,
        phone: foundCustomer ? foundCustomer.phone : "",
        amount: invoice.amount.toString(),
        date: parsedDate,
        due_date: parsedDueDate,
        status: invoice.status,
      });
    }
  }, [invoice, customers]);

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  const handleCustomerChange = (event: React.SyntheticEvent, value: Customer | null) => {
    if (value) {
      setFormData({
        ...formData,
        customer_id: value.id,
        // customer: value.name,
        phone: value.phone || "",
      });
    } else {
      setFormData({
        ...formData,
        customer_id: "",
        // customer: "",
        phone: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedDate = new Date(formData.date);
    const parsedDueDate = new Date(formData.due_date);

    onSubmit({
      customer_id: formData.customer_id,
      amount: Number.parseFloat(formData.amount),
      date: parsedDate,
      due_date: parsedDueDate,
      status: formData.status as "pending" | "paid" | "overdue",
      // customers: {
      //   id: formData.customer_id,
      //   name: formData.customer,
      //   phone: formData.phone,
      //   },
      }
    );
  };

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h6" component="span">{invoice ? t("edit-invoice") : t("create-new-invoice")}</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid size={{xs:12}}>
              <Autocomplete
                id="customer-select"
                getOptionLabel={(option) => `${option.name} - ${option.identifier}`}
                options={customers}
                value={customers.find((c) => c.id === formData.customer_id) || null}
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
                name="due_date"
                label={g("due-date")}
                type="date"
                fullWidth
                variant="outlined"
                value={formData.due_date}
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
