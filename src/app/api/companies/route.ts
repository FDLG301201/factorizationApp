import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

// Obtener todas las empresas
export async function GET() {
  try {
    const companies = await prisma.companies.findMany();
    return NextResponse.json(companies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva empresa
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const company = await prisma.companies.create({ data });
    return NextResponse.json(company, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
