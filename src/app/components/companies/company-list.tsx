"use client"

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Chip,
  Box,
  Typography,
  TablePagination,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Company } from '@/app/types/company';
import { useTranslations } from 'next-intl';

interface CompanyListProps {
  companies: Company[];
  loading?: boolean;
  error?: string | null;
  onEdit: (company: Company) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
  showActions?: boolean;
}

export default function CompanyList({
  companies,
  loading = false,
  error = null,
  onEdit,
  onDelete,
  onCreate,
  showActions = true,
}: CompanyListProps) {

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const t = useTranslations("Companies");
  const g = useTranslations("General");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(0)
  }
  
    const handleAddClick = () => {
      onCreate()
    }
  
    const handleDeleteClick = (id: string) => {
      onDelete(id)
    }
  
    const handleEditClick = (company: Company) => {
      onEdit(company)
      // setShowForm(true)
    }

  const filteredCompanies = companies.filter(
    (company) =>
      company.street?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.phone.includes(searchTerm),
  );

  if (loading && (!companies || companies.length === 0)) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" component="h2">
          {t("companies")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          {t("add-new-company")}
        </Button>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Buscar compañías..."
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{g('name')}</TableCell>
              <TableCell>{g('email')}</TableCell>
              <TableCell>{g('phone')}</TableCell>
              <TableCell>{g('address')}</TableCell>
              <TableCell align="right">{g('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompanies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.phone}</TableCell>
                <TableCell>
                  {company.street}, {company.city}, {company.country}
                </TableCell>
                {showActions && (
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => handleEditClick(company)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDeleteClick(company.id.toString())}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
            {filteredCompanies.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No companies found
                </TableCell>
              </TableRow>
            )}

          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredCompanies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={g("rows-per-page")}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${g("of")} ${count}`}
        />
      </TableContainer>
    </Paper>
  );
}
