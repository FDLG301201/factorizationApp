'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import InvoiceView from '@/app/components/invoices/invoice-view';
import { use } from 'react';

// interface InvoiceDetailProps {
//   params: {
//     id: string;
//   };
// }

export default function InvoiceDetailPage({ params }: {params: Promise<{ id: string }>}) {
  // const { id } = params;
  const { id } = use(params)
  const [invoice, setInvoice] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const t = useTranslations('Invoices');
  const g = useTranslations('General');

  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/invoices/${id}`);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setInvoice(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching invoice details:', err);
        setError(err.message || t('error-fetching-invoice'));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchInvoiceDetails();
    }
  }, [id, t]);

  const handleGoBack = () => {
    router.back();
  };

  const [printLoading, setPrintLoading] = useState(false);

  const handlePrint = async () => {
    try {
      setPrintLoading(true);
      // Verificamos si el endpoint responde correctamente antes de abrir la ventana
      const checkResponse = await fetch(`/api/invoices/${id}/pdf`, { method: 'HEAD' });
      
      if (!checkResponse.ok) {
        throw new Error(`Error ${checkResponse.status}: ${checkResponse.statusText}`);
      }
      
      // Abrimos el PDF en una nueva pestaña
      window.open(`/api/invoices/${id}/pdf`, '_blank');
    } catch (err: any) {
      console.error('Error al generar el PDF:', err);
      setError(err.message || t('error-generating-pdf'));
    } finally {
      setPrintLoading(false);
    }
  };

  return (
    <Box sx={{ 
      p: 2,
      '@media print': {
        margin: 0,
        padding: 0
      }
    }}>
      {/* Botones de navegación (no visibles al imprimir) */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mb: 2,
          '@media print': {
            display: 'none'
          }
        }}
      >
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleGoBack}
          variant="outlined"
        >
          {g('back')}
        </Button>
        
        <Button
          startIcon={printLoading ? <CircularProgress size={20} color="inherit" /> : <PrintIcon />}
          onClick={handlePrint}
          variant="contained"
          disabled={printLoading}
        >
          {printLoading ? 'Generando...' : g('print')}
        </Button>
      </Box>

      {/* Contenido principal */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>
      ) : (
        <InvoiceView invoice={invoice} />
      )}
    </Box>
  );
}
