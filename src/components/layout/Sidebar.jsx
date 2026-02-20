 import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const drawerWidth = 260;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        position: "relative",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
           top: '64px',
           height: 'calc(100% - 64px)',
          width: drawerWidth,
          boxSizing: "border-box",
        },

      }}
    >
      <Box sx={{ overflow: "auto", mt: 2 }}>
        <List>

           <ListItemButton
            selected
            sx={{
              borderRadius: 2,
              mb: 1,
              "&.Mui-selected": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

           <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Ads Management" />
          </ListItemButton>

           <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Users Management" />
          </ListItemButton>

           <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Reporting & Analytics" />
          </ListItemButton>

           <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary="Financial Management" />
          </ListItemButton>

           <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 1,
              "&:hover": {
                backgroundColor: "rgb(58, 193, 239)",
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
