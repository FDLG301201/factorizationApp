// app/api/products/[id]/route.ts
import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const category = await prisma.categories.findUnique({
    where: { id: Number(id) },
  });

  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  return NextResponse.json(category);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    const data = await req.json();

    const categoryData = {
      name: data.name
    };

    const updated = await prisma.categories.update({
      where: { id: Number(id) },
      data: categoryData,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    await prisma.categories.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Category deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
