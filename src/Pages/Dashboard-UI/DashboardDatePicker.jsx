import { Box, Button, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function DashboardDatePicker() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffffb9",
          borderRadius: 3,
          p: { xs: 2, sm: 2.5 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "flex-start",
          mr: 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          width: "97%",
          border: "1px solid #e0e0e0",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={400}>
            Today
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 4 }, mt: 1, }}>
            <Typography color="text.secondary" variant="body2">
              Sunday 19TH January 2025
            </Typography>

            <Typography color="text.secondary" variant="body2">01:25pm</Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          startIcon={<CalendarTodayIcon />}
          sx={{
            borderRadius: 3,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
            color: "#9CA3AF",
            border: "1px solid #CACACA",
          }}
        >
          Change Date
        </Button>
      </Box>
    </>
  );
}

export default DashboardDatePicker;
