export enum InvoiceStatus {
    Active = 1,
    Canceled = 2,
    Paid = 3,
    Pending = 4,
    Overdue = 5
  }
  
  export const InvoiceStatusLabel: Record<InvoiceStatus, string> = {
    [InvoiceStatus.Active]: 'active',
    [InvoiceStatus.Canceled]: 'canceled',
    [InvoiceStatus.Paid]: 'paid',
    [InvoiceStatus.Pending]: 'pending',
    [InvoiceStatus.Overdue]: 'overdue',
  };
  