import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { getCurrentUser } from '../../../../lib/auth';
import { updateInventory } from '../../../../lib/inventory';

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Usuario no autenticado' },
        { status: 401 }
      );
    }
    
    const body = await request.json();

    // Crear o encontrar un cliente "Express" para facturas rápidas
    let customer = await prisma.customers.findFirst({
      where: {
        user_id: user.id,
        name: body.customer_name || 'Cliente Express'
      }
    });

    if (!customer) {
      customer = await prisma.customers.create({
        data: {
          name: body.customer_name || 'Cliente Express',
          identifier: `EXP-${Date.now()}`,
          user_id: user.id
        }
      });
    }

    const calculateTotal = (body.subtotal + body.tax_amount - body.discount_amount);

    const requestInvoice = {
        user_id: user.id,
        customer_id: customer.id,
        amount: calculateTotal,
        date: new Date(),
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
        status_id: 4, // Asumiendo que 1 es el estado "Pendiente"
        tax_amount: body.tax_amount,
        discount_amount: body.discount_amount,
        subtotal: body.subtotal,
    }

    // Crear la factura express
    const invoice = await prisma.invoices.create({data: requestInvoice});

    const invoiceItemsRequest = body.invoice_items.map((item:any) => ({
      "invoice_id": invoice.id,
      "product_id": item.inventory_id,
      "quantity": item.quantity,
      "unit_price": item.unit_price,
      "item_discount_value": item.item_discount_value,
      "item_discount_amount": item.item_discount_amount,
      "subtotal_after_discount": item.subtotal_after_discount
  }));

    for (const item of body.invoice_items) {
      updateInventory(item.product_id, item.quantity);
    }

    return NextResponse.json({
      success: true,
      invoice
    });

  } catch (error) {
    console.error('Error creating express invoice:', error);
    return NextResponse.json(
      { success: false, error: 'Error al crear la factura express' },
      { status: 500 }
    );
  }
}
