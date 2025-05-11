import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener todas las direcciones
export async function GET() {
  try {
    const addresses = await prisma.addresses.findMany();
    return NextResponse.json(addresses);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva dirección
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const address = await prisma.addresses.create({ data });
    return NextResponse.json(address, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
