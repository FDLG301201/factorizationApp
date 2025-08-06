import { type NextRequest, NextResponse } from "next/server"
import type { DateRange, SalesData } from "@/app/types/reports"
import { prisma } from '../../../../../lib/prisma';


export async function POST(request: NextRequest) {
    try {

        const dateRange: DateRange = await request.json()

        const { startDate, endDate } = dateRange
        
        // Ajustar fechas para incluir todo el día de endDate
        const adjustedStartDate = new Date(startDate);
        const adjustedEndDate = new Date(endDate);
        adjustedEndDate.setHours(23, 59, 59, 999);

        // Obtener ventas del período actual
        const currentPeriodInvoices = await prisma.invoices.findMany({
            where: {
                date: {
                    gte: adjustedStartDate,
                    lte: adjustedEndDate,
                },
            },
            include: {
                customers: true,
            },
            orderBy: {
                date: "desc",
            },
        })

        console.log('currentPeriodInvoices',currentPeriodInvoices);

        // Calcular período anterior para comparación
        const periodDiff = adjustedEndDate.getTime() - adjustedStartDate.getTime();
        const previousStartDate = new Date(adjustedStartDate.getTime() - periodDiff - 1);
        const previousEndDate = new Date(adjustedStartDate.getTime() - 1);

        const previousPeriodInvoices = await prisma.invoices.findMany({
            where: {
                date: {
                    gte: previousStartDate,
                    lte: previousEndDate,
                },
            },
            include: {
                customers: true,
            },
        })

        // Calcular métricas actuales
        const totalSales = currentPeriodInvoices.reduce((sum: number, invoice: any) => sum + invoice.amount, 0)
        const invoicesCount = currentPeriodInvoices.length
        const daysDiff = Math.ceil((adjustedEndDate.getTime() - adjustedStartDate.getTime()) / (1000 * 60 * 60 * 24)) || 1
        const averageDaily = totalSales / daysDiff

        // Calcular métricas del período anterior
        const previousTotalSales = previousPeriodInvoices.reduce((sum: number, invoice: any) => sum + invoice.amount, 0)
        const previousInvoicesCount = previousPeriodInvoices.length
        const previousAverageDaily = previousTotalSales / daysDiff

        // Calcular crecimiento
        const salesGrowth = previousTotalSales > 0 ? ((totalSales - previousTotalSales) / previousTotalSales) * 100 : 0
        const invoicesGrowth =
            previousInvoicesCount > 0 ? ((invoicesCount - previousInvoicesCount) / previousInvoicesCount) * 100 : 0
        const averageGrowth =
            previousAverageDaily > 0 ? ((averageDaily - previousAverageDaily) / previousAverageDaily) * 100 : 0

        // Agrupar ventas por día
        const dailySalesMap = new Map<string, { sales: number; invoices: number }>()

        currentPeriodInvoices.forEach((invoice: any) => {
            const dateKey = invoice.date.toISOString().split("T")[0]
            const existing = dailySalesMap.get(dateKey) || { sales: 0, invoices: 0 }
            dailySalesMap.set(dateKey, {
                sales: existing.sales + invoice.amount,
                invoices: existing.invoices + 1,
            })
        })

        const dailySales = Array.from(dailySalesMap.entries())
            .map(([date, data]) => ({
                date,
                sales: data.sales,
                invoices: data.invoices,
            }))
            .sort((a, b) => a.date.localeCompare(b.date))

        // Ventas por categoría (ejemplo - ajustar según tu modelo de datos)
        const items = await prisma.invoice_items.findMany({
            where: {
                invoices: {
                    date: {
                        gte: adjustedStartDate,
                        lte: adjustedEndDate,
                    },
                },
            },
            include: {
                products: true, // incluimos los productos para tener el category_id
            },
        });

        // Agrupamos por category_id
        const salesByCategory = items.reduce((acc, item) => {
            const catId = item.products?.category_id ?? 'unknown';
            if (!acc[catId]) {
                acc[catId] = {
                    category_id: catId,
                    subtotal_sum: 0,
                    item_count: 0,
                };
            }
            acc[catId].subtotal_sum += Number(item.subtotal);
            acc[catId].item_count += 1;
            return acc;
        }, {} as Record<string, { category_id: number | string; subtotal_sum: number; item_count: number }>);

        const salesByCategoryArray = Object.values(salesByCategory);

        const categoriesData = await Promise.all(
            salesByCategoryArray.map(async (item: any) => {
                const category = await prisma.categories.findUnique({
                    where: { id: typeof item.category_id === 'string' ? parseInt(item.category_id) : item.category_id },
                });
                return {
                    name: category?.name || "Sin categoría",
                    value: item.subtotal_sum || 0,
                };
            })
        );


        // Formatear facturas para la respuesta
        const invoices = currentPeriodInvoices.map((invoice: any) => ({
            id: invoice.id,
            number: invoice.number,
            date: invoice.date.toISOString(),
            customerName: invoice.customers?.name,
            amount: invoice.amount,
            status: invoice.status,
        }))

        const salesData: SalesData = {
            totalSales,
            invoicesCount,
            averageDaily,
            salesGrowth,
            invoicesGrowth,
            averageGrowth,
            dailySales,
            salesByCategory: categoriesData,
            invoices,
        }

        return NextResponse.json(salesData)

    } catch (error) {
        console.error("Error fetching sales data:", error)
        return NextResponse.json({ error: "Failed to fetch sales data" }, { status: 500 })
    }
}
