"use client"

import { useEffect, useMemo, useState } from 'react'
import { Autocomplete, Box, Button, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'
import { Customer } from '@/app/types/customer'
import { Inventory } from '@/app/types/inventory'
import { QuoteData } from '@/app/types/quote'
import { generateTempQuoteNumber } from '@/app/utils/quotes'
import InvoiceItemRow from '@/app/components/invoices/invoice-item-row'
import DownloadButtons from './download-buttons'

interface QuoteFormProps {
  customers: Customer[]
}

export default function QuoteForm({ customers }: QuoteFormProps) {
  const t = useTranslations('Quotes')

  const [allProducts, setAllProducts] = useState<Inventory[]>([])

  const [quote, setQuote] = useState<QuoteData>({
    quote_number: generateTempQuoteNumber(),
    customer_id: 0,
    items: [],
    valid_until: dayjs().add(30, 'day').format('YYYY-MM-DD'),
    notes: '',
    subtotal: 0,
    tax_amount: 0,
    discount_amount: 0,
    total: 0,
  })

  // Load products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setAllProducts(data)
      } catch (e) { 
        console.error('Error fetching products:', e) 
      }
    }
    fetchProducts()
  }, [])

  // Calculations based on items
  const totals = useMemo(() => {
    const subtotal = quote.items.reduce((acc, it) => {
      const unit = (it.item_custom_price ?? it.unit_price ?? 0)
      const lineSubtotal = (it.quantity ?? 0) * Number(unit)
      const discount = it.item_discount_amount ?? 0
      const after = (it.subtotal_after_discount ?? (lineSubtotal - Number(discount)))
      return acc + Number(after)
    }, 0)
    const discount = Number(quote.discount_amount) || 0
    const tax = Number(quote.tax_amount) || 0
    const total = subtotal - discount + tax
    return { subtotal, discount, tax, total }
  }, [quote.items, quote.discount_amount, quote.tax_amount])

  useEffect(() => {
    setQuote(q => ({ ...q, ...totals }))
  }, [totals.subtotal, totals.discount, totals.tax, totals.total])

  const handleAddItem = () => {
    setQuote(q => ({
      ...q,
      items: [
        ...q.items,
        {
          inventory_id: undefined,
          quantity: 1,
          unit_price: 0,
          subtotal: 0,
          item_discount_type: 'none',
          item_discount_value: 0,
          item_discount_amount: 0,
          subtotal_after_discount: 0,
        }
      ]
    }))
  }

  const handleUpdateItem = (index: number, updated: any) => {
    setQuote(q => {
      const items = [...q.items]
      items[index] = { ...items[index], ...updated }
      return { ...q, items }
    })
  }

  const handleDeleteItem = (index: number) => {
    setQuote(q => ({ ...q, items: q.items.filter((_, i) => i !== index) }))
  }

  // Función mejorada para manejar selección de cliente
  const handleCustomerSelect = (_: any, value: Customer | null) => {
    
    if (value) {
      const customerId = Number(value.id)
      setQuote(q => ({ ...q, customer_id: customerId }))
    } else {
      setQuote(q => ({ ...q, customer_id: 0 }))
    }
  }

  // Función mejorada para obtener el cliente seleccionado
  const getSelectedCustomer = (): Customer | null => {
    if (!quote.customer_id || quote.customer_id === 0) return null
    
    const found = customers.find(c => Number(c.id) === Number(quote.customer_id))
    
    return found || null
  }

  const handleValidUntilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(q => ({ ...q, valid_until: e.target.value }))
  }

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuote(q => ({ ...q, notes: e.target.value }))
  }

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const val = raw === '' ? 0 : Number(raw)
    if (!isNaN(val) && val >= 0) {
      setQuote(q => ({ ...q, discount_amount: val }))
    }
  }

  const handleTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    const val = raw === '' ? 0 : Number(raw)
    if (!isNaN(val) && val >= 0) {
      setQuote(q => ({ ...q, tax_amount: val }))
    }
  }

  // Validación de formulario
  const isFormValid = useMemo(() => {
    return (
      Number(quote.customer_id) > 0 &&
      quote.quote_number.trim() !== '' &&
      quote.items.length > 0 &&
      quote.items.every(item => 
        item.inventory_id !== undefined && 
        item.quantity !== undefined && 
        item.quantity > 0
      )
    )
  }, [quote])

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={600}>{t('title')}</Typography>
        
        {/* Debug info - remover en producción */}
        {process.env.NODE_ENV === 'development' && (
          <Box sx={{ p: 1, bgcolor: 'grey.100', borderRadius: 1, fontSize: '0.8rem' }}>
            <strong>Debug:</strong> Customer ID: {quote.customer_id} | 
            Selected: {getSelectedCustomer()?.name || 'None'} | 
            Total customers: {customers.length}
          </Box>
        )}

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Autocomplete
              options={customers}
              getOptionLabel={(option) => {
                if (!option) return ''
                const parts = [option.name]
                if (option.identifier) parts.push(option.identifier)
                if (option.email) parts.push(option.email)
                return parts.join(' • ')
              }}
              isOptionEqualToValue={(option, value) => {
                if (!option || !value) return false
                return Number(option.id) === Number(value.id)
              }}
              value={getSelectedCustomer()}
              onChange={handleCustomerSelect}
              renderInput={(params) => (
                <TextField 
                  {...params} 
                  label={t('form.customer')} 
                  fullWidth 
                  error={quote.customer_id === 0}
                  helperText={quote.customer_id === 0 ? 'Selecciona un cliente' : ''}
                />
              )}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Box>
                    <Typography variant="body1" fontWeight={500}>
                      {option.name}
                    </Typography>
                    {(option.identifier || option.email) && (
                      <Typography variant="caption" color="text.secondary">
                        {[option.identifier, option.email].filter(Boolean).join(' • ')}
                      </Typography>
                    )}
                  </Box>
                </Box>
              )}
              noOptionsText="No se encontraron clientes"
              clearText="Limpiar"
              closeText="Cerrar"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              label={t('form.quoteNumber')}
              value={quote.quote_number}
              fullWidth
              disabled
              sx={{
                '& .MuiInputBase-input.Mui-disabled': {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                }
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              label={t('form.validUntil')}
              type="date"
              value={quote.valid_until}
              onChange={handleValidUntilChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label={t('form.notes')}
              value={quote.notes}
              onChange={handleNotesChange}
              fullWidth
              multiline
              rows={3}
              placeholder={"Añade observaciones o notas especiales para esta cotización..."}
            />
          </Grid>
        </Grid>

        <Divider />
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>{"Productos"}</Typography>
          <Stack spacing={2}>
            {quote.items.map((item, idx) => (
              <InvoiceItemRow
                key={idx}
                item={item as any}
                products={allProducts}
                index={idx}
                onUpdate={(it) => handleUpdateItem(idx, it)}
                onDelete={() => handleDeleteItem(idx)}
              />
            ))}
            <Button 
              variant="contained" 
              onClick={handleAddItem} 
              sx={{ alignSelf: 'stretch', borderRadius: 2, textTransform: 'none' }}
              disabled={quote.customer_id === 0}
            >
              {t('buttons.addProduct')}
            </Button>
            {quote.customer_id === 0 && (
              <Typography variant="caption" color="error" textAlign="center">
                Selecciona un cliente primero para agregar productos
              </Typography>
            )}
          </Stack>
        </Paper>

        <Divider />
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color="text.secondary">{t('summary.subtotal')}</Typography>
              <Typography variant="h6">${(quote.subtotal ?? 0).toFixed(2)}</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                label={t('summary.discount')}
                type="number"
                value={quote.discount_amount ?? 0}
                onChange={handleDiscountChange}
                fullWidth
                inputProps={{ min: 0, step: '0.01' }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                label={t('summary.tax')}
                type="number"
                value={quote.tax_amount ?? 0}
                onChange={handleTaxChange}
                fullWidth
                inputProps={{ min: 0, step: '0.01' }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 1 }} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={700}>
                  {t('summary.total')}: ${ (quote.total ?? 0).toFixed(2) }
                </Typography>
                {!isFormValid && (
                  <Typography variant="caption" color="error">
                    {quote.customer_id === 0 ? 'Selecciona un cliente' :
                     quote.items.length === 0 ? 'Agrega al menos un producto' :
                     'Completa todos los campos requeridos'}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Divider />
        <DownloadButtons quote={quote} />
      </Stack>
    </Paper>
  )
}