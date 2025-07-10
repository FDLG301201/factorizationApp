import { prisma } from './prisma';

/**
 * Actualiza la cantidad de un producto en el inventario tras una venta
 * @param productId ID del producto a actualizar
 * @param quantity Cantidad vendida que se restará del inventario
 */
export async function updateInventory(productId: number, quantity: number) {
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
