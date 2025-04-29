"use client";

import { MenuItem, Select, useTheme } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: any) => {
    const newLocale = event.target.value;

    Cookies.set("NEXT_LOCALE", newLocale);

    // Cambiamos la parte del idioma en la URL
    const segments = pathname.split("/");
    segments[1] = newLocale; // El primer segmento después de "/" es el locale

    const newPath = segments.join("/");

    router.push(newPath);
  };

  if (!mounted) {
    return null;
  }

  //Para obtener el tema de color actual
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Select
      value={currentLocale}
      onChange={handleChange}
      size="small"
      sx={{ ml: 2, color: isDarkMode? "white" : "black", borderColor: "white" }}
      variant="outlined"
    >
      <MenuItem value="es">Español</MenuItem>
      <MenuItem value="en">English</MenuItem>
    </Select>
  );
}
