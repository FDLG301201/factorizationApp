// app/api/customers/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';


export async function GET() {
  const customers = await prisma.customers.findMany({
    include: {
      companies: true,
    }
  });
  return NextResponse.json(customers);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newCustomer = await prisma.customers.create({ data });
    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
