"use client"

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "../contexts/theme-context";
import SessionWrapper from "../components/session-wrapper";

// src/app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <html>
        <body>
          <ThemeProvider>
            <SessionWrapper>
              <CssBaseline>
                {children}
              </CssBaseline>
            </SessionWrapper>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}