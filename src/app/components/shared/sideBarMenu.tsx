// src/app/components/SidebarMenu.tsx
"use client";
import { useTranslations } from "next-intl";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Receipt as ReceiptIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
  Business as BusinessIcon,
  Category as CategoryIcon,
  Block as BlockIcon,
} from "@mui/icons-material";
import Link from "next/link";

export default function SidebarMenu({ locale }: { locale: string }) {
  const t = useTranslations("General"); // O el namespace que uses

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/dashboard`}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary={t("dashboard")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/customers`}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary={t("customers")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/invoices`}>
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary={t("invoices")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/express-invoices`}>
          <ListItemIcon><ReceiptIcon /></ListItemIcon>
          <ListItemText primary={t("express-invoices")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/inventory`}>
          <ListItemIcon><InventoryIcon /></ListItemIcon>
          <ListItemText primary={t("inventory")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/companies`}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary={t("companies")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/categories`}>
          <ListItemIcon><CategoryIcon /></ListItemIcon>
          <ListItemText primary={t("categories")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} href={`/${locale}/canceled-invoices`}>
          <ListItemIcon><BlockIcon /></ListItemIcon>
          <ListItemText primary={t("canceled-invoices")} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}