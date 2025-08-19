"use client"

import { Button, Stack } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import TableChartIcon from '@mui/icons-material/TableChart'
import DescriptionIcon from '@mui/icons-material/Description'
import { QuoteData } from '@/app/types/quote'
import { useTranslations } from 'next-intl'

interface Props {
  quote: QuoteData
}

export default function DownloadButtons({ quote }: Props) {
  const t = useTranslations('Quotes')
  const triggerDownload = async (format: string) => {
    const res = await fetch(`/api/quotes/generate/${format}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quote)
    })
    if (!res.ok) return
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${quote.quote_number}.${format}`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        onClick={() => triggerDownload('csv')}
        sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
      >
        {t('download.csv')}
      </Button>
      <Button
        variant="outlined"
        startIcon={<PictureAsPdfIcon />}
        onClick={() => triggerDownload('pdf')}
        sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
      >
        PDF
      </Button>
      <Button
        variant="outlined"
        startIcon={<TableChartIcon />}
        onClick={() => triggerDownload('excel')}
        sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
      >
        Excel
      </Button>
      <Button
        variant="outlined"
        startIcon={<DescriptionIcon />}
        onClick={() => triggerDownload('word')}
        sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
      >
        Word
      </Button>
    </Stack>
  )
}
