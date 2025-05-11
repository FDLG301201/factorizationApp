import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener dirección por ID
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const address = await prisma.addresses.findUnique({
      where: { id: parseInt(params.id) }
    });

    if (!address) {
      return NextResponse.json({ error: 'Address not found' }, { status: 404 });
    }

    return NextResponse.json(address);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Actualizar dirección
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updated = await prisma.addresses.update({
      where: { id: parseInt(params.id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar dirección
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.addresses.delete({
      where: { id: parseInt(params.id) }
    });

    return NextResponse.json({ message: 'Address deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
