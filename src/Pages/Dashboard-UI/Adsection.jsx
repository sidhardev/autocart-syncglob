import { Box, Grid, Typography } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import FinancialCard from "../../common/FinancialCard";

export default function AdsSection() {
  return (
    <Box
      sx={{ mt: 4, mx: { xs: -2, sm: -3, md: -4 }, width: "calc(100% + 4rem)" }}
    >
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

      <Grid container spacing={2} sx={{ width: "100%", m: 0 }}>
        {["Total Ads", "Pending Ads", "Active Ads", "Daily Ads Created"].map(
          (title, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
              <FinancialCard
                title={title}
                amount="0"
                change="0"
               />
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
}
