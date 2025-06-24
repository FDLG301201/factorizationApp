// app/api/customers/[id]/route.ts
import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../lib/auth';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const customer = await prisma.customers.findUnique({
      where: { 
        id: Number(id),
        user_id: user.id
      },
    });

    if (!customer) {
      return NextResponse.json({ error: 'Cliente no encontrado o no tienes permisos para acceder' }, { status: 404 });
    }

    return NextResponse.json(customer);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    // Verificar que el cliente pertenece al usuario
    const customer = await prisma.customers.findUnique({
      where: { 
        id: Number(id),
        user_id: user.id
      },
    });
    
    if (!customer) {
      return NextResponse.json({ error: 'Cliente no encontrado o no tienes permisos para modificarlo' }, { status: 404 });
    }
    
    const data = await req.json();
    const updatedCustomer = await prisma.customers.update({
      where: { id: Number(id) },
      data: {
        ...data,
        user_id: user.id // Asegurarse de que sigue asociado al mismo usuario
      },
    });

    return NextResponse.json(updatedCustomer);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    // Verificar que el cliente pertenece al usuario
    const customer = await prisma.customers.findUnique({
      where: { 
        id: Number(id),
        user_id: user.id
      },
    });
    
    if (!customer) {
      return NextResponse.json({ error: 'Cliente no encontrado o no tienes permisos para eliminarlo' }, { status: 404 });
    }
    
    await prisma.customers.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Cliente eliminado correctamente' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
