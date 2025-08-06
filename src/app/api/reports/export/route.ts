import { type NextRequest, NextResponse } from "next/server"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import type { SalesData, DateRange } from "@/app/types/reports"

export async function POST(request: NextRequest) {
  try {
    const {
      format,
      dateRange,
      data,
    }: {
      format: "pdf" | "excel" | "csv"
      dateRange: DateRange
      data: SalesData
    } = await request.json()

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
    }

    const formatDate = (date: string) => {
      return new Intl.DateTimeFormat("es-ES").format(new Date(date))
    }

    switch (format) {
      case "csv": {
        const csvData = [
          ["Número", "Fecha", "Cliente", "Importe", "Estado"],
          ...data.invoices.map((invoice) => [
            invoice.number,
            formatDate(invoice.date),
            invoice.customerName,
            invoice.amount.toString(),
            invoice.status,
          ]),
        ]

        const csvContent = csvData.map((row) => row.join(",")).join("\n")

        return new NextResponse(csvContent, {
          headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": 'attachment; filename="sales-report.csv"',
          },
        })
      }

      case "excel": {
        const workbook = XLSX.utils.book_new()

        // Hoja de resumen
        const summaryData = [
          ["Resumen de Ventas"],
          [""],
          ["Total de Ventas", formatCurrency(data.totalSales)],
          ["Número de Facturas", data.invoicesCount],
          ["Promedio Diario", formatCurrency(data.averageDaily)],
          [""],
          ["Crecimiento vs Período Anterior"],
          ["Ventas", `${data.salesGrowth.toFixed(1)}%`],
          ["Facturas", `${data.invoicesGrowth.toFixed(1)}%`],
          ["Promedio", `${data.averageGrowth.toFixed(1)}%`],
        ]

        const summarySheet = XLSX.utils.aoa_to_sheet(summaryData)
        XLSX.utils.book_append_sheet(workbook, summarySheet, "Resumen")

        // Hoja de facturas
        const invoicesData = [
          ["Número", "Fecha", "Cliente", "Importe", "Estado"],
          ...data.invoices.map((invoice) => [
            invoice.number,
            formatDate(invoice.date),
            invoice.customerName,
            invoice.amount,
            invoice.status,
          ]),
        ]

        const invoicesSheet = XLSX.utils.aoa_to_sheet(invoicesData)
        XLSX.utils.book_append_sheet(workbook, invoicesSheet, "Facturas")

        const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" })

        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Content-Disposition": 'attachment; filename="sales-report.xlsx"',
          },
        })
      }

      case "pdf": {
        const doc = new jsPDF()

        // Título
        doc.setFontSize(20)
        doc.text("Reporte de Ventas", 20, 20)

        // Período
        doc.setFontSize(12)
        doc.text(
          `Período: ${formatDate(dateRange.startDate.toISOString())} - ${formatDate(dateRange.endDate.toISOString())}`,
          20,
          35,
        )

        // Resumen
        doc.setFontSize(16)
        doc.text("Resumen", 20, 55)

        doc.setFontSize(12)
        doc.text(`Total de Ventas: ${formatCurrency(data.totalSales)}`, 20, 70)
        doc.text(`Número de Facturas: ${data.invoicesCount}`, 20, 80)
        doc.text(`Promedio Diario: ${formatCurrency(data.averageDaily)}`, 20, 90)

        // Tabla de facturas
        const tableData = data.invoices.map((invoice) => [
          invoice.number,
          formatDate(invoice.date),
          invoice.customerName,
          formatCurrency(invoice.amount),
          invoice.status,
        ])
        ;(doc as any).autoTable({
          head: [["Número", "Fecha", "Cliente", "Importe", "Estado"]],
          body: tableData,
          startY: 110,
          styles: { fontSize: 10 },
          headStyles: { fillColor: [66, 139, 202] },
        })

        const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

        return new NextResponse(pdfBuffer, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="sales-report.pdf"',
          },
        })
      }

      default:
        return NextResponse.json({ error: "Invalid format" }, { status: 400 })
    }
  } catch (error) {
    console.error("Export error:", error)
    return NextResponse.json({ error: "Failed to export data" }, { status: 500 })
  }
}
