'use client';

import { useState, useEffect } from 'react';
import {
  Modal, Box, Typography, TextField, Button, MenuItem, Grid, InputAdornment,
} from '@mui/material';
import { useTranslations, useLocale } from 'next-intl';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  invoiceId: string;
  onPaymentSuccess?: () => void;
}

export default function PaymentModal({ open, onClose, invoiceId, onPaymentSuccess }: PaymentModalProps) {
  const locale = useLocale();
  const g = useTranslations('General');
  const p = useTranslations('Payments');
  
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  
  // Establecer la fecha actual al abrir el modal
  useEffect(() => {
    if (open) {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setDate(formattedDate);
      // Aquí podríamos cargar el número de la factura si lo tenemos disponible
      setInvoiceNumber(invoiceId);
    }
  }, [open, invoiceId]);
  
  const paymentMethods = [
    { value: 'cash', label: p('payment-method-cash') },
    { value: 'card', label: p('payment-method-card') },
    { value: 'transfer', label: p('payment-method-transfer') },
    { value: 'check', label: p('payment-method-check') }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(locale === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: locale === 'es' ? 'DOP' : 'USD',
    }).format(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!amount) return;

    try {
      const response = await fetch('/api/invoice-payments', {
        method: 'POST',
        body: JSON.stringify({
          invoice_id: invoiceId,
          amount,
          method,
          notes,
          payment_date: date
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error creating payment');
      }

      // Llamar al callback de éxito si existe
      if (onPaymentSuccess) {
        onPaymentSuccess();
      } else {
        // Si no hay callback de éxito, cerramos el modal después de un breve retraso
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" align="center" mb={3}>
          {p('record-payment')}
        </Typography>
        
        <TextField
          label={p('invoice')}
          fullWidth
          value={invoiceNumber}
          InputProps={{
            readOnly: true,
          }}
          disabled
          sx={{ mb: 2 }}
        />

        <TextField
          label={g('amount')}
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {locale === 'es' ? 'RD$' : '$'}
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              label={g('date')}
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              label={p('payment-method')}
              select
              fullWidth
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              {paymentMethods.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        <TextField
          label={g('notes')}
          fullWidth
          multiline
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button 
          variant="contained" 
          fullWidth 
          type="submit"
          size="large"
          color="primary"
        >
          {p('add-payment')}
        </Button>
      </Box>
    </Modal>
  );
}
