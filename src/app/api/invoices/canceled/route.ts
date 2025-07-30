import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../lib/auth';
import { InvoiceStatus } from "../../../constants/invoice-statuses.enum";

// Obtener todas las facturas del usuario autenticado
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const canceledInvoices = await prisma.invoices.findMany({
      where: {
        user_id: user.id,
        status_id: InvoiceStatus.Canceled
      },
      include: {
        customers: true, // Incluye detalles del cliente
        invoice_statuses: true,
      },
    });
    
    return NextResponse.json(canceledInvoices);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await req.json();
    
    // Update the invoice status to Pending
    const updatedInvoice = await prisma.invoices.update({ 
      where: { 
        id: Number(id),
        user_id: user.id // Ensure the invoice belongs to the current user
      }, 
      data: {
        status_id: InvoiceStatus.Pending, // Assuming Pending is the correct status ID
      },
      include: {
        customers: true,
        invoice_statuses: true
      }
    });

    return NextResponse.json(updatedInvoice);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}