import { prisma } from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener empresa por ID
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const company = await prisma.companies.findUnique({
      where: { id: parseInt(params.id) }
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
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updated = await prisma.companies.update({
      where: { id: parseInt(params.id) },
      data
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar empresa por ID
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.companies.delete({
      where: { id: parseInt(params.id) }
    });

    return NextResponse.json({ message: 'Company deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
