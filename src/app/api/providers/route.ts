import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';

// Obtener todos los proveedores del usuario autenticado
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const providers = await prisma.providers.findMany({
      where: {
        user_id: user.id
      }
    });
    
    return NextResponse.json(providers);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear un nuevo proveedor asociado al usuario autenticado
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();
    const provider = await prisma.providers.create({ 
      data: {
        ...data,
        user_id: user.id
      }
    });
    
    return NextResponse.json(provider, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
