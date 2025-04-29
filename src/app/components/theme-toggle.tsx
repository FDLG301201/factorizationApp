"use client"

import { IconButton, Tooltip } from "@mui/material"
import { Brightness4 as DarkIcon, Brightness7 as LightIcon } from "@mui/icons-material"
import { useTheme } from "../contexts/theme-context"


export default function ThemeToggle() {
  const { mode, toggleColorMode } = useTheme()

  return (
    <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === "light" ? <DarkIcon /> : <LightIcon />}
      </IconButton>
    </Tooltip>
  )
}
