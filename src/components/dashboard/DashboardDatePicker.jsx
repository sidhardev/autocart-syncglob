import { Box, Button, Typography } from '@mui/material'
 import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
 
function DashboardDatePicker() {
  return (
    <>
      <Box
      sx={{
        backgroundColor: "#ffffffb9",
        borderRadius: 9,
        p: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        width: "95%",
      }}
    >
       <Box>
        <Typography variant="h6" fontWeight={400}>
          Today
        </Typography>

        <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
          <Typography color="text.secondary">
            Sunday 19TH January 2025
          </Typography>

          <Typography color="text.secondary">
            01:25pm
          </Typography>
        </Box>
      </Box>

       <Button
        variant="outlined"
        startIcon={<CalendarTodayIcon />}
        sx={{
          borderRadius: 2,
          textTransform: "none",
        }}
        color="info"
      >
        Change Date
      </Button>
    </Box>
    </>
  )
}

export default DashboardDatePicker
