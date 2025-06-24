import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';

// Obtener todas las facturas del usuario autenticado
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const invoices = await prisma.invoices.findMany({
      where: {
        user_id: user.id
      },
      include: {
        customers: true, // Incluye detalles del cliente
        invoice_statuses: true,
      },
    });
    
    return NextResponse.json(invoices);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva factura asociada al usuario autenticado
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();

    const invoice = await prisma.invoices.create({
      data: {
        ...data,
        user_id: user.id
      },
    });

    return NextResponse.json(invoice, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
