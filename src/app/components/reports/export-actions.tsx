"use client"

import type React from "react"

import { useState } from "react"
import { Button, Menu, MenuItem, ListItemIcon, ListItemText, CircularProgress } from "@mui/material"
import { FileDownload, PictureAsPdf, TableChart, InsertChart } from "@mui/icons-material"
import { useTranslations } from "next-intl"
import type { SalesData, DateRange } from "@/app/types/reports"

interface ExportActionsProps {
    data: SalesData | null
    dateRange: DateRange
}

export function ExportActions({ data, dateRange }: ExportActionsProps) {
    const t = useTranslations("Reports.export")
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [loading, setLoading] = useState(false)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleExport = async (format: "pdf" | "excel" | "csv") => {
        setLoading(true)
        handleClose()

        try {
            const response = await fetch("/api/reports/export", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    format,
                    dateRange,
                    data,
                }),
            })

            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = `sales-report-${dateRange.startDate.toISOString().split("T")[0]}-${dateRange.endDate.toISOString().split("T")[0]}.${format}`
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
                document.body.removeChild(a)
            }
        } catch (error) {
            console.error("Export error:", error)
        } finally {
            setLoading(false)
        }
    }

    const exportOptions = [
        { format: "pdf" as const, label: t("pdf"), icon: PictureAsPdf },
        { format: "excel" as const, label: t("excel"), icon: TableChart },
        { format: "csv" as const, label: t("csv"), icon: InsertChart },
    ]

    return (
        <>
            <Button
                variant="contained"
                startIcon={loading ? <CircularProgress size={16} /> : <FileDownload />}
                onClick={handleClick}
                disabled={loading || !data}
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.3)",
                    },
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                }}
            >
                {t("export")}
            </Button>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {exportOptions.map((option) => {
                    const IconComponent = option.icon
                    return (
                        <MenuItem key={option.format} onClick={() => handleExport(option.format)}>
                            <ListItemIcon>
                                <IconComponent fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>{option.label}</ListItemText>
                        </MenuItem>
                    )
                })}
            </Menu>
        </>
    )
}
