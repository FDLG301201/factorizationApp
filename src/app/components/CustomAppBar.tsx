"use client"

import { AppBar, Toolbar, Typography } from "@mui/material";
import UserMenu from "./user-menu";

export default function CustomAppBar() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" component="div">
                    BillingMaster
                </Typography>

                <UserMenu />
                {/* <ThemeToggle />
        <LanguageSwitcher /> */}
            </Toolbar>
        </AppBar>
    );
}