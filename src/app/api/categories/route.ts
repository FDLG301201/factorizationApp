import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener todas las categorias
export async function GET() {
  try {
    const categories = await prisma.categories.findMany();
    return NextResponse.json(categories);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva categoria
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const category = await prisma.categories.create({ data });
    return NextResponse.json(category, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
