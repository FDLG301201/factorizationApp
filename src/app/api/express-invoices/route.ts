import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { getCurrentUser } from '../../../../lib/auth';

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
    
    const {
      customer_name,
      items,
      subtotal,
      discount_percent,
      discount_amount,
      tax_percent,
      tax_amount,
      total
    } = body;

    // Crear o encontrar un cliente "Express" para facturas rápidas
    let customer = await prisma.customers.findFirst({
      where: {
        user_id: user.id,
        name: customer_name || 'Cliente Express'
      }
    });

    if (!customer) {
      customer = await prisma.customers.create({
        data: {
          name: customer_name || 'Cliente Express',
          identifier: `EXP-${Date.now()}`,
          user_id: user.id
        }
      });
    }

    // Crear la factura express
    const invoice = await prisma.invoices.create({
      data: {
        user_id: user.id,
        customer_id: customer.id,
        amount: total,
        date: new Date(),
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
        status_id: 1, // Asumiendo que 1 es el estado "Pendiente"
        invoice_items: {
          create: items.map((item: any) => ({
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            item_custom_price: item.unit_price
          }))
        }
      },
      include: {
        invoice_items: {
          include: {
            products: true
          }
        },
        customers: true,
        invoice_statuses: true
      }
    });

    // Actualizar el inventario de los productos
    for (const item of items) {
      await prisma.products.update({
        where: { id: item.product_id },
        data: {
          quantity: {
            decrement: item.quantity
          }
        }
      });
    }

    return NextResponse.json({
      success: true,
      invoice: {
        ...invoice,
        customer_name: invoice.customers?.name,
        customer_identifier: invoice.customers?.identifier,
        customer_email: invoice.customers?.email,
        status_name: invoice.invoice_statuses?.name
      }
    });

  } catch (error) {
    console.error('Error creating express invoice:', error);
    return NextResponse.json(
      { success: false, error: 'Error al crear la factura express' },
      { status: 500 }
    );
  }
}
