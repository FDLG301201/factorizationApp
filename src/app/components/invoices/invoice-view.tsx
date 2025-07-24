import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Divider, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Chip, 
  Card, 
  CardContent,
  Stack,
  Button
} from '@mui/material';
import { Grid } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslations } from 'next-intl';
import { formatCurrency } from '@/app/utils/format';
import { useLocale } from 'next-intl';
import { InvoiceStatus } from '@/app/constants/invoice-statuses.enum';

// Tipo para los detalles de factura
interface InvoiceViewProps {
  invoice: any; // Podríamos definir una interfaz más específica si es necesario
}

export default function InvoiceView({ invoice }: InvoiceViewProps) {
  const t = useTranslations('Invoices');
  const p = useTranslations('Payments');
  const g = useTranslations('General');
  const s = useTranslations('Status');
  const locale = useLocale();

  // Función para determinar el color del estado
  const getStatusColor = (statusId: number) => {
    switch (statusId) {
      case InvoiceStatus.Paid:
        return 'success';
      case InvoiceStatus.Overdue:
        return 'error';
      case InvoiceStatus.Canceled:
        return 'default';
      default:
        return 'warning'; // Pendiente
    }
  };

  // Función para formatear la fecha según la localización
  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale).format(date);
  };

  // Si no hay factura, mostrar mensaje
  if (!invoice) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">{t('invoice-not-found')}</Typography>
      </Box>
    );
  }

  // Función para imprimir la factura
  const handlePrintClick = async () => {
    try {
      // Abrir la URL del PDF en una nueva ventana
      window.open(`/api/invoices/${invoice.id}/pdf`, '_blank');
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  };

  // Función para volver atrás (usada en la página [id])
  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Cabecera con información general */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          
          {/* APARTADO DE FACTURA */}
          
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              {t('invoice')} #{invoice.id}
            </Typography>
            <Chip 
              label={s(invoice.invoice_statuses?.name || "")} 
              color={getStatusColor(invoice.status_id) as any}
              sx={{ mb: 2 }}
            />
            <Typography variant="body1" >
              <strong>{t('date')}:</strong> {formatDate(invoice.date)}
            </Typography>
            <Typography variant="body1">
              <strong>{t('due-date')}:</strong> {formatDate(invoice.due_date)}
            </Typography>
            {invoice.payment_date && (
              <Typography variant="body1">
                <strong>{p('payment-date')}:</strong> {formatDate(invoice.payment_date)}
              </Typography>
            )}
          </Box>


          {/* APARTADO DE CLIENTE */}

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              {t('customer')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>{g('name')}:</strong> {invoice.customers?.name}
            </Typography>
            {invoice.customers?.identifier && (
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>{g('identifier')}:</strong> {invoice.customers.identifier}
              </Typography>
            )}
            {invoice.customers?.email && (
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>{g('email')}:</strong> {invoice.customers.email}
              </Typography>
            )}
            {invoice.customers?.phone && (
              <Typography variant="body1">
                <strong>{g('phone')}:</strong> {invoice.customers.phone}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>

      {/* Sección de elementos/productos */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {t('invoice-items')}
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{t('product')}</TableCell>
              <TableCell align="right">{t('quantity')}</TableCell>
              <TableCell align="right">{t('unit-price')}</TableCell>
              <TableCell align="right">{t('discount')}</TableCell>
              <TableCell align="right">{t('subtotal')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoice.items?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>{item.products?.name || 'N/A'}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  {formatCurrency(Number(item.unit_price), locale)}
                </TableCell>
                <TableCell align="right">
                  {item.item_discount_amount ? 
                    formatCurrency(Number(item.item_discount_amount), locale) : '-'}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(
                    Number(item.subtotal_after_discount || item.subtotal), 
                    locale
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Resumen de totales */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Stack spacing={1} sx={{ width: '250px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">{t('subtotal')}:</Typography>
              <Typography variant="body2">{formatCurrency(Number(invoice.subtotal), locale)}</Typography>
            </Box>
            
            {Number(invoice.discount_amount) > 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">{t('discount')}:</Typography>
                <Typography variant="body2">
                  -{formatCurrency(Number(invoice.discount_amount), locale)}
                </Typography>
              </Box>
            )}
            
            {Number(invoice.tax_amount) > 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">{t('tax')}:</Typography>
                <Typography variant="body2">
                  {formatCurrency(Number(invoice.tax_amount), locale)}
                </Typography>
              </Box>
            )}
            
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" fontWeight="bold">{t('total')}:</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {formatCurrency(Number(invoice.amount), locale)}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>

      {/* Sección de pagos */}
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          {p('payments')}
        </Typography>

        {invoice.payments && invoice.payments.length > 0 ? (
          <>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{g('date')}</TableCell>
                  <TableCell align="right">{p('amount')}</TableCell>
                  <TableCell>{p('payment-method')}</TableCell>
                  <TableCell>{g('notes')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoice.payments.map((payment: any) => (
                  <TableRow key={payment.id}>
                    <TableCell>{formatDate(payment.date)}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(Number(payment.amount), locale)}
                    </TableCell>
                    <TableCell>
                      {p(`payment-method-${payment.method?.toLowerCase()}`) || payment.method}
                    </TableCell>
                    <TableCell>{payment.notes || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Resumen de pagos */}
            <Card variant="outlined" sx={{ mt: 2, maxWidth: 300, ml: 'auto' }}>
              <CardContent>
                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">{t('total')}:</Typography>
                    <Typography variant="body2" align="right">
                      {formatCurrency(invoice.payment_summary.total_invoice, locale)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">{p('total-paid')}:</Typography>
                    <Typography variant="body2" align="right">
                      {formatCurrency(invoice.payment_summary.total_paid, locale)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" fontWeight="bold">{p('balance-due')}:</Typography>
                    <Typography 
                      variant="body2" 
                      fontWeight="bold" 
                      align="right" 
                      color={invoice.payment_summary.balance_due > 0 ? 'error' : 'success'}
                    >
                      {formatCurrency(invoice.payment_summary.balance_due, locale)}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </>
        ) : (
          <Typography variant="body2">{p('no-payments-recorded')}</Typography>
        )}
      </Paper>
    </Box>
  );
}
