import { Box, Typography, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function TodayCard() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        width: "97%",
      }}
    >
       <Box>
        <Typography variant="h6" fontWeight={600}>
          Today
        </Typography>

        <Box sx={{ display: "flex", gap: 4, mt: 1 }}>
          <Typography color="textDisabled">
            Sunday 19TH January 2025
          </Typography>

          <Typography color="textDisabled">
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
  );
}
