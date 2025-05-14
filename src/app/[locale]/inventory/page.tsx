"use client"

import { useState } from "react"
import { Box, Container, Paper, Typography, Button, Divider } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"
import { Provider } from "@/app/types/provider"
import { Inventory } from "@/app/types/inventory"
import InventoryList from "@/app/components/inventory/inventory-list"
import InventoryForm from "@/app/components/inventory/inventory-form"
import { useTranslations } from "next-intl"


// Sample data
const sampleProviders: Provider[] = [
  {
    id: "1",
    name: "Rica",
    address: "123 Main St",
  },
  {
    id: "2",
    name: "McDonals",
    address: "456 Market St",
  },
  {
    id: "3",
    name: "PriceSmart",
    address: "789 Howard St",
  },
  {
    id: "4",
    name: "Innovacentro",
    address: "123 Main St",
  },
]

const sampleInventory: Inventory[] = [
  {
    id: "1",
    name: "TV Samsung",
    price: 1200,
    quantity: 5,
    description: "TV Samsung 43 pulgadas",
    category: "Electronico",
    provider: "Rica",
  },
  {
    id: "2",
    name: "Laptop HP",
    price: 1500,
    quantity: 10,
    description: "Laptop HP 15 pulgadas",
    category: "Electronico",
    provider: "PriceSmart",
  },
  {
    id: "3",
    name: "Celular Xiaomi",
    price: 500,
    quantity: 5,
    description: "Celular Xiaomi Redmi 9",
    category: "Electronico",
    provider: "Innovacentro",
  },
  {
    id: "4",
    name: "Monitor LG",
    price: 300,
    quantity: 5,
    description: "Monitor LG 24 pulgadas",
    category: "Electronico",
    provider: "McDonals",
  }
]


export default function InventoryPage() {
  
  const t = useTranslations("Inventory");
  const g = useTranslations("General");
  const [inventory, setInventory] = useState<Inventory[]>(sampleInventory)
  const [showInventoryForm, setShowInventoryForm] = useState(false)
  const [editingInventory, setEditingInventory] = useState<Inventory | null>(null)

  const handleCreateProduct = (productData: Omit<Inventory, "id">) => {
    const newInventory = {
      ...productData,
      id: Math.random().toString(36).substr(2, 9),
    }
    setInventory([...inventory, newInventory])
    setShowInventoryForm(false)
  } 

  const handleEditProduct = (id: string, updatedProduct: Omit<Inventory, "id">) => {
    setInventory(
      inventory.map((product) =>
        product.id === id
          ? {
              ...updatedProduct,
              id,
            }
          : product,
      ),
    )
    setShowInventoryForm(false)
    setEditingInventory(null)
  }

  const handleDeleteProduct = (id: string) => {
    setInventory(inventory.filter((product) => product.id !== id))
  }

  const handleAddClick = () => {
    setEditingInventory(null)
    setShowInventoryForm(true)
  }

  const handleEditClick = (product: Inventory) => {
    setEditingInventory(product)
    setShowInventoryForm(true)
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
          onAddInventory={handleAddClick}
          onEditInventory={handleEditProduct}
          onDeleteInventory={handleDeleteProduct}
        />
      </Paper>

      {showInventoryForm && (
        <InventoryForm
          onSubmit={editingInventory ? (inventory) => handleEditProduct(editingInventory.id, inventory) : handleCreateProduct}
          onCancel={() => {
            setShowInventoryForm(false)
            setEditingInventory(null)
          }}
          providers={sampleProviders}
          inventory={editingInventory}
        />
      )}
    </Container>
  )
}
