import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 260;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        position: "fixed",
        zIndex: 1200,
        flexShrink: 0,
        overflowX: "hidden",
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
    >
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <List>
          <ListItemButton
          
            component={NavLink}
            to="/dashboard"
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            }}
          >
           
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="/ads-management"
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Ads Management" />
          </ListItemButton>

          <ListItemButton
          component={NavLink}
            to="/user-management"
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Users Management" />
          </ListItemButton>

          <ListItemButton
          component={NavLink}
            to="/report-analytics"
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            
            }}
          >
            <ListItemText primary="Reporting & Analytics" />
          </ListItemButton>

          <ListItemButton
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Financial Management" />
          </ListItemButton>

          <ListItemButton
            sx={{
              borderRadius: 3,
              mb: 1,
              "&:hover": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
              "&.active": {
                backgroundColor: "#07B007",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Email Management" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
