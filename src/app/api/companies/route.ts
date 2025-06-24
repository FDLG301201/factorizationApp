import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';

// Obtener todas las empresas del usuario autenticado
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const companies = await prisma.companies.findMany({
      where: {
        user_id: user.id
      }
    });
    
    return NextResponse.json(companies);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva empresa asociada al usuario autenticado
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();
    const company = await prisma.companies.create({ 
      data: {
        ...data,
        user_id: user.id
      }
    });
    
    return NextResponse.json(company, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
