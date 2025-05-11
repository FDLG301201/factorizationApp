import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener todos los proveedores
export async function GET() {
  try {
    const providers = await prisma.providers.findMany();
    return NextResponse.json(providers);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear un nuevo proveedor
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const provider = await prisma.providers.create({ data });
    return NextResponse.json(provider, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
