// app/api/products/[id]/route.ts
import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const product = await prisma.products.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    const data = await req.json();

    const productData = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
      description: data.description || "",
      category_id: data.category_id ? Number(data.category_id) : undefined,
      provider_id: data.provider_id ? Number(data.provider_id) : undefined,
      custom_price: data.customPrice !== undefined ? Number(data.customPrice) : null
    };

    const updated = await prisma.products.update({
      where: { id: Number(id) },
      data: productData,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    await prisma.products.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Product deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
