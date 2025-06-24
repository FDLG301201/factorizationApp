import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../lib/auth';

// Obtener empresa por ID (solo si pertenece al usuario autenticado)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const company = await prisma.companies.findUnique({
      where: { 
        id: parseInt(id),
        user_id: user.id
      }
    });

    if (!company) {
      return NextResponse.json({ error: 'Empresa no encontrada o no tienes permisos para acceder' }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Actualizar empresa por ID (solo si pertenece al usuario autenticado)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    // Verificar que la empresa pertenece al usuario
    const company = await prisma.companies.findUnique({
      where: { 
        id: parseInt(id),
        user_id: user.id
      }
    });
    
    if (!company) {
      return NextResponse.json({ error: 'Empresa no encontrada o no tienes permisos para modificarla' }, { status: 404 });
    }
    
    const data = await req.json();
    const updated = await prisma.companies.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        user_id: user.id // Asegurarse de que sigue asociada al mismo usuario
      }
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Eliminar empresa por ID (solo si pertenece al usuario autenticado)
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    // Verificar que la empresa pertenece al usuario
    const company = await prisma.companies.findUnique({
      where: { 
        id: parseInt(id),
        user_id: user.id
      }
    });
    
    if (!company) {
      return NextResponse.json({ error: 'Empresa no encontrada o no tienes permisos para eliminarla' }, { status: 404 });
    }
    
    await prisma.companies.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Empresa eliminada correctamente' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
