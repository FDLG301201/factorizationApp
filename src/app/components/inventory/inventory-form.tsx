"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Autocomplete,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import { Inventory } from "@/app/types/inventory"
import { Provider } from "@/app/types/provider"
import { useTranslations } from "next-intl"
import { Category } from "@/app/types/category"

interface InventoryFormProps {
  inventory: Inventory | null
  onSubmit: (inventoryData: Omit<Inventory, "id" | "createdAt">) => void
  onCancel: () => void
  providers: Provider[]
  categories: Category[]
}

export default function InventoryForm({ inventory, onSubmit, onCancel, providers, categories }: InventoryFormProps) {

  const t = useTranslations("Inventory");
  const g = useTranslations("General");
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    category_id: "",
    provider_id: "",
    customPrice: 0
  });
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    if (inventory) {
      setFormData({
        name: inventory.name,
        price: inventory.price,
        quantity: inventory.quantity,
        description: inventory.description || "",
        category_id: inventory.category_id || "",
        provider_id: inventory.provider_id || "",
        customPrice: inventory.customPrice || 0
      })
    }
  }, [inventory]);

  // useEffect(() => {
  //   if (inventory?.customPrice !== 0) {
  //     setChecked(true);
  //   }
  // }, [inventory?.customPrice])

  const handleProviderChange = (event: React.SyntheticEvent, value: Provider | null) => {
    setFormData({
      ...formData,
      provider_id: value?.id || "",
    })
  }

  const handleCategoryChange = (event: React.SyntheticEvent, value: Category | null) => {
    setFormData({
      ...formData,
      category_id: value?.id || "",
    })
  }

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

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Typography variant="h6" component="span">{inventory ? t("edit-product") : t("add-new-product")}</Typography>
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
                id="name"
                name="name"
                label={t("product-name")}
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                id="price"
                name="price"
                label={g("price")}
                fullWidth
                variant="outlined"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                id="quantity"
                name="quantity"
                label={g("quantity")}
                fullWidth
                variant="outlined"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Checkbox
                checked={checked}
                onChange={handleCheckChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              {t("custom-price")}
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Autocomplete
                id="category-select"
                options={categories}
                getOptionLabel={(option) => option.name}
                value={categories.find((p) => p.id === formData.category_id) || null}
                onChange={handleCategoryChange}
                renderInput={(params) => (
                  <TextField {...params} required name="category_id" label={g("category")} fullWidth variant="outlined" />
                )}
              />
            </Grid>

            {checked && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="customPrice"
                  name="customPrice"
                  label={t("custom-price")}
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={formData.customPrice}
                  onChange={handleChange}
                />
              </Grid>
            )}

            <Grid size={{ xs: 12, sm: 6 }}>
              <Autocomplete
                id="provider-select"
                options={providers}
                getOptionLabel={(option) => option.name}
                value={providers.find((p) => p.id === formData.provider_id) || null}
                onChange={handleProviderChange}
                renderInput={(params) => (
                  <TextField {...params} required name="provider_id" label={g("provider")} fullWidth variant="outlined" />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" gutterBottom>
                {g("optional-information")}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextareaAutosize
                id="description"
                name="description"
                minRows={4}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Product description"
                value={formData.description}
                style={{ width: "100%" }}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>{g("cancel")}</Button>
          <Button type="submit" variant="contained" color="primary">
            {inventory ? t("update-product") : t("add-product")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
