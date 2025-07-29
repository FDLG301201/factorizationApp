"use client"

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { Category } from '../../types/category';

interface CategoryFormProps {
  open: boolean;
  category?: Category | null;
  onClose: () => void;
  onSubmit: (category: Omit<Category, 'id'>) => void;
  loading?: boolean;
}

export default function CategoryForm({ 
  open, 
  category, 
  onClose, 
  onSubmit, 
  loading = false 
}: CategoryFormProps) {
  const [formData, setFormData] = useState<Omit<Category, 'id'>>({
    name: '',
  });

  const [errors, setErrors] = useState({
    name: '',
  });

  // Inicializar el formulario con los datos de la categoría si se está editando
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || '',
      });
    } else {
      // Resetear el formulario si es una nueva categoría
      setFormData({
        name: '',
      });
    }
    // Limpiar errores al abrir/cerrar el formulario
    setErrors({ name: '' });
  }, [category, open]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar el error cuando el usuario comienza a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {category ? 'Editar Categoría' : 'Nueva Categoría'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre de la categoría"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              autoFocus
              disabled={loading}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            onClick={onClose} 
            disabled={loading}
            variant="outlined"
          >
            Cancelar
          </Button>
          <Button 
            type="submit" 
            color="primary" 
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
