import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET: Obtener dirección por ID
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {

  const id = (await params).id;

  try {
    const address = await prisma.addresses.findUnique({
      where: { id: parseInt(id) }
    });

    if (!address) {
      return NextResponse.json({ error: 'Address not found' }, { status: 404 });
    }

    return NextResponse.json(address);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Actualizar dirección
export async function PUT(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {

  const id = (await params).id;

  try {
    const data = await _req.json();
    const updated = await prisma.addresses.update({
      where: { id: parseInt(id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// DELETE: Eliminar dirección
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    await prisma.addresses.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Address deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}