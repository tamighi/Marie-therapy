import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Pages = [
  {
    label: "Types de consultations",
    to: "types",
  },
  {
    label: "Outils",
    to: "tools",
  },
  {
    label: "Modalités pratique",
    to: "modalities",
  },
  {
    label: "Cabinets",
    to: "offices",
  },
  {
    label: "Contact",
    to: "contact",
  },
];

export const Appbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <div className="w-full lg:w-4/5 m-auto">
        <Toolbar>
          <Box className="flex-1 sm:flex md:hidden">
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorElNav}
            open={!!anchorElNav}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {Pages.map((item, i) => (
              <MenuItem key={i} onClick={() => navigate(item.to)}>
                <Typography>{item.label}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Button onClick={() => navigate("/")}>
            <Typography className="text-white normal-case">
              Marie Somville
            </Typography>
          </Button>

          <Box className="flex-1"></Box>

          <Box className="hidden md:flex">
            {Pages.map((item, i) => (
              <Button
                onClick={() => navigate(item.to)}
                className="text-white normal-case"
                key={i}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
};
