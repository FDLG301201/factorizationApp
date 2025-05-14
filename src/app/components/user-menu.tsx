"use client";

import { IconButton, Avatar, Menu, MenuItem, Button } from "@mui/material";
import { useRef, useState } from "react";
import ThemeToggle from "../components/theme-toggle";
import LanguageSwitcher from "../components/language-switcher";
import { signOut, useSession } from "next-auth/react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslations } from "next-intl";
import router from "next/router";
import { redirect } from "next/navigation";

export default function UserMenu() {
  
  const g = useTranslations("General");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const avatarRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession();

  function getInitials(username: string) {
    if (!username) return "";
    const parts = username.split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div>
      <IconButton
        ref={avatarRef}
        onClick={handleClick}
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
      >
        <Avatar>
          {session?.user ? getInitials((session.user as any).username) : "?"}
        </Avatar>
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {g("color")} <ThemeToggle />
        </MenuItem>
        <MenuItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {g("language")} <LanguageSwitcher />
        </MenuItem>
        <MenuItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleLogout}>
            <LogoutIcon sx={{ mr: 1 }} /> {g("logout")}
        </MenuItem>
      </Menu>
    </div>
  );
}
