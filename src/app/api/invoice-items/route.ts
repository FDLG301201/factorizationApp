import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth';

export async function GET() {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    // Obtener todos los elementos de factura del usuario
    const invoiceItems = await prisma.invoice_items.findMany({
      where: {
        invoices: {
          user_id: user.id,
        }
      }
    });
    
    return NextResponse.json(invoiceItems);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Crear nuevos elementos de factura
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    
    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }
    
    const data = await req.json();
    
    // Si se envía un array de elementos, crearlos en batch y actualizar inventario
    if (Array.isArray(data)) {
      // Primero creamos todos los items
      const items = await Promise.all(
        data.map(async (item) => {
          const createdItem = await prisma.invoice_items.create({
            data: item,
          });
          
          // Actualizamos el inventario para cada item
          await updateInventory(item.product_id, item.quantity);
          
          return createdItem;
        })
      );
      return NextResponse.json(items, { status: 201 });
    } 
    // Si se envía un solo elemento
    else {
      const item = await prisma.invoice_items.create({
        data: data
      });
      
      // Actualizamos el inventario para este único item
      await updateInventory(data.product_id, data.quantity);
      
      return NextResponse.json(item, { status: 201 });
    }
  } catch (error: any) {
    console.error("Error al crear elementos de factura:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Función auxiliar para actualizar el inventario
async function updateInventory(productId: number, quantity: number) {
  try {
    // Obtener el producto actual
    const product = await prisma.products.findUnique({
      where: { id: productId }
    });
    
    if (!product) {
      console.error(`Producto con ID ${productId} no encontrado`);
      return;
    }
    
    // Calcular la nueva cantidad (restando lo vendido)
    const currentQuantity = product.quantity || 0;
    const newQuantity = Math.max(0, currentQuantity - quantity);
    
    // Actualizar el producto
    await prisma.products.update({
      where: { id: productId },
      data: { quantity: newQuantity }
    });
    
  } catch (error) {
    console.error(`Error al actualizar inventario para producto ${productId}:`, error);
  }
}
  