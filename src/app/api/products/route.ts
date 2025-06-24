// app/api/products/route.ts
import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const products = await prisma.products.findMany({
      where: {
        user_id: user.id
      },
      include: {
        providers: true,
        categories: true,
      }
    });
    
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();

    // Ensuring numeric values for price and quantity
    const productData = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
      description: data.description || "",
      category_id: Number(data.category_id),
      provider_id: Number(data.provider_id),
      custom_price: data.customPrice !== undefined ? Number(data.customPrice) : null,
      user_id: user.id // Asociar el producto al usuario autenticado
    };

    const product = await prisma.products.create({ data: productData });
    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
