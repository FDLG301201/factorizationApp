import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { InvoiceStatus } from "@/app/constants/invoice-statuses.enum";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { invoice_id, amount, method, notes } = body;

    if (!invoice_id || !amount) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    // Crear abono
    const payment = await prisma.invoice_payments.create({
      data: {
        invoice_id,
        amount,
        method,
        notes,
      },
    });

    // Calcular total abonado
    const pagos = await prisma.invoice_payments.aggregate({
      where: { invoice_id },
      _sum: { amount: true },
    });

    // Convertir el resultado de la agregación a número para evitar problemas con el tipo Decimal
    const totalAbonado = Number(pagos._sum.amount || 0);

    // Obtener total de la factura
    const factura = await prisma.invoices.findUnique({
      where: { id: invoice_id },
      select: { amount: true },
    });

    if (!factura) {
      return NextResponse.json({ error: "Factura no encontrada" }, { status: 404 });
    }
    
    // Verificar estado
    let nuevoEstado = InvoiceStatus.Pending; // Estado pendiente por defecto

    // Usar un valor predeterminado de 0 si factura.amount es null
    // Convertimos a Number para asegurar compatibilidad de tipos (evitar problemas con Decimal)
    const facturaAmount = Number(factura.amount || 0);
    
    if (totalAbonado >= facturaAmount) {
      nuevoEstado = InvoiceStatus.Paid; // Factura completamente pagada
    } else if (totalAbonado > 0) {
      // Si hay un pago parcial pero no está completamente pagada
      // Como no hay un estado específico para pagos parciales, podemos mantenerlo como pendiente
      // o considerar crear un nuevo estado en el sistema
      nuevoEstado = InvoiceStatus.Pending;
    }

    // Actualizar estado de factura
    await prisma.invoices.update({
      where: { id: invoice_id },
      data: {
        status_id: nuevoEstado,
        payment_date: nuevoEstado === InvoiceStatus.Paid ? new Date() : null,
      },
    });

    return NextResponse.json(payment, { status: 201 });

  } catch (error) {
    console.error("Error al crear abono:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
