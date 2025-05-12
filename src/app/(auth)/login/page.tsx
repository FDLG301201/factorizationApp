"use client"

import React, { useState } from "react"
import { Box, Button, Card, CardContent, CardHeader, TextField, Typography, IconButton, InputAdornment, useTheme, Alert } from "@mui/material"
import Link from "next/link"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import MailIcon from '@mui/icons-material/Mail';
import ThemeToggle from "@/app/components/theme-toggle"
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { signIn } from "next-auth/react";




export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "es"; // o tu valor por defecto


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setLoading(false);
  
    if (result?.error) {
      setError("Usuario o contraseña incorrecto");
    } else if (result?.ok) {
      router.push(`/dashboard`);
    }
  }

  const [isEnglish, setIsEnglish] = useState(false);

  const theme = useTheme();

  // const isDarkMode = theme.palette.mode === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish(prev => !prev);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor: theme.palette.background.default }}>
      <Box sx={{ position: "absolute", top: 4, right: 4 }}>
        <ThemeToggle />
      </Box>
      <Card sx={{ width: "100%", height: "100%", maxWidth: 500, maxHeight: 500, boxShadow: 5, borderRadius: 4 }}>

        <Box sx={{ textAlign: "center", marginTop: "40px" }}>
          <motion.div
            key={isEnglish ? "Welcome" : "Bienvenido"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" component="h1">
              {isEnglish ? "Welcome" : "Bienvenido"}
            </Typography>
          </motion.div>
        </Box>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <Box sx={{ mb: 4, mt: 4 }}>
              <TextField
                label="Usuario"
                id="username"
                type="text"
                fullWidth
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <TextField
                label="Contraseña"
                id="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlineIcon sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Link href="/forgot-password" passHref>
                <Button variant="text" color="primary" size="small">
                  ¿Olvidaste tu contraseña?
                </Button>
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5 }}
              disabled={loading}
            >
              Iniciar Sesión
            </Button>

            {error && (
              <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                {error}
              </Alert>
            )}

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              ¿No tienes una cuenta?{" "}
              <Link href="/register" passHref>
                <Button variant="text" color="primary" size="small">
                  Regístrate
                </Button>
              </Link>
            </Typography>

          </CardContent>
        </form>
      </Card>
    </Box>
  )
}
