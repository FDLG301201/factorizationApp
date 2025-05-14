import type React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
} from "@mui/material";

import "../globals.css";
import { ThemeProvider } from "../contexts/theme-context";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import CustomAppBar from "../components/CustomAppBar";
import { routing } from "@/i18n/routing";
import SessionWrapper from "../components/session-wrapper";
import SidebarMenu from "../components/sideBarMenu";

const inter = Inter({ subsets: ["latin"] });
const drawerWidth = 240;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Validación adicional si es necesario
  if (!["en", "es"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SessionWrapper>
              <CssBaseline />
              <Box sx={{ display: "flex" }}>
                <CustomAppBar />
                <Drawer
                  variant="permanent"
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                  }}
                >
                  <Toolbar />
                  <Box sx={{ overflow: "auto" }}>
                    <SidebarMenu locale={locale} />
                  </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                  {children}
                </Box>
              </Box>
            </SessionWrapper>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
