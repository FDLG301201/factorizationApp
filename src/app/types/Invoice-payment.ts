export type InvoicePayment = {
    id: number;
    invoice_id: number;
    amount: string; // money llega como string
    date: string;
    method?: string;
    notes?: string;
  };
  