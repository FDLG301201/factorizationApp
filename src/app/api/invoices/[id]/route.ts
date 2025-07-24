import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../lib/auth';

// Obtener una factura por ID con todos sus detalles
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const user = await getCurrentUser();
  
  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    // Obtener factura con cliente y estado
    const invoice = await prisma.invoices.findUnique({
      where: { 
        id: parseInt(id),
        user_id: user.id // Seguridad: solo facturas del usuario actual
      },
      include: { 
        customers: true,
        invoice_statuses: true
      },
    });

    if (!invoice) {
      return NextResponse.json({ error: 'Factura no encontrada' }, { status: 404 });
    }
    
    // Obtener elementos de la factura con detalles de productos
    const invoiceItems = await prisma.invoice_items.findMany({
      where: { invoice_id: parseInt(id) },
      include: { products: true }
    });
    
    // Obtener pagos realizados para esta factura
    const payments = await prisma.invoice_payments.findMany({
      where: { invoice_id: parseInt(id) },
      orderBy: { date: 'desc' }
    });
    
    // Calcular saldo pendiente
    const totalPagado = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
    const saldoPendiente = Number(invoice.amount || 0) - totalPagado;
    
    // Construir respuesta completa
    const invoiceDetails = {
      ...invoice,
      items: invoiceItems,
      payments: payments,
      payment_summary: {
        total_invoice: Number(invoice.amount || 0),
        total_paid: totalPagado,
        balance_due: saldoPendiente
      }
    };

    return NextResponse.json(invoiceDetails);
  } catch (error: any) {
    console.error('Error al obtener detalles de factura:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Actualizar una factura
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const data = await req.json();

    const updated = await prisma.invoices.update({
      where: { id: parseInt(id) },
      data,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}


//Eliminar una factura significa cambiar su estado a cancelada
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    await prisma.invoices.update({
      where: { id: parseInt(id) },
      data: { status_id: 2 },
    });

    return NextResponse.json({ message: 'Invoice canceled' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar una factura
// export async function DELETE(
//   _req: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const id = (await params).id;

//   try {
//     await prisma.invoices.delete({
//       where: { id: parseInt(id) },
//     });

//     return NextResponse.json({ message: 'Invoice deleted' });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
