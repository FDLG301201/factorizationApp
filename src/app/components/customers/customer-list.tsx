"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material"
import { Customer } from "@/app/types/customer"
import CustomerForm from "./customer-form"
import { useTranslations } from "next-intl"


interface CustomerListProps {
  customers: Customer[]
  onConsultCustomer: (customer: Customer) => void
  onAddCustomer: (customer: Omit<Customer, "id" | "createdAt">) => void
  onEditCustomer: (id: string, customer: Omit<Customer, "id" | "createdAt">) => void
  onDeleteCustomer: (id: string) => void
  showActions?: boolean
}

export default function CustomerList({
  customers,
  onConsultCustomer,
  onAddCustomer,
  onEditCustomer,
  onDeleteCustomer,
  showActions = true,
}: CustomerListProps) {

  const t = useTranslations("Customers");
  const g = useTranslations("General");
  
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)

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

  const handleConsultClick = (customer: Customer) => {
    onConsultCustomer(customer)
  }

  const handleAddClick = () => {
    setEditingCustomer(null)
    setShowForm(true)
  }

  const handleDeleteClick = (id: string) => {
    onDeleteCustomer(id)
  }

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer(customer)
    setShowForm(true)
  }

  const handleFormSubmit = (customerData: Omit<Customer, "id" | "createdAt">) => {
    if (editingCustomer) {
      onEditCustomer(editingCustomer.id.toString(), customerData)
    } else {
      onAddCustomer(customerData)
    }
    setShowForm(false)
    setEditingCustomer(null)
  }

  const handleFormCancel = () => {
    setShowForm(false)
    setEditingCustomer(null)
  }

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.street?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.identifier?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.companies?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  );

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h5" component="h2">
            {g("customers")}
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
            {t("add-customer")}
          </Button>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={t("search-customers")}
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
                <TableCell>{g("identifier")}</TableCell>
                <TableCell>{g("name")}</TableCell>
                <TableCell>{g("company")}</TableCell>
                <TableCell>{g("email")}</TableCell>
                <TableCell>{g("phone")}</TableCell>
                <TableCell>{g("location")}</TableCell>
                {showActions && (
                <TableCell align="right">{g("actions")}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.identifier || "—"}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.companies?.name || "—"}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                  {customer.street}, {customer.city}, {customer.country}
                  </TableCell>
                  {showActions && (
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => handleConsultClick(customer)}>
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleEditClick(customer)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDeleteClick(customer.id.toString())}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  )}
                </TableRow>
              ))}
              {filteredCustomers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No customers found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredCustomers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={g("rows-per-page")}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${g("of")} ${count}`}
          />
        </TableContainer>

        {showForm && (
          <CustomerForm customer={editingCustomer} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        )}
      </CardContent>
    </Card>
  )
}
