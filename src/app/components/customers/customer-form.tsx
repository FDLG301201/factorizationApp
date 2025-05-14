"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { Customer } from "@/app/types/customer"
import { useTranslations } from "next-intl"


interface CustomerFormProps {
  customer: Customer | null
  onSubmit: (customerData: Omit<Customer, "id" | "createdAt">) => void
  onCancel: () => void
}

export default function CustomerForm({ customer, onSubmit, onCancel }: CustomerFormProps) {

  const t = useTranslations("Customers");
  const g = useTranslations("General");

  const [formData, setFormData] = useState({
    identifier: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  })

  useEffect(() => {
    if (customer) {
      setFormData({
        identifier: customer.identifier ?? "",
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        company: customer.company || "",
        notes: customer.notes || "",
        address: { ...customer.address },
      })
    }
  }, [customer])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target

//     if (name.includes(".")) {
//       const [parent, child] = name.split(".")
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent as keyof typeof formData],
//           [child]: value,
//         },
//       })
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       })
//     }
//   }

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevFormData) => {
        const updatedParent = prevFormData[parent as keyof typeof prevFormData] || {};
        return {
          ...prevFormData,
          [parent]: {
            ...updatedParent,
            [child]: value,
          },
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Typography variant="h6">{customer ? t("edit-customer") : t("add-customer")}</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle1" gutterBottom>
                {g("basic-information")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="identifier"
                name="identifier"
                label={g("identifier")}
                fullWidth
                variant="outlined"
                value={formData.identifier}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="name"
                name="name"
                label={g("full-name")}
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="company"
                name="company"
                label={g("company")}
                fullWidth
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="email"
                name="email"
                label={g("email")}
                type="email"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="phone"
                name="phone"
                label={g("phone")}
                fullWidth
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" gutterBottom>
                {g("address")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                required
                id="street"
                name="address.street"
                label={g("street-address")}
                fullWidth
                variant="outlined"
                value={formData.address.street}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="city"
                name="address.city"
                label={g("city")}
                fullWidth
                variant="outlined"
                value={formData.address.city}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="state"
                name="address.state"
                label={g("state-province")}
                fullWidth
                variant="outlined"
                value={formData.address.state}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="zipCode"
                name="address.zipCode"
                label={g("zip-postal-code")}
                fullWidth
                variant="outlined"
                value={formData.address.zipCode}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="country"
                name="address.country"
                label={g("country")}
                fullWidth
                variant="outlined"
                value={formData.address.country}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" gutterBottom>
                {g("additional-information")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                id="notes"
                name="notes"
                label={g("notes")}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={formData.notes}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>{g("cancel")}</Button>
          <Button type="submit" variant="contained" color="primary">
            {customer ? t("update-customer") : t("add-customer")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
