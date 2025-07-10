import { prisma } from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../lib/auth';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {

    const invoice_id = (await params).id;

    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const invoiceItems = await prisma.invoice_items.findMany({
      where: {
        invoice_id: Number(invoice_id)
      }
    });
    
    return NextResponse.json(invoiceItems);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
  
