import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link, NavLink } from "react-router-dom";

function TopBar() {
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#DCFCE7" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AdbIcon sx={{ mr: 1, color: "#15803D" }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: "monospace",

                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#15803D",
                  textDecoration: "none",
                }}
              >
                SG AUTOMOBILES
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Typography sx={{ mr: 1, color: "#15803D" }}>
              Syncglob Admin
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ border: "1px solid #15803D" }} />
              </IconButton>
              <NavLink to="/notifications" style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 3,
                      transition: "0.2s ease",
                      backgroundColor: isActive
                        ? "#07B007"
                        : "transparent",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 31.5C14.694 32.433 16.272 33 18 33C19.728 33 21.306 32.433 22.5 31.5M3.79501 21.591C3.47551 23.6205 4.90201 25.029 6.64801 25.731C13.3425 28.4235 22.6575 28.4235 29.352 25.731C31.098 25.029 32.5245 23.6205 32.205 21.591C32.01 20.343 31.0395 19.305 30.321 18.291C29.3805 16.9455 29.2875 15.48 29.286 13.9185C29.2875 7.89 24.2355 3 18 3C11.7645 3 6.71251 7.89 6.71251 13.92C6.71251 15.48 6.61951 16.947 5.67751 18.291C4.96051 19.305 3.99151 20.343 3.79501 21.591Z"
                        stroke={isActive ? "#fff" : "rgb(0, 0, 0)"}
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                )}
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default TopBar;
