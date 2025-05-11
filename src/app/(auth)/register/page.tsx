"use client"

import { Alert, Button, Card, CardContent, CardHeader, CardMedia, TextField, Typography, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import ThemeToggle from "@/app/components/theme-toggle";
import { useState } from "react";
import { useRouter } from "next/navigation"


export default function RegisterPage() {

  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const userValidations = () => {
    if (username.length < 5) {
      setError("Username must be at least 5 characters long.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
  }

  const registerUser = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
    
      const data = await res.json();
    
      if (!res.ok) {
        setError(data.error || "Registration failed");
        setLoading(false);
        return;
      }
    
      router.push("/login");

    } catch (err) {
      setError("Ocurrió un error al registrar el usuario");
      setLoading(false);
    }
    setLoading(false);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    userValidations();

    if (error) return;

    registerUser();

    setLoading(false);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor: theme.palette.background.default }}>
      <Box sx={{ position: "absolute", top: 4, right: 4 }}>
        <ThemeToggle />
      </Box>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image="/convinence-cashier.svg"
          alt="Convinence Cashier"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography variant="h5" component="h1">
              User Register
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
              >
                Register
              </Button>

              {error && (
                <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                  {error}
                </Alert>
              )}
            </form>
          </CardContent>
        </Box>

      </Card>
    </Box>
  )
}