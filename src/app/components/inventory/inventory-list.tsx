"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Button,
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
} from "@mui/icons-material"

import { Inventory } from "@/app/types/inventory"
import InventoryForm from "./inventory-form"
import { useTranslations } from "next-intl"


interface InventoryListProps {
  inventories: Inventory[]
  onAddInventory: (inventory: Omit<Inventory, "id" | "createdAt">) => void
  onEditInventory: (id: string, inventory: Omit<Inventory, "id" | "createdAt">) => void
  onDeleteInventory: (id: string) => void
}

export default function InventoryList({
  inventories,
  onAddInventory,
  onEditInventory,
  onDeleteInventory,
}: InventoryListProps) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingInventory, setEditingInventory] = useState<Inventory | null>(null)

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
    setEditingInventory(null)
    setShowForm(true)
  }

  const handleEditClick = (inventory: Inventory) => {
    setEditingInventory(inventory)
    setShowForm(true)
  }

  const handleFormSubmit = (inventoryData: Omit<Inventory, "id" | "createdAt">) => {
    if (editingInventory) {
      onEditInventory(editingInventory.id, inventoryData)
    } else {
      onAddInventory(inventoryData)
    }
    setShowForm(false)
    setEditingInventory(null)
  }

  const handleFormCancel = () => {
    setShowForm(false)
    setEditingInventory(null)
  }

  const filteredInventories = inventories.filter(
    (inventory) =>
      inventory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inventory.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inventory.price.toString().includes(searchTerm),
  )
  const t = useTranslations("Inventory");
  const g = useTranslations("General");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography component="h2" variant="h6" color="primary">
          {t("inventory-manager")}
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddClick}>
          {t("create-product")}
        </Button>
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t("search-inventory")}
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
              <TableCell>{g("name")}</TableCell>
              <TableCell>{g("category")}</TableCell>
              <TableCell>{g("price")}</TableCell>
              <TableCell>{g("quantity")}</TableCell>
              <TableCell>{g("provider")}</TableCell>
              <TableCell align="right">{g("actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInventories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((inventory) => (
              <TableRow key={inventory.id}>
                <TableCell>{inventory.name}</TableCell>
                <TableCell>{inventory.category || "—"}</TableCell>
                <TableCell>{inventory.price}</TableCell>
                <TableCell>{inventory.quantity}</TableCell>
                <TableCell>{inventory.provider || "—"}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" onClick={() => handleEditClick(inventory)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => onDeleteInventory(inventory.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {filteredInventories.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  {t("no-product-found")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredInventories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {showForm && (
        <InventoryForm inventory={editingInventory} onSubmit={handleFormSubmit} onCancel={handleFormCancel} providers={[]} />
      )}
    </>
  )
}
