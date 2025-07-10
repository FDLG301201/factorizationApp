"use client"

import React, { useState, useEffect } from 'react'
import {
  Autocomplete,
  Box,
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import DiscountIcon from '@mui/icons-material/Discount'
import { useTranslations } from 'next-intl'
import { InvoiceItems } from '../../types/invoice-items'
import { Inventory } from '../../types/inventory'

interface InvoiceItemRowProps {
  item: InvoiceItems
  products: Inventory[]
  onUpdate: (item: InvoiceItems) => void
  onDelete: () => void
  index: number
  existingProductIds?: string[]
}

export default function InvoiceItemRow({ 
  item, 
  products, 
  onUpdate, 
  onDelete, 
  index,
  existingProductIds = []
}: InvoiceItemRowProps) {
  const g = useTranslations("Invoices")
  const g2 = useTranslations("General")

  
  // Estados iniciales
  const [product, setProduct] = useState<Inventory | null>(null)
  const [quantity, setQuantity] = useState(item.quantity || 1)
  const [unitPrice, setUnitPrice] = useState(item.unit_price || 0)
  const [customPrice, setCustomPrice] = useState(item.item_custom_price)
  const [subtotal, setSubtotal] = useState(item.subtotal || 0)
  const [maxQuantity, setMaxQuantity] = useState(0)
  const [discountType, setDiscountType] = useState(item.item_discount_type || 'none')
  const [discountValue, setDiscountValue] = useState(item.item_discount_value || 0)
  const [discountAmount, setDiscountAmount] = useState(item.item_discount_amount || 0)
  const [showDiscount, setShowDiscount] = useState(false)
  
  // No necesitamos contador de actualizaciones ya que usaremos dependencias directas

  // Cargar producto inicial
  useEffect(() => {
    if (item.inventory_id) {
      const selectedProduct = products.find(p => p.id === item.inventory_id)
      if (selectedProduct) {
        setProduct(selectedProduct)
        setMaxQuantity(selectedProduct.quantity)
        
        if (!item.item_custom_price) {
          setUnitPrice(selectedProduct.price)
        }
      }
    }
  }, [item.inventory_id, products])

  // Calcular subtotal
  useEffect(() => {
    const price = customPrice !== undefined ? customPrice : unitPrice
    setSubtotal(quantity * price)
  }, [quantity, unitPrice, customPrice])

  // Calcular descuento
  useEffect(() => {
    if (discountType === 'percentage') {
      setDiscountAmount((subtotal * discountValue) / 100)
    } else if (discountType === 'amount') {
      setDiscountAmount(discountValue)
    } else {
      setDiscountAmount(0)
    }
  }, [discountType, discountValue, subtotal])

  // Enviar actualizaciones al componente padre cuando cambien los valores calculados
  useEffect(() => {
    // Solo actualizar si hay un producto seleccionado
    if (product?.id) {
      const finalSubtotal = subtotal - discountAmount
      onUpdate({
        ...item,
        inventory_id: product.id,
        quantity,
        unit_price: unitPrice,
        item_custom_price: customPrice,
        subtotal,
        item_discount_type: discountType !== 'none' ? discountType : undefined,
        item_discount_value: discountValue,
        item_discount_amount: discountAmount,
        subtotal_after_discount: finalSubtotal
      })
    }
  }, [product?.id, quantity, unitPrice, customPrice, subtotal, discountType, discountValue, discountAmount, item, onUpdate])

  // Manejadores de eventos
  const handleProductChange = (event: React.SyntheticEvent, value: Inventory | null) => {
    if (value) {
      setProduct(value)
      setMaxQuantity(value.quantity)
      setUnitPrice(value.price)
      setCustomPrice(undefined)
      
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
    } else if (newQuantity > maxQuantity) {
      setQuantity(maxQuantity)
    } else {
      setQuantity(newQuantity)
    }
  }

  const handleCustomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    
    if (isNaN(value) || value <= 0) {
      setCustomPrice(undefined)
    } else {
      setCustomPrice(value)
    }
  }

  const handleDiscountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountType(event.target.value as 'none' | 'percentage' | 'amount')
  }

  const handleDiscountValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (isNaN(value) || value < 0) {
      setDiscountValue(0)
    } else {
      setDiscountValue(value)
    }
  }

  return (
    <Box sx={{ mb: 2, p: 1, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Grid container spacing={2} sx={{ alignItems: "center", p: 1 }}>
        <Grid size={{xs:12, sm:4}}>
          <Autocomplete
            id={`product-select-${index}`}
            options={products.filter(p => !existingProductIds.includes(p.id) || (item.inventory_id && p.id === item.inventory_id))}
            getOptionLabel={(option) => `${option.name} (Stock: ${option.quantity})`}
            value={product}
            onChange={handleProductChange}
            renderInput={(params) => (
              <TextField {...params} label={g2("product")} fullWidth required />
            )}
            noOptionsText="No hay productos disponibles o ya están seleccionados"
          />
        </Grid>
        <Grid size={{xs:6, sm:1}}>
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
        <Grid size={{xs:5, sm:2}}>
          <TextField
            label={g("subtotal")}
            value={`$${subtotal.toFixed(2)}`}
            disabled
            fullWidth
          />
          {/* {discountAmount > 0 && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
              Después de descuento: ${(subtotal - discountAmount).toFixed(2)}
            </Typography>
          )} */}
        </Grid>
        <Grid size={{xs:1, sm:1}}>
          <IconButton color="error" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        
        <Grid size={{xs:12, sm:12}}>
          <Button 
            onClick={() => setShowDiscount(!showDiscount)} 
            startIcon={showDiscount ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            endIcon={<DiscountIcon />}
            size="small"
            sx={{ mt: 1, color: discountAmount > 0 ? 'primary.main' : 'text.secondary' }}
          >
            {g("discount")} {discountAmount > 0 ? `(-$${discountAmount.toFixed(2)})` : ''}
          </Button>
          <Collapse in={showDiscount}>
            <Box sx={{ mt: 1, mb: 1, p: 1.5, border: '1px dashed #e0e0e0', borderRadius: 1, bgcolor: 'background.paper' }}>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:4}}>
                  <FormControl component="fieldset" fullWidth>
                    <RadioGroup
                      aria-label="discount-type"
                      name="discount-type"
                      value={discountType}
                      onChange={handleDiscountTypeChange}
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <FormControlLabel value="none" control={<Radio size="small" />} label={g("no_discount")} />
                      <FormControlLabel value="percentage" control={<Radio size="small" />} label={g("percentage_discount")} />
                      <FormControlLabel value="amount" control={<Radio size="small" />} label={g("amount_discount")} />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {discountType !== 'none' && (
                  <Grid size={{xs:12, sm:4}}>
                    <TextField
                      label={discountType === 'percentage' ? g("discount_percentage") : g("amount_discount")}
                      type="number"
                      value={discountValue}
                      onChange={handleDiscountValueChange}
                      fullWidth
                      size="small"
                      sx={{ mt: 5 }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">{discountType === 'percentage' ? '%' : '$'}</InputAdornment>,
                      }}
                    />
                  </Grid>
                )}
                {discountAmount > 0 && (
                  <Grid size={{xs:12, sm:4}}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                      <Typography variant="subtitle2" color="primary">
                        {g("discount_amount")}: <strong>${discountAmount.toFixed(2)}</strong>
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </Box>
  )
}
