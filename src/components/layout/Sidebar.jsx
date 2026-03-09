import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";

const drawerWidth = 260;

const NAV_ITEMS = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <DashboardOutlinedIcon />,
  },
  {
    path: "/ads-management",
    label: "Ads Management",
    icon: <AdsClickOutlinedIcon />,
  },
  {
    path: "/user-management",
    label: "Users Management",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9 17.3C20.6 17.3 22.7 15.1 22.7 12.4C22.7 9.7 20.5 7.6 17.8 7.6C15.1 7.6 13 9.8 13 12.4C13 15.1 15.2 17.3 17.9 17.3Z"
          fill="currentColor"
        />
        <path
          d="M32.7 16.7C30.8 15 28.3 14.1 25.7 14.2H24.9C24.7 15 24.4 15.7 24 16.3C24.6 16.2 25.1 16.2 25.7 16.2C27.6 16.1 29.5 16.7 31 17.8V25H33V17L32.7 16.7Z"
          fill="currentColor"
        />
        <path
          d="M23.4 7.8C23.9 6.6 25.3 6 26.6 6.5C27.8 7 28.4 8.4 27.9 9.7C27.5 10.6 26.6 11.2 25.7 11.2C25.5 11.2 25.2 11.2 25 11.1C25.1 11.6 25.1 12.1 25.1 12.5V13.1C25.3 13.1 25.5 13.2 25.7 13.2C28.2 13.2 30.2 11.2 30.2 8.8C30.2 6.3 28.2 4.3 25.8 4.3C24.2 4.3 22.8 5.1 22 6.5C22.5 6.8 23 7.2 23.4 7.8Z"
          fill="currentColor"
        />
        <path
          d="M12 16.4C11.6 15.8 11.3 15.1 11.1 14.3H10.3C7.7 14.2 5.2 15.1 3.3 16.7L3 17V25H5V17.8C6.6 16.7 8.4 16.1 10.3 16.2C10.9 16.2 11.5 16.3 12 16.4Z"
          fill="currentColor"
        />
        <path
          d="M10.3 13.1C10.5 13.1 10.7 13.1 10.9 13V12.4C10.9 11.9 10.9 11.4 11 11C10.8 11.1 10.5 11.1 10.3 11.1C9 11.1 7.9 10 7.9 8.7C7.9 7.4 9 6.3 10.3 6.3C11.3 6.3 12.2 6.9 12.6 7.8C13 7.3 13.6 6.8 14.1 6.4C12.8 4.3 10.1 3.6 8 4.9C5.9 6.2 5.2 8.9 6.5 11C7.3 12.3 8.7 13.1 10.3 13.1Z"
          fill="currentColor"
        />
        <path
          d="M26.1 22.7L25.9 22.4C23.9 20.2 21.1 18.9 18.1 19C15.1 18.9 12.2 20.2 10.2 22.4L10 22.7V30.3C10 31.2 10.7 32 11.7 32H24.5C25.4 32 26.2 31.2 26.2 30.3V22.7H26.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/report-analytics",
    label: "Reporting & Analytics",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.595 24.75H13.095V18H11.595V24.75ZM22.905 24.75H24.405V10.5H22.905V24.75ZM17.25 24.75H18.75V21H17.25V24.75ZM17.25 18H18.75V15H17.25V18ZM8.424 30C7.733 30 7.1565 29.769 6.6945 29.307C6.2325 28.845 6.001 28.268 6 27.576V8.424C6 7.733 6.2315 7.1565 6.6945 6.6945C7.1575 6.2325 7.734 6.001 8.424 6H27.5775C28.2675 6 28.844 6.2315 29.307 6.6945C29.77 7.1575 30.001 7.734 30 8.424V27.5775C30 28.2675 29.769 28.844 29.307 29.307C28.845 29.77 28.268 30.001 27.576 30H8.424ZM8.424 28.5H27.5775C27.8075 28.5 28.019 28.404 28.212 28.212C28.405 28.02 28.501 27.808 28.5 27.576V8.424C28.5 8.193 28.404 7.981 28.212 7.788C28.02 7.595 27.808 7.499 27.576 7.5H8.424C8.193 7.5 7.981 7.596 7.788 7.788C7.595 7.98 7.499 8.192 7.5 8.424V27.5775C7.5 27.8075 7.596 28.019 7.788 28.212C7.98 28.405 8.1915 28.501 8.4225 28.5"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/financial-management",
    label: "Financial Management",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0389 16.875V11.25C13.0389 10.914 13.1569 10.628 13.3929 10.392C13.6279 10.156 13.9139 10.038 14.2509 10.038C14.5879 10.038 14.8739 10.156 15.1089 10.392C15.3449 10.628 15.4629 10.914 15.4629 11.25V16.875C15.4629 17.212 15.3449 17.498 15.1089 17.733C14.8729 17.969 14.5869 18.087 14.2509 18.087C13.9149 18.087 13.6289 17.969 13.3929 17.733C13.1569 17.497 13.0389 17.211 13.0389 16.875ZM19.5594 18.816V5.24999C19.5594 4.91399 19.6769 4.62799 19.9119 4.39199C20.1479 4.15599 20.4339 4.03799 20.7699 4.03799C21.1069 4.03799 21.3929 4.15599 21.6279 4.39199C21.8639 4.62799 21.9819 4.91399 21.9819 5.24999V18.816C21.9819 19.22 21.8579 19.523 21.6099 19.725C21.3609 19.927 21.0824 20.028 20.7744 20.028C20.4664 20.028 20.1864 19.927 19.9344 19.725C19.6824 19.523 19.5574 19.22 19.5594 18.816ZM6.46289 22.029V17.25C6.46289 16.914 6.58039 16.628 6.81539 16.392C7.05139 16.156 7.33789 16.038 7.67489 16.038C8.01189 16.038 8.29789 16.156 8.53289 16.392C8.76789 16.628 8.88539 16.914 8.88539 17.25V22.0305C8.88539 22.4345 8.76139 22.737 8.51339 22.938C8.26539 23.14 7.98689 23.241 7.67789 23.241C7.36989 23.241 7.08989 23.14 6.83789 22.938C6.58789 22.737 6.46289 22.4345 6.46289 22.0305ZM8.09039 30.825C7.75539 30.825 7.52389 30.6725 7.39589 30.3675C7.26789 30.0635 7.32589 29.789 7.56989 29.544L13.4319 23.6835C13.6489 23.4655 13.9164 23.344 14.2344 23.319C14.5524 23.294 14.8349 23.3905 15.0819 23.6085L19.5594 27.456L29.6889 17.325H27.0009C26.7879 17.325 26.6099 17.253 26.4669 17.109C26.3239 16.965 26.2519 16.7865 26.2509 16.5735C26.2499 16.3605 26.3219 16.1825 26.4669 16.0395C26.6119 15.8965 26.7899 15.825 27.0009 15.825H31.0389C31.3829 15.825 31.6709 15.941 31.9029 16.173C32.1349 16.405 32.2509 16.693 32.2509 17.037V21.075C32.2509 21.288 32.1789 21.466 32.0349 21.609C31.8909 21.752 31.7124 21.824 31.4994 21.825C31.2864 21.826 31.1084 21.754 30.9654 21.609C30.8224 21.464 30.7509 21.286 30.7509 21.075V18.387L20.3949 28.743C20.1779 28.96 19.9104 29.081 19.5924 29.106C19.2744 29.131 18.9919 29.0345 18.7449 28.8165L14.2674 24.969L8.63189 30.606C8.56789 30.666 8.48739 30.7175 8.39039 30.7605C8.29339 30.8035 8.19339 30.825 8.09039 30.825Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/email-management",
    label: "Email Management",
    icon: (
      <SvgIcon viewBox="0 0 36 36">
        <path
          d="M32 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V8C34 7.46957 33.7893 6.96086 33.4142 6.58579C33.0391 6.21071 32.5304 6 32 6ZM30.46 28H5.66L12.66 20.76L11.22 19.37L4 26.84V9.52L16.43 21.89C16.8047 22.2625 17.3116 22.4716 17.84 22.4716C18.3684 22.4716 18.8753 22.2625 19.25 21.89L32 9.21V26.71L24.64 19.35L23.23 20.76L30.46 28ZM5.31 8H30.38L17.84 20.47L5.31 8Z"
          fill="currentColor"
        />
      </SvgIcon>
    ),
  },
  {
    path: "/message-management",
    label: "Message Management",
    icon: (
      <SvgIcon viewBox="0 0 36 36">
        <path
          d="M12 13.5H24M12 19.5H21M27 6C28.1935 6 29.3381 6.47411 30.182 7.31802C31.0259 8.16193 31.5 9.30653 31.5 10.5V22.5C31.5 23.6935 31.0259 24.8381 30.182 25.682C29.3381 26.5259 28.1935 27 27 27H19.5L12 31.5V27H9C7.80653 27 6.66193 26.5259 5.81802 25.682C4.97411 24.8381 4.5 23.6935 4.5 22.5V10.5C4.5 9.30653 4.97411 8.16193 5.81802 7.31802C6.66193 6.47411 7.80653 6 9 6H27Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    ),
  },
  {
    path: "/story-management",
    label: "Story Management",
    icon: (
      <SvgIcon viewBox="0 0 36 36">
        <path
          d="M16.845 20.88C19.242 21.801 20.685 23.2605 22.5 25.5M16.845 20.88C13.9305 19.7595 11.7375 19.467 9.75 19.5M16.845 20.88C19.1175 18.381 20.61 16.5795 26.25 15.75"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M33 18C33.0014 20.0646 32.5765 22.1072 31.752 24M18 33C19.9702 33.0024 21.9214 32.6155 23.7416 31.8616C25.5618 31.1076 27.2151 30.0014 28.6065 28.6065M3.00001 18C2.99758 16.0298 3.38447 14.0786 4.13845 12.2584C4.89243 10.4382 5.99863 8.78488 7.39351 7.3935M18 3C15.9354 2.99866 13.8928 3.42352 12 4.248M12 31.752C8.53217 30.2362 5.76384 27.4678 4.24801 24M23.748 4.5C27.2159 6.01584 29.9842 8.78416 31.5 12.252"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </SvgIcon>
    ),
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setMobileOpen((prev) => !prev);
    window.addEventListener("toggleMobileSidebar", handleToggle);
    return () =>
      window.removeEventListener("toggleMobileSidebar", handleToggle);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItemStyles = {
    borderRadius: 3,
    mb: 1,
    "&:hover, &.active": {
      backgroundColor: "#07B007",
      color: "#fff",
      "& .MuiListItemIcon-root": {
        color: "inherit",
      },
    },
  };

  const drawerContent = (
    <Box sx={{ overflow: "auto", mt: 2, color: "#9CA3AF" }}>
      <List sx={{ "& .MuiListItemIcon-root": { color: "inherit" } }}>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={navItemStyles}
            onClick={() => setMobileOpen(false)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            pl: 2,
            pr: 1,
            mt: "48px",
            height: "calc(100vh - 48px)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            pl: 2,
            pr: 1,
            position: "fixed",
            height: "calc(100vh - 64px)",
            top: "64px",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
