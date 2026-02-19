import { Box, Typography, List, ListItemButton, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        borderRight: "1px solid #e0e0e0",
        p: 2,
        height: "100vh",
        overflow: "auto",

      }}
    >
     

      <List>
        {[
          "Dashboard",
          "Ads Management",
          "Users Management",
          "Reporting & Analytics",
          "Financial Management",
          "Email Management",
        ].map((text) => (
          <ListItemButton key={text} sx={{ borderRadius: 2, mb: 1, "&:hover": {
      backgroundColor: "rgb(58, 193, 239)",
      color: "#fff",
    }, }}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
