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
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { Company } from '../../types/company';

interface CompanyFormProps {
  open: boolean;
  company?: Company | null;
  onClose: () => void;
  onSubmit: (company: Omit<Company, 'id' | 'users'>) => void;
  loading?: boolean;
}

export default function CompanyForm({ open, company, onClose, onSubmit, loading = false }: CompanyFormProps) {
  const [formData, setFormData] = useState<Omit<Company, 'id' | 'users'>>({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
  });

  // Inicializar el formulario con los datos de la compañía si se está editando
  useEffect(() => {
    if (company) {
      setFormData({
        name: company.name || '',
        phone: company.phone || '',
        email: company.email || '',
        street: company.street || '',
        city: company.city || '',
        state: company.state || '',
        zip_code: company.zip_code || '',
        country: company.country || '',
      });
    } else {
      // Resetear el formulario si es una nueva compañía
      setFormData({
        name: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip_code: '',
        country: '',
      });
    }
  }, [company, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {company ? 'Editar Compañía' : 'Nueva Compañía'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12 }}>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Nombre de la compañía"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="email"
                label="Correo electrónico"
                type="email"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="phone"
                label="Teléfono"
                type="tel"
                fullWidth
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                margin="dense"
                name="street"
                label="Dirección"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.street}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="city"
                label="Ciudad"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="state"
                label="Estado/Provincia"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="zip_code"
                label="Código postal"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.zip_code}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                margin="dense"
                name="country"
                label="País"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button onClick={onClose} color="inherit">
            Cancelar
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Guardar'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
