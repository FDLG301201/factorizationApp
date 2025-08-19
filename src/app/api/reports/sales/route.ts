import { type NextRequest, NextResponse } from "next/server"
import type { DateRange, SalesData } from "@/app/types/reports"
import { prisma } from '../../../../../lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const dateRange: DateRange = await request.json()
        const { startDate, endDate, period } = dateRange
        
        // Crear fechas ajustadas correctamente
        const adjustedStartDate = new Date(startDate);
        adjustedStartDate.setHours(0, 0, 0, 0); // Inicio del día
        
        const adjustedEndDate = new Date(endDate);
        // Para período "today", usar el mismo día hasta las 23:59:59
        if (period === "today") {
            adjustedEndDate.setHours(23, 59, 59, 999);
        } else {
            // Para otros períodos, usar el final del día seleccionado
            adjustedEndDate.setHours(23, 59, 59, 999);
        }

        console.log('Filtering from:', adjustedStartDate, 'to:', adjustedEndDate);
        console.log('Period:', period);

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

        console.log('Found invoices:', currentPeriodInvoices.length);
        console.log('Invoice dates:', currentPeriodInvoices.map(inv => inv.date));

        // Calcular período anterior para comparación
        const periodDiff = adjustedEndDate.getTime() - adjustedStartDate.getTime();
        const previousStartDate = new Date(adjustedStartDate.getTime() - periodDiff - 24 * 60 * 60 * 1000); // Restar un día adicional
        const previousEndDate = new Date(adjustedStartDate.getTime() - 24 * 60 * 60 * 1000); // Un día antes del inicio actual
        previousEndDate.setHours(23, 59, 59, 999);

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

        console.log('Previous period invoices:', previousPeriodInvoices.length);

        // Calcular métricas actuales
        const totalSales = currentPeriodInvoices.reduce((sum: number, invoice: any) => {
            const amount = Number(invoice.amount) || 0;
            return sum + amount;
        }, 0);

        const invoicesCount = currentPeriodInvoices.length
        
        // Calcular días correctamente
        const daysDiff = Math.max(1, Math.ceil((adjustedEndDate.getTime() - adjustedStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1);
        const averageDaily = totalSales / daysDiff

        // Calcular métricas del período anterior
        const previousTotalSales = previousPeriodInvoices.reduce((sum: number, invoice: any) => {
            const amount = Number(invoice.amount) || 0;
            return sum + amount;
        }, 0);

        const previousInvoicesCount = previousPeriodInvoices.length
        const previousDaysDiff = Math.max(1, Math.ceil((previousEndDate.getTime() - previousStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1);
        const previousAverageDaily = previousTotalSales / previousDaysDiff

        // Calcular crecimiento
        const salesGrowth = previousTotalSales > 0 ? ((totalSales - previousTotalSales) / previousTotalSales) * 100 : (totalSales > 0 ? 100 : 0)
        const invoicesGrowth = previousInvoicesCount > 0 ? ((invoicesCount - previousInvoicesCount) / previousInvoicesCount) * 100 : (invoicesCount > 0 ? 100 : 0)
        const averageGrowth = previousAverageDaily > 0 ? ((averageDaily - previousAverageDaily) / previousAverageDaily) * 100 : (averageDaily > 0 ? 100 : 0)

        console.log('Calculated metrics:', {
            totalSales,
            invoicesCount,
            averageDaily,
            salesGrowth,
            invoicesGrowth,
            averageGrowth
        });

        // Agrupar ventas por día
        const dailySalesMap = new Map<string, { sales: number; invoices: number }>()

        currentPeriodInvoices.forEach((invoice: any) => {
            const dateKey = invoice.date.toISOString().split("T")[0]
            const existing = dailySalesMap.get(dateKey) || { sales: 0, invoices: 0 }
            const amount = Number(invoice.amount) || 0;
            dailySalesMap.set(dateKey, {
                sales: existing.sales + amount,
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

        console.log('Daily sales:', dailySales);

        // Ventas por categoría
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
                products: {
                    include: {
                        categories: true,
                    }
                },
            },
        });

        // Agrupamos por category_id
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

        const categoriesData = Object.values(salesByCategory).map(item => ({
            name: item.category_name,
            value: item.subtotal_sum,
        }));

        console.log('Categories data:', categoriesData);

        // Formatear facturas para la respuesta
        const invoices = currentPeriodInvoices.map((invoice: any) => ({
            id: invoice.id,
            number: invoice.number,
            date: invoice.date.toISOString(),
            customerName: invoice.customers?.name || 'Cliente no especificado',
            amount: Number(invoice.amount) || 0,
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

        console.log('Final sales data:', salesData);

        return NextResponse.json(salesData)

    } catch (error) {
        console.error("Error fetching sales data:", error)
        return NextResponse.json({ 
            error: "Failed to fetch sales data", 
            details: error instanceof Error ? error.message : 'Unknown error' 
        }, { status: 500 })
    }
}