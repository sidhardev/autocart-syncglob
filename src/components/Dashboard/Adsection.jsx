import { Box, Grid, Typography } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import StatsCard from "./StatsCard";

export default function AdsSection() {
  return (
    <Box
      sx={{ mt: 4, mx: { xs: -2, sm: -3, md: -4 }, width: "calc(100% + 4rem)" }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 4,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <AdsClickIcon sx={{ mr: 1, color: "#6c757d" }} />
        <Typography variant="h5" fontWeight={600}>
          Ads
        </Typography>
      </Box>

      {/* Full Width Cards */}
      <Grid container spacing={2} sx={{ width: "100%", m: 0 }}>
        {["Total Ads", "Pending Ads", "Active Ads", "Daily Ads Created"].map(
          (title, index) => (
            <Grid item xs={12} key={index} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
              <StatsCard title={title} />
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
}
