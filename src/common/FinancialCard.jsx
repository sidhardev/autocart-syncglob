import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function FinancialCard({
  title,
  amount,
  change,
  comparisonText,
  currency = "$",
}) {
  const isPositive = change > 0;
  const isNegative = change < 0;

  return (

    <Paper
      elevation={0}
      sx={{
        flex: "1 1 210px",
        minWidth: 210,
        height: "80%",
        p: 2,
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Top Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            color: "#8b5a2b",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CalendarTodayOutlinedIcon
            sx={{ fontSize: 18, color: "#9ca3af" }}
          />
        </Box>
      </Box>

      {/* Amount + Percentage */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#1f2937",
          }}
        >
          {currency}{Number(amount).toLocaleString()}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: isPositive
              ? "#16a34a"
              : isNegative
                ? "#dc2626"
                : "#6b7280",
          }}
        >
          {isPositive ? "+" : ""}
          {change}%
        </Typography>
      </Box>

      {/* Bottom Text */}
      <Typography
        variant="body2"
        sx={{
          color: "#9ca3af",
        }}
      >
        {comparisonText}
      </Typography>

    </Paper>
  );
}

export default FinancialCard;