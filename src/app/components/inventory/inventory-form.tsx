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
  Divider,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import { Inventory } from "@/app/types/inventory"
import { Provider } from "@/app/types/provider"
import { useTranslations } from "next-intl"

interface InventoryFormProps {
  inventory: Inventory | null
  onSubmit: (inventoryData: Omit<Inventory, "id" | "createdAt">) => void
  onCancel: () => void
  providers: Provider[]
}

export default function InventoryForm({ inventory, onSubmit, onCancel, providers }: InventoryFormProps) {

  const t = useTranslations("Inventory");
  const g = useTranslations("General");
  const [formData, setFormData] = useState<Inventory>({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    category: "",
    provider: "",
    customPrice: 0
  })

  useEffect(() => {
    if (inventory) {
      setFormData({
        id: inventory.id,
        name: inventory.name,
        price: inventory.price,
        quantity: inventory.quantity,
        description: inventory.description,
        category: inventory.category,
        provider: inventory.provider,
        customPrice: inventory.customPrice || 0
      })
    }
  }, [inventory])

const handleProviderChange = (event: React.SyntheticEvent, value: string | null) => {
  setFormData({
    ...formData,
    provider: value || "",
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

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Typography variant="h6">{inventory ? t("edit-product") : t("add-new-product")}</Typography>
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

            <Grid size={{xs: 12, sm: 6 }}>
              <Autocomplete
                id="provider-select"
                options={providers.map((provider) => provider.name)}
                value={formData.provider}
                onChange={handleProviderChange}
                renderInput={(params) => (
                  <TextField {...params} required name="provider" label={g("provider")} fullWidth variant="outlined" />
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
