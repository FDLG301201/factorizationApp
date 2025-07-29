"use client"

import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
  Chip,
  Card,
  CardContent
} from '@mui/material';
import { Category } from '../../types/category';
import { Add as AddIcon, Search as SearchIcon, Edit as EditIcon, Delete as DeleteIcon, FilterList as FilterIcon } from '@mui/icons-material';
import { useTranslations } from 'next-intl';

interface CategoryListProps {
  categories: Category[];
  loading: boolean;
  error: string | null;
  onEdit: (category: Category) => void;
  onDelete?: (id: string) => void;
  onCreate: () => void;
  showActions?: boolean
}

export default function CategoryList({
  categories,
  loading,
  error,
  onEdit,
  onDelete,
  onCreate,
  showActions = true,
}: CategoryListProps) {

  const t = useTranslations("Categories");
  const g = useTranslations("General");

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

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
    onCreate();
  }

  const handleDeleteClick = (id: string) => {
    onDelete?.(id);
  }

  const handleEditClick = (category: Category) => {
    onEdit(category);
  }

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading && (!categories || categories.length === 0)) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3} textAlign="center">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Card>
      <CardContent>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h5" component="h2">
            {g("categories")}
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
            {t("add-category")}
          </Button>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            placeholder={t('search-categories')}
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <FilterIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{g('name')}</TableCell>
                <TableCell align="right">{g('actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCategories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.name}</TableCell>
                  {showActions && (
                    <TableCell align="right">
                      <IconButton size="small" onClick={() => handleEditClick(category)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDeleteClick(category.id.toString())}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
              {filteredCategories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    {t('no-categories-found')}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredCategories.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={g("rows-per-page")}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${g("of")} ${count}`}
          />
        </TableContainer>

      </CardContent>
    </Card>
  );
}
