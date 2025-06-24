"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import CalculateIcon from '@mui/icons-material/Calculate'
import { Invoice } from "../../types/invoice"
import { Customer } from "../../types/customer"
import { Inventory } from "../../types/inventory"
import { InvoiceItems } from "../../types/invoice-items"
import { useTranslations } from "next-intl"
import { InvoiceStatus } from "@/app/types/invoice-status"
import InvoiceItemRow from "./invoice-item-row"


interface InvoiceFormProps {
  onSubmit: (invoice: Omit<Invoice, "id">) => void
  onCancel: () => void
  customers: Customer[]
  products?: Inventory[]
  invoice?: Invoice
}

export default function InvoiceForm({ onSubmit, onCancel, customers, products = [], invoice }: InvoiceFormProps) {

  const t = useTranslations("Invoices");
  const g = useTranslations("General");
  const s = useTranslations("Status");
  const [invoiceStatuses, setInvoiceStatuses] = useState<InvoiceStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Inventory[]>(products);

  // Estado para los elementos de factura
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItems[]>([]);
  
  // Estado para descuentos e impuestos
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('percentage');
  const [discountValue, setDiscountValue] = useState<string>('');
  const [taxPercent, setTaxPercent] = useState<string>('');
  
  // Totales calculados
  const [subtotal, setSubtotal] = useState<number>(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [formData, setFormData] = useState({
    customer_id: "",
    amount: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    due_date: "",
    status_id: "",
  })

  // Cargar productos si no se proporcionaron como prop
  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        try {
          const response = await fetch('/api/products');
          const data = await response.json();

          console.log('data de productos', data);

          setAllProducts(data);
        } catch (error) {
          console.error('Error al cargar productos:', error);
        }
      };
      fetchProducts();
    }
  }, [products.length]);

  // Cargar datos de la factura existente
  useEffect(() => {
    if (invoice) {
      const foundCustomer = customers.find((c) => c.id === invoice.customer_id);

      const parsedDate = new Date(invoice.date).toISOString().split("T")[0];
      const parsedDueDate = new Date(invoice.due_date).toISOString().split("T")[0];

      setFormData({
        customer_id: invoice.customer_id,
        phone: foundCustomer ? foundCustomer.phone : "",
        amount: invoice.amount?.toString() || "",
        date: parsedDate,
        due_date: parsedDueDate,
        status_id: invoice.status_id || "",
      });
      
      // Cargar elementos de factura si existen
      if (invoice.invoice_items && invoice.invoice_items.length > 0) {
        setInvoiceItems(invoice.invoice_items);
      }
      
      // Cargar descuentos e impuestos si existen
      if (invoice.discount_type) {
        setDiscountType(invoice.discount_type);
      }
      
      if (invoice.discount_value !== undefined) {
        setDiscountValue(invoice.discount_value.toString());
      }
      
      if (invoice.tax_percent !== undefined) {
        setTaxPercent(invoice.tax_percent.toString());
      }
      
      if (invoice.subtotal !== undefined) {
        setSubtotal(invoice.subtotal);
      }
      
      if (invoice.tax_amount !== undefined) {
        setTaxAmount(invoice.tax_amount);
      }
      
      if (invoice.discount_amount !== undefined) {
        setDiscountAmount(invoice.discount_amount);
      }
    }
  }, [invoice, customers]);

  const fetchInvoiceStatuses = async () => {
    const response = await fetch("/api/invoice-statuses");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setLoading(true);
    try {
        fetchInvoiceStatuses().then((data) => {
          setInvoiceStatuses(data);
          
          // Si estamos creando una nueva factura, establecer el estado por defecto como "pendiente"
          if (!invoice) {
            const pendingStatus = data.find((status: InvoiceStatus) => 
              status.name.toLowerCase() === "pending" || 
              status.name.toLowerCase() === "pendiente"
            );
            
            if (pendingStatus) {
              setFormData(prev => ({
                ...prev,
                status_id: pendingStatus.id
              }));
            }
          }
          
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
  }, [invoice]);

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  const handleCustomerChange = (event: React.SyntheticEvent, value: Customer | null) => {
    if (value) {
      setFormData({
        ...formData,
        customer_id: value.id,
        phone: value.phone || "",
      });
    } else {
      setFormData({
        ...formData,
        customer_id: "",
        phone: "",
      });
    }
  };

  // Calcular totales cuando cambian los elementos, descuentos o impuestos
  useEffect(() => {
    // Calcular subtotal sumando todos los elementos
    const newSubtotal = invoiceItems.reduce((sum, item) => sum + item.subtotal, 0);
    setSubtotal(newSubtotal);
    
    // Calcular descuento
    let newDiscountAmount = 0;
    if (discountValue && parseFloat(discountValue) > 0) {
      if (discountType === 'percentage') {
        newDiscountAmount = newSubtotal * (parseFloat(discountValue) / 100);
      } else {
        newDiscountAmount = parseFloat(discountValue);
      }
    }
    setDiscountAmount(newDiscountAmount);
    
    // Calcular impuesto sobre el monto después del descuento
    let newTaxAmount = 0;
    if (taxPercent && parseFloat(taxPercent) > 0) {
      newTaxAmount = (newSubtotal - newDiscountAmount) * (parseFloat(taxPercent) / 100);
    }
    setTaxAmount(newTaxAmount);
    
    // Calcular total
    const newTotal = newSubtotal - newDiscountAmount + newTaxAmount;
    setTotal(newTotal);
    
    // Actualizar el monto en el formulario para mantener compatibilidad
    setFormData(prev => ({
      ...prev,
      amount: newTotal.toString()
    }));
    
  }, [invoiceItems, discountType, discountValue, taxPercent]);
  
  // Añadir un nuevo elemento de factura
  const handleAddInvoiceItem = () => {
    const newItem: InvoiceItems = {
      id: `temp-${Date.now()}`,
      invoice_id: invoice?.id || '',
      inventory_id: '',
      quantity: 1,
      unit_price: 0,
      subtotal: 0
    };
    
    setInvoiceItems([...invoiceItems, newItem]);
  };
  
  // Actualizar un elemento de factura
  const handleUpdateInvoiceItem = (index: number, updatedItem: InvoiceItems) => {
    const newItems = [...invoiceItems];
    newItems[index] = updatedItem;
    setInvoiceItems(newItems);
  };
  
  // Eliminar un elemento de factura
  const handleDeleteInvoiceItem = (index: number) => {
    const newItems = [...invoiceItems];
    newItems.splice(index, 1);
    setInvoiceItems(newItems);
  };
  
  // Manejar cambio en el tipo de descuento
  const handleDiscountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountType(e.target.value as 'percentage' | 'fixed');
  };
  
  // Manejar cambio en el valor del descuento
  const handleDiscountValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountValue(e.target.value);
  };
  
  // Manejar cambio en el porcentaje de impuesto
  const handleTaxPercentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaxPercent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedDate = new Date(formData.date);
    const parsedDueDate = new Date(formData.due_date);

    onSubmit({
      customer_id: formData.customer_id,
      amount: total,
      date: parsedDate,
      due_date: parsedDueDate,
      status_id: formData.status_id,
      // invoice_statuses: undefined,
      // Nuevos campos
      subtotal: subtotal,
      tax_percent: taxPercent ? parseFloat(taxPercent) : undefined,
      tax_amount: taxAmount,
      discount_type: discountValue ? discountType : undefined,
      discount_value: discountValue ? parseFloat(discountValue) : undefined,
      discount_amount: discountAmount,
      invoice_items: invoiceItems.length > 0 ? invoiceItems : undefined
    });
  };

  return (
    <Dialog open={true} onClose={onCancel} maxWidth="lg" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{invoice ? t("edit-invoice") : t("create-invoice")}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {/* Información básica de la factura */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>{t("invoice-information")}</Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Autocomplete
                    options={customers}
                    getOptionLabel={(option) => `${option.identifier} - ${option.name}`}
                    value={customers.find((c) => c.id === formData.customer_id) || null}
                    onChange={handleCustomerChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={g("customer")}
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>{g("status")}</InputLabel>
                    <Select
                      name="status_id"
                      value={formData.status_id}
                      onChange={handleChange}
                      label={g("status")}
                      disabled={!invoice} // Deshabilitar si es una nueva factura
                    >
                      {invoiceStatuses.map((status) => (
                        <MenuItem key={status.id} value={status.id}>
                          {s(status.name)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="date"
                    name="date"
                    label={g("date")}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="date"
                    name="due_date"
                    label={g("due-date")}
                    value={formData.due_date}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Elementos de la factura */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">{t("invoice-items")}</Typography>
                <Button
                  startIcon={<AddIcon />}
                  onClick={handleAddInvoiceItem}
                  variant="outlined"
                  size="small"
                >
                  {t("add-item")}
                </Button>
              </Box>

              <Paper sx={{ p: 2, mb: 2 }}>
                {invoiceItems.length === 0 ? (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography color="text.secondary">
                      {t("no-items-added")}
                    </Typography>
                    <Button
                      startIcon={<AddIcon />}
                      onClick={handleAddInvoiceItem}
                      sx={{ mt: 2 }}
                    >
                      {t("add-first-item")}
                    </Button>
                  </Box>
                ) : (
                  <Stack spacing={2}>
                    {invoiceItems.map((item, index) => (
                      <InvoiceItemRow
                        key={index}
                        index={index}
                        item={item}
                        products={allProducts}
                        onUpdate={(updatedItem) => handleUpdateInvoiceItem(index, updatedItem)}
                        onDelete={() => handleDeleteInvoiceItem(index)}
                      />
                    ))}
                  </Stack>
                )}
              </Paper>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Cálculos y totales */}
            <Grid size={{ xs: 12 }}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>{t("calculations")}</Typography>
                
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12 }}>
                    {/* Subtotal */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography>{t("subtotal")}:</Typography>
                      <Typography>${subtotal.toFixed(2)}</Typography>
                    </Box>
                    
                    {/* Descuento */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{t("discount")}:</Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <RadioGroup
                            row
                            value={discountType}
                            onChange={handleDiscountTypeChange}
                          >
                            <FormControlLabel 
                              value="percentage" 
                              control={<Radio size="small" />} 
                              label={t("percentage")} 
                            />
                            <FormControlLabel 
                              value="fixed" 
                              control={<Radio size="small" />} 
                              label={t("fixed-amount")} 
                            />
                          </RadioGroup>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <TextField
                            fullWidth
                            type="number"
                            label={discountType === 'percentage' ? t("discount-percent") : t("discount-amount")}
                            value={discountValue}
                            onChange={handleDiscountValueChange}
                            InputProps={{
                              endAdornment: discountType === 'percentage' ? 
                                <InputAdornment position="end">%</InputAdornment> : 
                                <InputAdornment position="start">$</InputAdornment>,
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography>-${discountAmount.toFixed(2)}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    
                    {/* Impuesto */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{t("tax")}:</Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, sm: 8 }}>
                          <TextField
                            fullWidth
                            type="number"
                            label={t("tax-percent")}
                            value={taxPercent}
                            onChange={handleTaxPercentChange}
                            InputProps={{
                              endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography>+${taxAmount.toFixed(2)}</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    {/* Total */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6">{t("total")}:</Typography>
                      <Typography variant="h6" color="primary">${total.toFixed(2)}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>{g("cancel")}</Button>
          <Button type="submit" variant="contained" color="primary">
            {invoice ? t("update-invoice") : t("create-invoice")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
