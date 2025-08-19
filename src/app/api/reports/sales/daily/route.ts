import { NextRequest, NextResponse } from "next/server";
import { prisma } from '../../../../../../lib/prisma';

// Request body for daily report
interface DailyRequestBody {
  // Date string in YYYY-MM-DD (no time)
  date: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DailyRequestBody = await request.json();
    const { date } = body || {} as DailyRequestBody;

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: "Invalid or missing 'date'. Expected format YYYY-MM-DD." }, { status: 400 });
    }

    // Build a Date object at UTC midnight for the given calendar day
    // Since the DB column is DATE, Prisma/Postgres will compare by date part only
    const targetDate = new Date(`${date}T00:00:00.000Z`);

    // Current day invoices (exact date match)
    const currentDayInvoices = await prisma.invoices.findMany({
      where: {
        date: {
          equals: targetDate,
        },
      },
      include: {
        customers: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Previous day range for growth comparison
    const targetDateLocal = new Date(`${date}T00:00:00.000Z`);
    const prevDayLocal = new Date(targetDateLocal);
    prevDayLocal.setUTCDate(prevDayLocal.getUTCDate() - 1);

    const previousDayInvoices = await prisma.invoices.findMany({
      where: {
        date: {
          equals: prevDayLocal,
        },
      },
    });

    // Metric calculations
    const totalSales = currentDayInvoices.reduce((sum: number, inv: any) => sum + (Number(inv.amount) || 0), 0);
    const invoicesCount = currentDayInvoices.length;

    // For single day, averageDaily equals totalSales
    const averageDaily = totalSales;

    const previousTotalSales = previousDayInvoices.reduce((sum: number, inv: any) => sum + (Number(inv.amount) || 0), 0);
    const previousInvoicesCount = previousDayInvoices.length;
    const previousAverageDaily = previousTotalSales; // also single day

    const salesGrowth = previousTotalSales > 0 ? ((totalSales - previousTotalSales) / previousTotalSales) * 100 : (totalSales > 0 ? 100 : 0);
    const invoicesGrowth = previousInvoicesCount > 0 ? ((invoicesCount - previousInvoicesCount) / previousInvoicesCount) * 100 : (invoicesCount > 0 ? 100 : 0);
    const averageGrowth = previousAverageDaily > 0 ? ((averageDaily - previousAverageDaily) / previousAverageDaily) * 100 : (averageDaily > 0 ? 100 : 0);

    // Group by day (single entry)
    const dailySales = [
      {
        date, // keep YYYY-MM-DD
        sales: totalSales,
        invoices: invoicesCount,
      },
    ];

    // Sales by category (join through invoice_items -> products -> categories)
    const items = await prisma.invoice_items.findMany({
      where: {
        invoices: {
          date: { equals: targetDate },
        },
      },
      include: {
        products: {
          include: { categories: true },
        },
      },
    });

    const salesByCategory = items.reduce((acc, item) => {
      const categoryId = item.products?.category_id ?? 'unknown';
      const categoryName = item.products?.categories?.name ?? 'Sin categoría';
      if (!acc[categoryId]) {
        acc[categoryId] = {
          category_id: categoryId,
          category_name: categoryName,
          subtotal_sum: 0,
          item_count: 0,
        };
      }
      acc[categoryId].subtotal_sum += Number(item.subtotal) || 0;
      acc[categoryId].item_count += 1;
      return acc;
    }, {} as Record<string, { category_id: number | string; category_name: string; subtotal_sum: number; item_count: number }>);

    const categoriesData = Object.values(salesByCategory).map((entry) => ({
      name: entry.category_name,
      value: entry.subtotal_sum,
    }));

    console.log('LLEGARON LO MONTRO MEN', currentDayInvoices);
    
    // Format invoices for response
    const invoices = currentDayInvoices.map((invoice: any) => ({
      id: invoice.id,
      number: invoice.number,
      date: invoice.date instanceof Date ? invoice.date.toISOString() : String(invoice.date),
      customerName: invoice.customers?.name || 'Cliente no especificado',
      amount: Number(invoice.amount) || 0,
      status: invoice.status,
    }));

    return NextResponse.json({
      totalSales,
      invoicesCount,
      averageDaily,
      salesGrowth,
      invoicesGrowth,
      averageGrowth,
      dailySales,
      salesByCategory: categoriesData,
      invoices,
    });
  } catch (error) {
    console.error("Error fetching daily sales data:", error);
    return NextResponse.json({
      error: "Failed to fetch daily sales data",
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
