"use client"

import React, { useEffect, useState } from 'react'
import { 
  TextField, 
  Autocomplete, 
  IconButton, 
  Grid,
  Typography,
  Box
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { InvoiceItems } from '../../types/invoice-items'
import { Inventory } from '../../types/inventory'
import { useTranslations } from 'next-intl'

interface InvoiceItemRowProps {
  item: InvoiceItems
  products: Inventory[]
  onUpdate: (updatedItem: InvoiceItems) => void
  onDelete: () => void
  index: number
}

export default function InvoiceItemRow({ 
  item, 
  products, 
  onUpdate, 
  onDelete, 
  index 
}: InvoiceItemRowProps) {
  const [product, setProduct] = useState<Inventory | null>(null)
  const [quantity, setQuantity] = useState(item.quantity || 1)
  const [unitPrice, setUnitPrice] = useState(item.unit_price || 0)
  const [customPrice, setCustomPrice] = useState(item.item_custom_price)
  const [subtotal, setSubtotal] = useState(item.subtotal || 0)
  const [maxQuantity, setMaxQuantity] = useState(0)
  const g = useTranslations("Invoices");

  // Buscar el producto seleccionado cuando se carga el componente
  useEffect(() => {
    if (item.inventory_id) {
      const selectedProduct = products.find(p => p.id === item.inventory_id)
      if (selectedProduct) {
        setProduct(selectedProduct)
        setMaxQuantity(selectedProduct.quantity)
        
        // Si no hay precio personalizado, usar el precio del producto
        if (!item.item_custom_price) {
          setUnitPrice(selectedProduct.price)
        }
      }
    }
  }, [item.inventory_id, products])

  // Calcular subtotal cuando cambia la cantidad o el precio
  useEffect(() => {
    const price = customPrice !== undefined ? customPrice : unitPrice
    const newSubtotal = quantity * price
    setSubtotal(newSubtotal)
    
    // Notificar al componente padre sobre los cambios
    onUpdate({
      ...item,
      quantity,
      unit_price: unitPrice,
      item_custom_price: customPrice,
      subtotal: newSubtotal
    })
  }, [quantity, unitPrice, customPrice])

  const handleProductChange = (event: React.SyntheticEvent, value: Inventory | null) => {
    if (value) {
      setProduct(value)
      setMaxQuantity(value.quantity)
      setUnitPrice(value.price)
      setCustomPrice(undefined)
      
      // Actualizar el item con el nuevo producto
      onUpdate({
        ...item,
        inventory_id: value.id,
        unit_price: value.price,
        item_custom_price: undefined,
        quantity: quantity > value.quantity ? value.quantity : quantity
      })
      
      // Si la cantidad actual es mayor que el stock disponible, ajustar
      if (quantity > value.quantity) {
        setQuantity(value.quantity)
      }
    } else {
      setProduct(null)
      setMaxQuantity(0)
      setUnitPrice(0)
      setCustomPrice(undefined)
    }
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value)
    if (isNaN(newQuantity) || newQuantity < 1) {
      setQuantity(1)
    } else if (product && newQuantity > maxQuantity) {
      setQuantity(maxQuantity)
    } else {
      setQuantity(newQuantity)
    }
    
    // Actualizar el item con la nueva cantidad
    if (product) {
      onUpdate({
        ...item,
        quantity: newQuantity > maxQuantity ? maxQuantity : (newQuantity < 1 ? 1 : newQuantity),
        subtotal: (newQuantity > maxQuantity ? maxQuantity : (newQuantity < 1 ? 1 : newQuantity)) * (customPrice !== undefined ? customPrice : unitPrice)
      })
    }
  }

  const handleCustomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    let newCustomPrice: number | undefined
    
    if (isNaN(value) || value <= 0) {
      setCustomPrice(undefined)
      newCustomPrice = undefined
    } else {
      setCustomPrice(value)
      newCustomPrice = value
    }
    
    // Actualizar el item con el nuevo precio personalizado
    if (product) {
      const priceToUse = newCustomPrice !== undefined ? newCustomPrice : unitPrice
      onUpdate({
        ...item,
        unit_price: unitPrice,
        item_custom_price: newCustomPrice,
        subtotal: quantity * priceToUse
      })
    }
  }

  return (
    <Box sx={{ mb: 2, p: 1, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid size={{xs:12, sm:4}}>
          <Autocomplete
            id={`product-select-${index}`}
            options={products}
            getOptionLabel={(option) => `${option.name} (Stock: ${option.quantity})`}
            value={product}
            onChange={handleProductChange}
            renderInput={(params) => (
              <TextField {...params} label="Producto" fullWidth required />
            )}
          />
        </Grid>
        <Grid size={{xs:6, sm:2}}>
          <TextField
            label="Cantidad"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            fullWidth
            required
            inputProps={{ min: 1, max: maxQuantity }}
            // helperText={product ? `Máx: ${maxQuantity}` : ''}
          />
        </Grid>
        <Grid size={{xs:6, sm:2}}>
          <TextField
            label="Precio unitario"
            type="number"
            value={unitPrice}
            disabled
            fullWidth
            InputProps={{
              startAdornment: <Typography sx={{ mr: 0.5 }}>$</Typography>,
            }}
          />
        </Grid>
        <Grid size={{xs:6, sm:2}}>
          <TextField
            label="Precio personalizado"
            type="number"
            value={customPrice || ''}
            onChange={handleCustomPriceChange}
            fullWidth
            InputProps={{
              startAdornment: <Typography sx={{ mr: 0.5 }}>$</Typography>,
            }}
          />
        </Grid>
        <Grid size={{xs:5, sm:1}}>
          <Typography variant="body2" fontWeight="bold">
            {g("subtotal")}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            ${subtotal.toFixed(2)}
          </Typography>
        </Grid>
        <Grid size={{xs:1, sm:1}}>
          <IconButton color="error" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}
