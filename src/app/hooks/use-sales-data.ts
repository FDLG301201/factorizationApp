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
            const requestData = {
                ...dateRange,
                startDate: dateRange.startDate.toISOString(),
                endDate: dateRange.endDate.toISOString(),
            }

            const response = await fetch("/api/reports/sales", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData), // ← CAMBIAR de dateRange a requestData
            })

            if (!response.ok) {
                throw new Error("Failed to fetch sales data")
            }

            const salesData = await response.json()
            setData(salesData)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")
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
