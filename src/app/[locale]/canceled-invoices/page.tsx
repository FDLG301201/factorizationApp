"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Snackbar, Alert, CircularProgress, Backdrop, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import CompanyList from '@/app/components/companies/company-list';
import CompanyForm from '@/app/components/companies/company-form';
import { Company } from '@/app/types/company';
import { useTranslations } from 'next-intl';
import { Invoice } from '@/app/types/invoice';
import InvoiceList from '@/app/components/invoices/invoice-list';
import InvoiceForm from '@/app/components/invoices/invoice-form';
import { InvoiceStatus } from '@/app/constants/invoice-statuses.enum';

export default function CanceledInvoicesPage() {

    const t = useTranslations("Invoices");
    const g = useTranslations("General");
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showRehabilitationModal, setShowRehabilitationModal] = useState(false);
    const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Cargar facturas
    const fetchInvoices = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/invoices/canceled");
            const data = await response.json();
            setInvoices(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchInvoices();
    }, []);

    const confirmInvoiceRehabilitation = (id: string) => {
        setSelectedInvoiceId(id)
        setShowRehabilitationModal(true);
    }

    const handleInvoiceRehabilitation = async (id: string) => {
        try {
            setLoading(true);
            const response = await fetch('/api/invoices/canceled', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }), // Send as { id: "some-id" } object
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error rehabilitating invoice');
            }
            
            const updatedInvoice = await response.json();
            fetchInvoices(); // Refresh the list
            setShowRehabilitationModal(false);
            setSuccessMessage(t('invoice-rehabilitated'));
        } catch (err: any) {
            setError(err.message || 'Error al rehabilitar la factura');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {t("manage-canceled-invoices")}
            </Typography>

            <Paper sx={{ p: 2 }}>
                <InvoiceList
                    invoices={invoices}
                    onCreateClick={() => { }}
                    onEditClick={() => { }}
                    onDeleteClick={() => { }}
                    showActions={true}
                    showCreateButton={false}
                    showPagination={true}
                    onPayClick={() => { }}
                    onConsultClick={() => { }}
                    onRehabilitationClick={confirmInvoiceRehabilitation}
                    showRehabilitationButton={true}
                />
            </Paper>

            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
                <Alert
                    onClose={() => setError(null)}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>

            <Snackbar
                open={!!successMessage}
                autoHideDuration={4000}
                onClose={() => setSuccessMessage(null)}
            >
                <Alert
                    onClose={() => setSuccessMessage(null)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {successMessage}
                </Alert>
            </Snackbar>

            <Dialog
                open={showRehabilitationModal}
                onClose={() => setShowRehabilitationModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {g("confirmation")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t("sure-rehabilitate-invoice")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowRehabilitationModal(false)}>{g("cancel")}</Button>
                    <Button onClick={() => selectedInvoiceId && handleInvoiceRehabilitation(selectedInvoiceId)}>
                        {t("rehabilitate-invoice")}
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
}
