import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener todas las facturas
export async function GET() {
  try {
    const invoices = await prisma.invoices.findMany({
      include: {
        customers: true, // Incluye detalles del cliente
      },
    });
    return NextResponse.json(invoices);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva factura
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const invoice = await prisma.invoices.create({
      data,
    });

    return NextResponse.json(invoice, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
