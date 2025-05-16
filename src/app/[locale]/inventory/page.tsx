"use client"

import { useEffect, useState } from "react"
import { Box, Container, Paper, Typography, Button, Divider, Backdrop, CircularProgress, Snackbar, Alert, DialogTitle, Dialog, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"
import { Provider } from "@/app/types/provider"
import { Inventory } from "@/app/types/inventory"
import InventoryList from "@/app/components/inventory/inventory-list"
import InventoryForm from "@/app/components/inventory/inventory-form"
import { useTranslations } from "next-intl"
import { Category } from "@/app/types/category"

export default function InventoryPage() {

  const t = useTranslations("Inventory");
  const g = useTranslations("General");
  const [inventory, setInventory] = useState<Inventory[]>([])
  const [providersList, setProvidersList] = useState<Provider[]>([])
  const [showInventoryForm, setShowInventoryForm] = useState(false)
  const [editingInventory, setEditingInventory] = useState<Inventory | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [categoriesList, setCategoriesList] = useState<Category[]>([])

  useEffect(() => {
    fetchInventory()
    fetchProviders()
    fetchCategories()
  }, [])

  const fetchInventory = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products")
      const data = await response.json()
      setInventory(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const fetchProviders = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/providers")
      const data = await response.json()
      setProvidersList(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/categories")
      const data = await response.json()
      setCategoriesList(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const handleAddProduct = async (productData: Omit<Inventory, "id">) => {
    try {
      setLoading(true);
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
      const data = await response.json()
      fetchInventory();
      setShowInventoryForm(false)
      if (response.ok) {
        setSuccessMessage(t("product-created"));
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const handleEditProduct = async (id: string, updatedProduct: Omit<Inventory, "id">) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
      fetchInventory();
      setShowInventoryForm(false)
      setSuccessMessage(t("product-updated"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
   
    setShowInventoryForm(false)
    setEditingInventory(null)
  }

  const handleDeleteProduct = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })
      fetchInventory();
      setShowDeleteModal(false)
      setSuccessMessage(t("product-deleted"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  const handleConfirmDelete = (id: string) => {
    setSelectedProductId(id)
    setShowDeleteModal(true);
  }

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {g("inventory")}
        </Typography>
        {/* <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
          {t("create-product")}
        </Button> */}
      </Box>

      <Divider sx={{ color: "primary.main", width: "100%", mb: 3 }} />

      <Paper sx={{ p: 2 }}>
        <InventoryList
          inventories={inventory}
          onAddInventory={handleAddProduct}
          onEditInventory={handleEditProduct}
          onDeleteInventory={handleConfirmDelete}
          providers={providersList}
          categories={categoriesList}
        />
      </Paper>

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert
          onClose={() => setError(null)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
              open={!!successMessage}
              autoHideDuration={4000}
              onClose={() => setSuccessMessage(null)}
            >
              <Alert
                onClose={() => setSuccessMessage(null)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                {successMessage}
              </Alert>
            </Snackbar>
      
            <Dialog
              open={showDeleteModal}
              onClose={() => setShowDeleteModal(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {g("confirmation")}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {t("sure-delete-product")}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowDeleteModal(false)}>{g("cancel")}</Button>
                <Button onClick={() => selectedProductId && handleDeleteProduct(selectedProductId)}>
                  {t("delete-product")}
                </Button>
              </DialogActions>
            </Dialog>

    </Container>
  )
}
