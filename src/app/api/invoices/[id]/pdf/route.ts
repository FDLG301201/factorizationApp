import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { prisma } from '../../../../../../lib/prisma';
import { getCurrentUser } from '../../../../../../lib/auth';
import { formatCurrency } from '../../../../utils/format';

export async function GET(_: Request, context: {params: Promise<{ id: string }>} ) {
  const { id } = await context.params;

  const invoiceId = id;
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    // Obtener todos los datos necesarios de la factura
    const invoice = await prisma.invoices.findUnique({
      where: {
        id: parseInt(invoiceId),
        user_id: user.id // Seguridad: solo facturas del usuario actual
      },
      include: {
        customers: true,
        invoice_statuses: true
      },
    });

    if (!invoice) {
      return NextResponse.json({ error: 'Factura no encontrada' }, { status: 404 });
    }

    // Obtener elementos de la factura
    const invoiceItems = await prisma.invoice_items.findMany({
      where: { invoice_id: parseInt(invoiceId) },
      include: { products: true }
    });

    // Obtener pagos realizados
    const payments = await prisma.invoice_payments.findMany({
      where: { invoice_id: parseInt(invoiceId) },
      orderBy: { date: 'desc' }
    });

    // Calcular saldo pendiente y totales
    const totalPagado = payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
    const saldoPendiente = Number(invoice.amount || 0) - totalPagado;

    // Formatear fechas para mostrar
    const formatDate = (dateString: string | Date) => {
      const date = new Date(dateString);
      // Usar el locale del usuario o defaultear a es-ES
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    };

    // Versión segura de formatCurrency para evitar errores de argumentos
    const formatCurrencySafe = (value: number) => {
      return formatCurrency(value, 'es-ES', 'DOP');
    };

    // Generar HTML para la factura
    // const html = `
    //   <!DOCTYPE html>
    //   <html>
    //   <head>
    //     <meta charset="UTF-8">
    //     <title>Factura #${invoiceId}</title>
    //     <style>
    //       body {
    //         font-family: Arial, sans-serif;
    //         margin: 0;
    //         padding: 20px;
    //         color: #333;
    //       }
    //       .invoice-header {
    //         display: flex;
    //         justify-content: space-between;
    //         margin-bottom: 30px;
    //       }
    //       .company-info {
    //         flex: 1;
    //       }
    //       .invoice-info {
    //         text-align: right;
    //       }
    //       .invoice-title {
    //         font-size: 24px;
    //         font-weight: bold;
    //         margin-bottom: 5px;
    //         color: #2c3e50;
    //       }
    //       .status {
    //         display: inline-block;
    //         padding: 5px 10px;
    //         border-radius: 4px;
    //         font-weight: bold;
    //         margin-bottom: 15px;
    //       }
    //       .status-paid {
    //         background-color: #d4edda;
    //         color: #155724;
    //       }
    //       .status-pending {
    //         background-color: #fff3cd;
    //         color: #856404;
    //       }
    //       .status-overdue {
    //         background-color: #f8d7da;
    //         color: #721c24;
    //       }
    //       table {
    //         width: 100%;
    //         border-collapse: collapse;
    //         margin-bottom: 20px;
    //       }
    //       th, td {
    //         text-align: left;
    //         padding: 10px;
    //         border-bottom: 1px solid #ddd;
    //       }
    //       th {
    //         background-color: #f8f9fa;
    //       }
    //       .totals {
    //         margin-left: auto;
    //         width: 300px;
    //       }
    //       .totals-row {
    //         display: flex;
    //         justify-content: space-between;
    //         padding: 5px 0;
    //       }
    //       .total {
    //         font-weight: bold;
    //         font-size: 18px;
    //         border-top: 2px solid #333;
    //         padding-top: 5px;
    //       }
    //       .customer-info {
    //         margin-bottom: 30px;
    //       }
    //       .section-title {
    //         font-size: 16px;
    //         font-weight: bold;
    //         margin-bottom: 10px;
    //         border-bottom: 1px solid #eee;
    //         padding-bottom: 5px;
    //       }
    //       .footer {
    //         margin-top: 50px;
    //         text-align: center;
    //         font-size: 12px;
    //         color: #777;
    //       }
    //     </style>
    //   </head>
    //   <body>
    //     <div class="invoice-header">
    //       <div class="company-info">
    //         <h1 class="invoice-title">FACTURA</h1>
    //         <p>${invoice.customers?.name || "Cliente"}</p>
    //         ${invoice.customers?.identifier ? `<p>ID: ${invoice.customers.identifier}</p>` : ''}
    //         ${invoice.customers?.email ? `<p>Email: ${invoice.customers.email}</p>` : ''}
    //         ${invoice.customers?.phone ? `<p>Teléfono: ${invoice.customers.phone}</p>` : ''}
    //       </div>
    //       <div class="invoice-info">
    //         <p><strong>Factura #:</strong> ${invoice.id}</p>
    //         <p><strong>Fecha:</strong> ${formatDate(invoice.date)}</p>
    //         <p><strong>Vencimiento:</strong> ${formatDate(invoice.due_date)}</p>
    //         <div class="status status-${invoice.invoice_statuses?.name.toLowerCase()}">
    //           ${invoice.invoice_statuses?.name}
    //         </div>
    //       </div>
    //     </div>

    //     <div class="customer-info">
    //       <h2 class="section-title">Detalles de la Factura</h2>
    //       <!-- Omitiendo notas hasta confirmar el campo correcto -->
    //       <p>Factura #${invoice.id}</p>
    //     </div>

    //     <h2 class="section-title">Productos</h2>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Producto</th>
    //           <th>Descripción</th>
    //           <th>Cantidad</th>
    //           <th>Precio Unitario</th>
    //           <th>Descuento</th>
    //           <th>Total</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         ${invoiceItems.map(item => `
    //           <tr>
    //             <td>${item.products?.name || "Producto"}</td>
    //             <td>${item.products?.description || ""}</td>
    //             <td>${item.quantity}</td>
    //             <td>${formatCurrencySafe(Number(item.unit_price))}</td>
    //             <td>${item.item_discount_amount ? formatCurrencySafe(Number(item.item_discount_amount)) : "RD$0.00"}</td>
    //             <td>${formatCurrencySafe(Number(item.subtotal_after_discount || item.subtotal))}</td>
    //           </tr>
    //         `).join('')}
    //       </tbody>
    //     </table>

    //     <div class="totals">
    //       <div class="totals-row">
    //         <span>Subtotal:</span>
    //         <span>${formatCurrencySafe(Number(invoice.subtotal || 0))}</span>
    //       </div>
    //       ${Number(invoice.discount_amount || 0) > 0 ? `
    //       <div class="totals-row">
    //         <span>Descuento:</span>
    //         <span>${formatCurrencySafe(Number(invoice.discount_amount || 0))}</span>
    //       </div>` : ''}
    //       ${Number(invoice.tax_amount || 0) > 0 ? `
    //       <div class="totals-row">
    //         <span>Impuestos:</span>
    //         <span>${formatCurrencySafe(Number(invoice.tax_amount || 0))}</span>
    //       </div>` : ''}
    //       <div class="totals-row total">
    //         <span>Total:</span>
    //         <span>${formatCurrencySafe(Number(invoice.amount || 0))}</span>
    //       </div>
    //       <div class="totals-row">
    //         <span>Pagado:</span>
    //         <span>${formatCurrencySafe(totalPagado)}</span>
    //       </div>
    //       <div class="totals-row">
    //         <span>Saldo Pendiente:</span>
    //         <span>${formatCurrencySafe(saldoPendiente)}</span>
    //       </div>
    //     </div>

    //     ${payments.length > 0 ? `
    //     <h2 class="section-title">Historial de Pagos</h2>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Fecha</th>
    //           <th>Método</th>
    //           <th>Monto</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         ${payments.map(payment => `
    //           <tr>
    //             <td>${formatDate(payment.date)}</td>
    //             <td>${payment.method || 'Efectivo'}</td>
    //             <td>${formatCurrencySafe(Number(payment.amount))}</td>
    //           </tr>
    //         `).join('')}
    //       </tbody>
    //     </table>
    //     ` : ''}

    //     <div class="footer">
    //       <p>Gracias por su preferencia</p>
    //       <p>Documento generado el ${new Date().toLocaleDateString('es-ES')}</p>
    //     </div>
    //   </body>
    //   </html>
    // `;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Factura #${invoiceId}</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 20px;
      color: #333;
      background: #f4f6f8;
    }
    .invoice-container {
      max-width: 100%;
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .invoice-title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      color: #2c3e50;
      margin-bottom: 20px;
    }
    .invoice-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .status {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 12px;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
    }
    .status-paid { background-color: #28a745; }   /* Verde fuerte */
    .status-pending { background-color: #ffc107; color: #212529; }
    .status-overdue { background-color: #dc3545; }
    .box {
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      text-align: left;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #2c3e50;
      color: white;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .totals {
      width: 100%;
      max-width: 400px;
      margin-left: auto;
    }
    .totals-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
    }
    .total {
      font-weight: bold;
      font-size: 20px;
      border-top: 2px solid #333;
      padding-top: 5px;
      color: #2c3e50;
    }
    .section-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      border-bottom: 2px solid #2c3e50;
      padding-bottom: 5px;
      color: #2c3e50;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <div class="invoice-container">
    <h1 class="invoice-title">Factura #${invoice.id}</h1>

    <div class="invoice-header">
      <div>
        <p><strong>Fecha:</strong> ${formatDate(invoice.date)}</p>
        <p><strong>Vencimiento:</strong> ${formatDate(invoice.due_date)}</p>
      </div>
      <div class="status status-${invoice.invoice_statuses?.name.toLowerCase()}">
        ${invoice.invoice_statuses?.name}
      </div>
    </div>

    <div class="box">
      <h2 class="section-title">Cliente</h2>
      <p><strong>Nombre:</strong> ${invoice.customers?.name || "Cliente"}</p>
      ${invoice.customers?.identifier ? `<p><strong>ID:</strong> ${invoice.customers.identifier}</p>` : ''}
      ${invoice.customers?.email ? `<p><strong>Email:</strong> ${invoice.customers.email}</p>` : ''}
      ${invoice.customers?.phone ? `<p><strong>Teléfono:</strong> ${invoice.customers.phone}</p>` : ''}
    </div>

    <div class="box">
      <h2 class="section-title">Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Descuento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${invoiceItems.map(item => `
            <tr>
              <td>${item.products?.name || "Producto"}</td>
              <td>${item.products?.description || ""}</td>
              <td>${item.quantity}</td>
              <td>${formatCurrencySafe(Number(item.unit_price))}</td>
              <td>${item.item_discount_amount ? formatCurrencySafe(Number(item.item_discount_amount)) : "RD$0.00"}</td>
              <td>${formatCurrencySafe(Number(item.subtotal_after_discount || item.subtotal))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="totals">
      <div class="totals-row">
        <span>Subtotal:</span>
        <span>${formatCurrencySafe(Number(invoice.subtotal || 0))}</span>
      </div>
      ${Number(invoice.discount_amount || 0) > 0 ? `
      <div class="totals-row">
        <span>Descuento:</span>
        <span>${formatCurrencySafe(Number(invoice.discount_amount || 0))}</span>
      </div>` : ''}
      ${Number(invoice.tax_amount || 0) > 0 ? `
      <div class="totals-row">
        <span>Impuestos:</span>
        <span>${formatCurrencySafe(Number(invoice.tax_amount || 0))}</span>
      </div>` : ''}
      <div class="totals-row total">
        <span>Total:</span>
        <span>${formatCurrencySafe(Number(invoice.amount || 0))}</span>
      </div>
      <div class="totals-row">
        <span>Pagado:</span>
        <span>${formatCurrencySafe(totalPagado)}</span>
      </div>
      <div class="totals-row">
        <span>Saldo Pendiente:</span>
        <span>${formatCurrencySafe(saldoPendiente)}</span>
      </div>
    </div>

    ${payments.length > 0 ? `
    <div class="box">
      <h2 class="section-title">Historial de Pagos</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Método</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          ${payments.map(payment => `
            <tr>
              <td>${formatDate(payment.date)}</td>
              <td>${payment.method || 'Efectivo'}</td>
              <td>${formatCurrencySafe(Number(payment.amount))}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    <div class="footer">
      <p>Gracias por su preferencia</p>
      <p>Documento generado el ${new Date().toLocaleDateString('es-ES')}</p>
    </div>
  </div>
</body>
</html>
`;


    // Crear el PDF con puppeteer
    const browser = await puppeteer.launch({
      headless: true // Usar el modo headless estándar para compatibilidad
    });
    const page = await browser.newPage();
    await page.setContent(html);

    // Generar el PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });

    await browser.close();

    // Devolver el PDF como respuesta
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=factura_${invoiceId}.pdf`,
      },
    });

  } catch (error: any) {
    console.error('Error al generar PDF:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
