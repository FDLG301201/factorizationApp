"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Alert,
  Autocomplete,
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Snackbar,
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
  const [companies, setCompanies] = useState<{ id: string; name: string }[]>([]);
  const [loadingCompanies, setLoadingCompanies] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoadingCompanies(true);
      const response = await fetch("/api/companies");
      const data = await response.json();
      setCompanies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoadingCompanies(false);
    }
  };

  const [formData, setFormData] = useState({
    identifier: "",
    name: "",
    email: "",
    phone: "",
    company_id: "",
    notes: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  })

  useEffect(() => {
    if (customer) {
      setFormData({
        identifier: customer.identifier ?? "",
        name: customer.name,
        email: customer.email || "",
        phone: customer.phone,
        company_id: customer.company_id || "",
        notes: customer.notes || "",
        street: customer.street || "",
        city: customer.city || "",
        state: customer.state || "",
        zip_code: customer.zip_code || "",
        country: customer.country || "",
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
        <Typography variant="h5" component="span">{customer ? t("edit-customer") : t("add-customer")}</Typography>
        <Divider sx={{ mt: 2 }} />
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

            {/* <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="company"
                name="company"
                label={g("company")}
                fullWidth
                variant="outlined"
                value={formData.company}
                onChange={handleChange}
              />
            </Grid> */}


            <Grid size={{ xs: 12, sm: 6 }}>
              <Autocomplete
                id="company"
                options={companies}
                loading={loadingCompanies}
                getOptionLabel={(option) => option.name}
                value={companies.find((c) => c.id === formData.company_id) || null}
                onChange={(_, newValue) => {
                  setFormData({
                    ...formData,
                    company_id: newValue ? newValue.id : "",
                  });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={g("company")}
                    variant="outlined"
                    fullWidth
                  />
                )}
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
                name="street"
                label={g("street-address")}
                fullWidth
                variant="outlined"
                value={formData.street}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="city"
                name="city"
                label={g("city")}
                fullWidth
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="state"
                name="state"
                label={g("state-province")}
                fullWidth
                variant="outlined"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="zipCode"
                name="zip_code"
                label={g("zip-postal-code")}
                fullWidth
                variant="outlined"
                value={formData.zip_code}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="country"
                name="country"
                label={g("country")}
                fullWidth
                variant="outlined"
                value={formData.country}
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
