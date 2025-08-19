"use client"

import { useState, useEffect, useCallback } from "react"
import type { SalesData, DateRange } from "../types/reports"

interface UseSalesDataReturn {
    data: SalesData | null
    loading: boolean
    error: string | null
    refetch: () => void
}

export function useSalesData(dateRange: DateRange): UseSalesDataReturn {
    const [data, setData] = useState<SalesData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            // When filtering by a single exact day, call the dedicated daily endpoint
            const isDaily = dateRange.period === 'today'
            let response: Response
            if (isDaily) {
                // Send only the date part in YYYY-MM-DD to avoid timezone shifts
                const dateOnly = dateRange.startDate.toISOString().slice(0, 10)
                const dailyBody = { date: dateOnly }
                response = await fetch("/api/reports/sales/daily", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dailyBody),
                })
            } else {
                const requestData = {
                    ...dateRange,
                    startDate: dateRange.startDate.toISOString(),
                    endDate: dateRange.endDate.toISOString(),
                }
                response = await fetch("/api/reports/sales", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestData),
                })
            }

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
            }

            const salesData = await response.json()

            // Validar los datos recibidos
            const validatedData: SalesData = {
                totalSales: Number(salesData.totalSales) || 0,
                invoicesCount: Number(salesData.invoicesCount) || 0,
                averageDaily: Number(salesData.averageDaily) || 0,
                salesGrowth: typeof salesData.salesGrowth === 'number' ? salesData.salesGrowth : 0,
                invoicesGrowth: typeof salesData.invoicesGrowth === 'number' ? salesData.invoicesGrowth : 0,
                averageGrowth: typeof salesData.averageGrowth === 'number' ? salesData.averageGrowth : 0,
                dailySales: Array.isArray(salesData.dailySales) ? salesData.dailySales : [],
                salesByCategory: Array.isArray(salesData.salesByCategory) ? salesData.salesByCategory : [],
                invoices: Array.isArray(salesData.invoices) ? salesData.invoices : [],
            }

            setData(validatedData)
        } catch (err) {
            console.error('useSalesData: Error:', err)
            const errorMessage = err instanceof Error ? err.message : "Error desconocido al cargar los datos"
            setError(errorMessage)
            setData(null)
        } finally {
            setLoading(false)
        }
    }, [dateRange])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        data,
        loading,
        error,
        refetch: fetchData,
    }
}