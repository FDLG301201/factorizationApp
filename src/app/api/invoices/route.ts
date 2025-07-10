import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';
import { InvoiceStatus } from "../../constants/invoice-statuses.enum";
import { updateInventory } from '../../../../lib/inventory';

// Obtener todas las facturas del usuario autenticado
export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const invoices = await prisma.invoices.findMany({
      where: {
        user_id: user.id,
        status_id: {
          not: InvoiceStatus.Canceled
        }
      },
      include: {
        customers: true, // Incluye detalles del cliente
        invoice_statuses: true,
      },
    });
    
    return NextResponse.json(invoices);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear una nueva factura asociada al usuario autenticado
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();
    
    // Verificamos si hay elementos en la solicitud
    let { invoice_items, ...invoiceData } = data;
    
    // const calculateTaxAmount = (data.tax_amount * data.subtotal / 100);
    // const calculateDiscountAmount = (data.discount_amount * data.subtotal / 100);

    const invoiceDataRequest = {
      customer_id: data.customer_id,
      amount: data.amount,
      date: data.date,
      due_date: data.due_date,
      status_id: data.status_id,
      subtotal: data.subtotal,
      tax_amount: data.tax_amount,
      discount_amount: data.discount_amount,
      user_id: user.id
    }

    // Creamos la factura sin los elementos
    const invoice = await prisma.invoices.create({data: invoiceDataRequest});
    
    const invoiceItemsRequest = invoice_items.map((item:any) => ({
        "invoice_id": invoice.id,
        "product_id": item.inventory_id,
        "quantity": item.quantity,
        "unit_price": item.unit_price,
        "item_discount_value": item.item_discount_value,
        "item_discount_amount": item.item_discount_amount,
        "subtotal_after_discount": item.subtotal_after_discount
    }));

    const invoiceItems = await prisma.invoice_items.createMany({data: invoiceItemsRequest});
    
    // Actualizar inventario para cada ítem de factura creado
    await Promise.all(
      invoice_items.map(async (item:any) => {
        await updateInventory(item.inventory_id, item.quantity);
      })
    );

    return NextResponse.json(invoice, { status: 201 });
  } catch (error: any) {
    console.error('Error al crear factura:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Función auxiliar ahora importada desde lib/inventory.ts
