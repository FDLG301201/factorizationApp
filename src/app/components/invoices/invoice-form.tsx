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
import DiscountIcon from '@mui/icons-material/LocalOffer';
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


  //Buscar los estados de la facturas
  const fetchInvoiceStatuses = async () => {
    const response = await fetch("/api/invoice-statuses");
    const data = await response.json();
    return data;
  };

  //Establecer el estado pendiente por defecto a la hora de crear una nueva factura
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

  //Manejador de cambios
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name as string]: value,
    })
  }

  //Manejador de cambio de cliente
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
    // Calcular subtotal sumando todos los elementos (sin descuentos individuales)
    const newSubtotal = invoiceItems.reduce((sum, item) => sum + item.subtotal, 0);
    setSubtotal(newSubtotal);

    // Calcular subtotal después de descuentos individuales
    const subtotalAfterItemDiscounts = invoiceItems.reduce((sum, item) => {
      return sum + (item.subtotal_after_discount !== undefined ? item.subtotal_after_discount : item.subtotal);
    }, 0);

    // Calcular descuento general sobre el subtotal después de descuentos individuales
    let newDiscountAmount = 0;
    if (discountValue && parseFloat(discountValue) > 0) {
      if (discountType === 'percentage') {
        // Aplicar el porcentaje al subtotal después de descuentos individuales
        newDiscountAmount = Math.round(subtotalAfterItemDiscounts * (parseFloat(discountValue) / 100) * 100) / 100;
      } else {
        // Aplicar un monto fijo como descuento general
        newDiscountAmount = parseFloat(discountValue);
      }
    }
    setDiscountAmount(newDiscountAmount);

    // Calcular impuesto sobre el monto después de todos los descuentos
    let newTaxAmount = 0;
    if (taxPercent && parseFloat(taxPercent) > 0) {
      newTaxAmount = Math.round((subtotalAfterItemDiscounts - newDiscountAmount) * (parseFloat(taxPercent) / 100) * 100) / 100;
    }
    setTaxAmount(newTaxAmount);

    // Calcular total
    const newTotal = Math.round((subtotalAfterItemDiscounts - newDiscountAmount + newTaxAmount) * 100) / 100;
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

  // Manejar cambio de tipo de descuento general
  const handleDiscountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountType(event.target.value as 'percentage' | 'fixed');
    // Resetear el valor cuando cambia el tipo
    setDiscountValue('');
  };

  // Manejar cambio de valor de descuento general
  const handleDiscountValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Validar que sea un número válido
    if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
      setDiscountValue(value);
    }
  };

  // Manejar cambio en el porcentaje de impuesto
  const handleTaxPercentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Validar que sea un número válido
    if (value === '' || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0)) {
      setTaxPercent(value);
    }
  };

  //Evento Submit del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse dates from form data
    const parsedDate = new Date(formData.date);
    const parsedDueDate = new Date(formData.due_date);
    
    // Create properly formatted ISO strings without spaces
    const dateString = parsedDate.toISOString().replace(/ /g, '');
    const dueDateString = parsedDueDate.toISOString().replace(/ /g, '');

    onSubmit({
      customer_id: formData.customer_id,
      amount: total,
      // Use formatted strings instead of Date objects
      date: dateString as any, // Using type assertion to bypass type checking
      due_date: dueDateString as any, // Using type assertion to bypass type checking
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
    <Dialog open={true} onClose={(event, reason) => {
      if (reason === "backdropClick" || reason === "escapeKeyDown") {
        return;
      }
      onCancel(); // solo se cierra manualmente
    }} maxWidth="xl" fullWidth PaperProps={{ sx: { maxHeight: '90vh' } }}>
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h5" component="div">
            {invoice ? t("edit-invoice") : t("create-invoice")}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pb: 1 }}>
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
                        existingProductIds={invoiceItems
                          .filter((_, idx) => idx !== index)
                          .map(item => item.inventory_id)
                          .filter(id => id !== '')}
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
              <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <CalculateIcon sx={{ mr: 1 }} /> {t("calculations")}
                </Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12 }}>
                    {/* Subtotal */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, pb: 1, borderBottom: '1px dashed #e0e0e0' }}>
                      <Typography variant="subtitle1">{t("subtotal")}:</Typography>
                      <Typography variant="subtitle1" fontWeight="medium">${subtotal.toFixed(2)}</Typography>
                    </Box>

                    {/* Descuentos individuales aplicados */}
                    {invoiceItems.some(item => item.item_discount_amount && item.item_discount_amount > 0) && (
                      <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.default', borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                          <DiscountIcon fontSize="small" sx={{ mr: 1 }} /> Descuentos por Ítem:
                        </Typography>
                        {invoiceItems.map((item, index) => (
                          item.item_discount_amount && item.item_discount_amount > 0 && (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, ml: 2 }}>
                              <Typography variant="body2" color="text.secondary">
                                {allProducts.find(p => p.id === item.inventory_id)?.name || `Ítem ${index + 1}`} ({item.item_discount_type === 'percentage' ? `${item.item_discount_value}%` : `$${item.item_discount_value}`}):
                              </Typography>
                              <Typography variant="body2" color="error.main" fontWeight="medium">
                                -${Number(item.item_discount_amount).toFixed(2)}
                              </Typography>
                            </Box>
                          )
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, mt: 1, pt: 1, borderTop: '1px dashed #e0e0e0' }}>
                          <Typography variant="subtitle2">Subtotal después de descuentos por ítem:</Typography>
                          <Typography variant="subtitle2" fontWeight="medium">
                            ${invoiceItems.reduce((sum, item) => sum + (item.subtotal_after_discount !== undefined ? item.subtotal_after_discount : item.subtotal), 0).toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {/* Descuento general */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{t("discount")} General:</Typography>
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
                            label={discountType === 'percentage' ? t("discount-percent") : t("amount_discount")}
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
