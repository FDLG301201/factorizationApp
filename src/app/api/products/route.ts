// app/api/products/route.ts
import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  debugger
  const products = await prisma.products.findMany({
    include: {
      providers: true,
      categories: true,
    }
  });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const product = await prisma.products.create({ data });
    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
