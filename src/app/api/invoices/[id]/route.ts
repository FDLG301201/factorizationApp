import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Obtener una factura por ID
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const invoice = await prisma.invoices.findUnique({
      where: { id: parseInt(id) },
      include: { customers: true },
    });

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    return NextResponse.json(invoice);
  } catch (error: any) {
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

// Eliminar una factura
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    await prisma.invoices.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: 'Invoice deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
