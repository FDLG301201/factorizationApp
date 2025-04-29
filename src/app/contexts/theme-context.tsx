"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme, type PaletteMode } from "@mui/material"

type ThemeContextType = {
  mode: PaletteMode
  toggleColorMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>("light")

  useEffect(() => {
    // Load saved theme preference from localStorage
    const savedMode = localStorage.getItem("themeMode") as PaletteMode | null
    if (savedMode) {
      setMode(savedMode)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Use system preference as fallback
      setMode("dark")
    }
  }, [])

  const colorMode = {
    mode,
    toggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === "light" ? "dark" : "light"
        // Save preference to localStorage
        localStorage.setItem("themeMode", newMode)
        return newMode
      })
    },
  }

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light mode
            primary: {
              main: "#1976d2",
            },
            secondary: {
              main: "#dc004e",
            },
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
          }
        : {
            // Dark mode
            primary: {
              main: "#90caf9",
            },
            secondary: {
              main: "#f48fb1",
            },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#1976d2" : "#272727",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === "light" ? "#ffffff" : "#272727",
          },
        },
      },
    },
  })

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
