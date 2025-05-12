import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Obtener un proveedor por ID
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const provider = await prisma.providers.findUnique({
      where: { id: parseInt(id) }
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
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    const data = await req.json();
    const updated = await prisma.providers.update({
      where: { id: parseInt(id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar un proveedor por ID
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    await prisma.providers.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Provider deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
