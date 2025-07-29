"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Snackbar, Alert, CircularProgress, Backdrop, Button, DialogActions, Dialog, DialogContentText, DialogTitle, DialogContent } from '@mui/material';
import CategoryList from '@/app/components/categories/category-list';
import CategoryForm from '@/app/components/categories/category-form';
import { Category } from '@/app/types/category';
import { useTranslations } from 'next-intl';

export default function CategoriesPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const t = useTranslations("Categories");
  const g = useTranslations("General");

  // Obtener categorías
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchCategories();
  }, []);

  // Manejar creación de categoría
  const handleCreate = () => {
    setCurrentCategory(null);
    setOpenForm(true);
  };

  // Manejar edición de categoría
  const handleEdit = (category: Category) => {
    setCurrentCategory(category);
    setOpenForm(true);
  };

  // Handle category deletion confirmation
  const handleConfirmDelete = (id: string) => {
    setSelectedCategoryId(id)
    setShowDeleteModal(true);
  };

  const handleAddCategory = async (categoryData: Omit<Category, "id" | "createdAt">) => {
    try {
      setLoading(true);
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      })
      const data = await response.json()
      fetchCategories();
      setSuccessMessage(t("category-created"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  const handleEditCategory = async (id: string, categoryData: Omit<Category, "id" | "createdAt">) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });

      const updated = await response.json();

      if (selectedCategory) {
        setSelectedCategory(updated);
      }

      fetchCategories();

      setSuccessMessage(t("category-updated"));
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false);
    }

  }

  const handleDeleteCategory = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/categories/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error("Error deleting category");
      fetchCategories();
      setShowDeleteModal(false);
      setSuccessMessage(t("category-deleted"));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t("manage-categories")}
      </Typography>

      <CategoryList
        categories={categories}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleConfirmDelete}
        onCreate={handleCreate}
      />

      <CategoryForm
        open={openForm}
        category={currentCategory}
        onClose={() => setOpenForm(false)}
        loading={false}
        onSubmit={(categoryData) => {
          if (selectedCategory) {
            return handleEditCategory(selectedCategory.id, categoryData);
          } else {
            return handleAddCategory(categoryData);
          }
        }}
      />

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
            {t("sure-delete-category")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)} color="primary">
            {g("cancel")}
          </Button>
          <Button 
            onClick={() => selectedCategoryId && handleDeleteCategory(selectedCategoryId)}
            color="error"
            variant="contained"
          >
            {t("delete-category")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
