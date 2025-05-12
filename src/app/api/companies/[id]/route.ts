import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Obtener empresa por ID
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    const company = await prisma.companies.findUnique({
      where: { id: parseInt(id) }
    });

    if (!company) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Actualizar empresa por ID
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    const data = await req.json();
    const updated = await prisma.companies.update({
      where: { id: parseInt(id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar empresa por ID
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    await prisma.companies.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Company deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
