import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener un proveedor por ID
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const provider = await prisma.providers.findUnique({
      where: { id: parseInt(params.id) }
    });

    if (!provider) {
      return NextResponse.json({ error: 'Provider not found' }, { status: 404 });
    }

    return NextResponse.json(provider);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Actualizar un proveedor por ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updated = await prisma.providers.update({
      where: { id: parseInt(params.id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar un proveedor por ID
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.providers.delete({
      where: { id: parseInt(params.id) }
    });

    return NextResponse.json({ message: 'Provider deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
