import { Box, Button, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function DashboardDatePicker() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 4,
        p: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
       }}
    >
      {/* LEFT CONTENT */}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            color: "#111827",
          }}
        >
          Today
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 4 },
            flexWrap: "wrap",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              color: "#9ca3af",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Sunday 19TH January 2025
          </Typography>

          <Typography
            sx={{
              color: "#9ca3af",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            01:25pm
          </Typography>
        </Box>
      </Box>

      {/* RIGHT BUTTON */}
      <Button
        variant="outlined"
        startIcon={<CalendarTodayIcon />}
        sx={{
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 500,
          px: 3,
          py: 1,
          color: "#9ca3af",
          border: "1px solid #e5e7eb",
          alignSelf: { xs: "stretch", sm: "center" },
        }}
      >
        Change Date
      </Button>
    </Box>
  );
}

export default DashboardDatePicker;