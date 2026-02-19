import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatsCard({ title }) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        boxShadow: "none",
        backgroundColor: "#fff",
      }}
    >
      <CardContent>

        {/* Title + % */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#22c55e", fontWeight: 500 }}
          >
            +9.2%
          </Typography>
        </Box>

        {/* Number */}
        <Typography variant="h5" fontWeight={700}>
          7,854,472{" "}
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
          >
            Ads
          </Typography>
        </Typography>

      </CardContent>
    </Card>
  );
}
