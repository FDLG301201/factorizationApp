"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Snackbar, Alert, CircularProgress, Backdrop, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CompanyList from '@/app/components/companies/company-list';
import CompanyForm from '@/app/components/companies/company-form';
import { Company } from '@/app/types/company';
import { useTranslations } from 'next-intl';

const API_URL = '/api/companies';

export default function CompaniesPage() {

  const t = useTranslations("Companies");
  const g = useTranslations("General");
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  // const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ 
  //   open: false, 
  //   message: '', 
  //   severity: 'success' 
  // });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar compañías
  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/companies");
      const data = await response.json();
      setCompanies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  // Manejar búsqueda
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }

  // Manejar cambio de página
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Manejar cambio de filas por página
  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
  };

  // Abrir formulario para crear nueva compañía
  const handleCreate = () => {
    setCurrentCompany(null);
    setOpenForm(true);
  };

  // Abrir formulario para editar compañía
  const handleEdit = (company: Company) => {
    setCurrentCompany(company);
    setOpenForm(true);
  };

  const handleConfirmDelete = (id: string) => {
    setSelectedCompanyId(id)
    setShowDeleteModal(true);
  }

  // Eliminar compañía
  // const handleDelete = async (id: string) => {
  //   if (window.confirm('¿Estás seguro de que deseas eliminar esta compañía?')) {
  //     try {
  //       const response = await fetch(`${API_URL}/${id}`, {
  //         method: 'DELETE',
  //       });

  //       if (!response.ok) {
  //         throw new Error('Error al eliminar la compañía');
  //       }

  //       // Actualizar la lista de compañías
  //       fetchCompanies();

  //       setSuccessMessage('Compañía eliminada correctamente');
  //     } catch (err) {
  //       setSuccessMessage('Error al eliminar la compañía');
  //     }
  //   }
  // };

  const handleDeleteCompany: (id: string) => void = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/companies/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error("Error deleting company");
      fetchCompanies();
      setShowDeleteModal(false);
      setSuccessMessage(t("company-deleted"));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Enviar formulario (crear o actualizar)
  const handleSubmit = async (companyData: Omit<Company, 'id' | 'users'>) => {
    try {
      const url = currentCompany ? `${API_URL}/${currentCompany.id}` : API_URL;
      const method = currentCompany ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la compañía');
      }

      // Cerrar el formulario y actualizar la lista
      setOpenForm(false);
      fetchCompanies();

      setSuccessMessage(currentCompany
        ? 'Compañía actualizada correctamente'
        : 'Compañía creada correctamente');
    } catch (err) {
      setSuccessMessage('Error al guardar la compañía');
    }
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.phone.includes(searchTerm),
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gestión de Compañías
      </Typography>

      <CompanyList
        companies={companies}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleConfirmDelete}
        onCreate={handleCreate}
      />

      <CompanyForm
        open={openForm}
        company={currentCompany}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        loading={false}
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
            {t("sure-delete-company")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)}>{g("cancel")}</Button>
          <Button onClick={() => selectedCompanyId && handleDeleteCompany(selectedCompanyId)}>
            {t("delete-company")}
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}
