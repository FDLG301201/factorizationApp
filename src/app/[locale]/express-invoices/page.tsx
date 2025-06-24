"use client"

import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material"
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  Print as PrintIcon,
  Save as SaveIcon,
} from "@mui/icons-material"
import { useTranslations } from "next-intl"
import { Inventory } from "../../types/inventory"

interface ExpressInvoiceItem {
  id: string
  product_id: string
  product_name: string
  price: number
  quantity: number
  total: number
}

export default function ExpressInvoicesPage() {
  const t = useTranslations("Invoices")
  const i = useTranslations("Inventory")
  const g = useTranslations("General")

  // Estados
  const [products, setProducts] = useState<Inventory[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Inventory[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [invoiceItems, setInvoiceItems] = useState<ExpressInvoiceItem[]>([])
  const [customerName, setCustomerName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Estados para cálculos
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('percentage')
  const [discountValue, setDiscountValue] = useState<string>('')
  const [taxPercent, setTaxPercent] = useState<string>('16') // IVA por defecto

  // Cálculos
  const subtotal = invoiceItems.reduce((sum, item) => sum + item.total, 0)
  const discountAmount = discountValue ? 
    (discountType === 'percentage' ? 
      (subtotal * parseFloat(discountValue)) / 100 : 
      parseFloat(discountValue)
    ) : 0
  const taxAmount = taxPercent ? ((subtotal - discountAmount) * parseFloat(taxPercent)) / 100 : 0
  const total = subtotal - discountAmount + taxAmount

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts()
  }, [])

  // Filtrar productos cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products)
    } else {
      const lowercaseSearch = searchTerm.toLowerCase()
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(lowercaseSearch)
      )
      setFilteredProducts(filtered)
    }
  }, [searchTerm, products])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)
    } catch (err: any) {
      setError('Error al cargar productos: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const addProduct = (product: Inventory) => {
    const existingItem = invoiceItems.find(item => item.product_id === product.id)
    
    if (existingItem) {
      // Si ya existe, incrementar cantidad
      updateQuantity(existingItem.id, existingItem.quantity + 1)
    } else {
      // Agregar nuevo producto
      const newItem: ExpressInvoiceItem = {
        id: Math.random().toString(36).substr(2, 9),
        product_id: product.id,
        product_name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      }
      setInvoiceItems([...invoiceItems, newItem])
    }
  }

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId)
      return
    }

    setInvoiceItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
          : item
      )
    )
  }

  const removeItem = (itemId: string) => {
    setInvoiceItems(items => items.filter(item => item.id !== itemId))
  }

  const clearInvoice = () => {
    setInvoiceItems([])
    setCustomerName("")
    setDiscountValue("")
    setTaxPercent("16")
    setSuccess(null)
    setError(null)
  }

  const saveInvoice = async () => {
    if (invoiceItems.length === 0) {
      setError("Debe agregar al menos un producto a la factura")
      return
    }

    try {
      setLoading(true)
      
      // Crear la factura express
      const invoiceData = {
        customer_name: customerName || "Cliente Express",
        amount: total,
        date: new Date(),
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
        status_id: "1", // Pendiente por defecto
        subtotal: subtotal,
        tax_percent: taxPercent ? parseFloat(taxPercent) : 0,
        tax_amount: taxAmount,
        discount_type: discountValue ? discountType : undefined,
        discount_value: discountValue ? parseFloat(discountValue) : undefined,
        discount_amount: discountAmount,
        invoice_items: invoiceItems.map(item => ({
          product_id: item.product_id,
          product_name: item.product_name,
          quantity: item.quantity,
          unit_price: item.price,
          total: item.total
        }))
      }

      const response = await fetch('/api/express-invoices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(invoiceData),
      })

      if (!response.ok) {
        throw new Error('Error al guardar la factura')
      }

      setSuccess("Factura guardada exitosamente")
      clearInvoice()
    } catch (err: any) {
      setError('Error al guardar: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1">
          Facturas Express
        </Typography>
        <Box>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={clearInvoice}
            sx={{ mr: 2 }}
            disabled={invoiceItems.length === 0}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={saveInvoice}
            disabled={loading || invoiceItems.length === 0}
          >
            Guardar Factura
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Panel de productos disponibles */}
        <Grid size={{ xs: 12, md: 6 }} sx={{
          maxHeight: '700px',  // altura máxima visible
          overflowY: 'auto',   // scroll vertical
        }}>
          <Paper sx={{ p: 2, height: 'fit-content' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">
                {i("available-products")}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {filteredProducts.length} {g("of")} {products.length} {g("products")}
              </Typography>
            </Box>
            
            {/* Campo de búsqueda */}
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={i("search-products")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box sx={{ color: 'action.active', mr: 1, my: 0.5 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                    </Box>
                  </InputAdornment>
                ),
                endAdornment: searchTerm ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchTerm("")}
                      edge="end"
                    >
                      <Box sx={{ color: 'action.active', my: 0.5 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </Box>
                    </IconButton>
                  </InputAdornment>
                ) : null
              }}
              sx={{ mb: 2 }}
            />

            {filteredProducts.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                <Typography variant="body2">
                  {i("no-product-found")}
                </Typography>
              </Box>
            ) : (
              <Stack spacing={1} sx={{ maxHeight: 550, overflow: 'auto' }}>
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    variant="outlined" 
                    sx={{
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {product.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 0.5 }}>
                            <Typography variant="body2" color="primary.main" fontWeight="medium">
                              ${Number(product.price).toFixed(2)}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                bgcolor: product.quantity > 0 ? 'success.50' : 'error.50',
                                color: product.quantity > 0 ? 'success.main' : 'error.main',
                                px: 1, 
                                py: 0.5, 
                                borderRadius: 1,
                                display: 'inline-flex',
                                alignItems: 'center'
                              }}
                            >
                              Stock: {product.quantity}
                            </Typography>
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<AddIcon />}
                          onClick={() => addProduct(product)}
                          disabled={product.quantity <= 0}
                          sx={{
                            minWidth: '100px',
                            borderRadius: '20px'
                          }}
                        >
                          {g("add")}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            )}
          </Paper>
        </Grid>

        {/* Panel de factura */}
        <Grid size={{ xs: 12, md: 6 }} sx={{
          maxHeight: '700px',  // altura máxima visible
          overflowY: 'auto',   // scroll vertical
        }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Factura Express
            </Typography>

            {/* Nombre del cliente (opcional) */}
            <TextField
              fullWidth
              label="Nombre del Cliente (Opcional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              sx={{ mb: 3 }}
              placeholder="Ej: Juan Pérez"
            />

            {/* Items de la factura */}
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Productos Seleccionados
            </Typography>

            {invoiceItems.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                <Typography>
                  No hay productos seleccionados
                </Typography>
                <Typography variant="body2">
                  Selecciona productos del panel izquierdo
                </Typography>
              </Box>
            ) : (
              <Stack spacing={2} sx={{ mb: 3 }}>
                {invoiceItems.map((item) => (
                  <Box key={item.id} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 2, 
                    border: 1, 
                    borderColor: 'divider', 
                    borderRadius: 1 
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2">
                        {item.product_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${Number(item.price).toFixed(2)} c/u
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2, minWidth: 30, textAlign: 'center' }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>

                    <Typography variant="subtitle2" sx={{ minWidth: 80, textAlign: 'right' }}>
                      ${Number(item.total).toFixed(2)}
                    </Typography>

                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeItem(item.id)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            )}

            {/* Cálculos */}
            {invoiceItems.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                
                {/* Descuento */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Descuento:
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12 }}>
                      <RadioGroup
                        row
                        value={discountType}
                        onChange={(e) => setDiscountType(e.target.value as 'percentage' | 'fixed')}
                      >
                        <FormControlLabel 
                          value="percentage" 
                          control={<Radio size="small" />} 
                          label="Porcentaje" 
                        />
                        <FormControlLabel 
                          value="fixed" 
                          control={<Radio size="small" />} 
                          label="Cantidad fija" 
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label={discountType === 'percentage' ? "Descuento %" : "Descuento $"}
                        value={discountValue}
                        onChange={(e) => setDiscountValue(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {discountType === 'percentage' ? '%' : '$'}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        -${Number(discountAmount).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {/* Impuesto */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Impuesto:
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 8 }}>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label="IVA %"
                        value={taxPercent}
                        onChange={(e) => setTaxPercent(e.target.value)}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        +${Number(taxAmount).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Totales */}
                <Box sx={{ mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Subtotal:</Typography>
                    <Typography>${Number(subtotal).toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Descuento:</Typography>
                    <Typography>-${Number(discountAmount).toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography>Impuesto:</Typography>
                    <Typography>+${Number(taxAmount).toFixed(2)}</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight="bold">
                      Total:
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      ${Number(total).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbars para mensajes */}
      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={() => setError(null)}
      >
        <Alert onClose={() => setError(null)} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>

      <Snackbar 
        open={!!success} 
        autoHideDuration={4000} 
        onClose={() => setSuccess(null)}
      >
        <Alert onClose={() => setSuccess(null)} severity="success" variant="filled">
          {success}
        </Alert>
      </Snackbar>
    </Container>
  )
}