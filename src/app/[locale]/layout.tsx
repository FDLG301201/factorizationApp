import type React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Receipt as ReceiptIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon
} from "@mui/icons-material";
import Link from "next/link";

import "../globals.css";
import { ThemeProvider } from "../contexts/theme-context";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import CustomAppBar from "../components/CustomAppBar";
import { routing } from "@/i18n/routing";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "../components/session-wrapper";

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
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} href={`/${locale}`}>
                          <ListItemIcon><DashboardIcon /></ListItemIcon>
                          <ListItemText primary="Dashboard" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} href={`/${locale}/customers`}>
                          <ListItemIcon><PeopleIcon /></ListItemIcon>
                          <ListItemText primary="Customers" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} href={`/${locale}/invoices`}>
                          <ListItemIcon><ReceiptIcon /></ListItemIcon>
                          <ListItemText primary="Invoices" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} href={`/${locale}/inventory`}>
                          <ListItemIcon><InventoryIcon /></ListItemIcon>
                          <ListItemText primary="Inventory" />
                        </ListItemButton>
                      </ListItem>
                    </List>
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
