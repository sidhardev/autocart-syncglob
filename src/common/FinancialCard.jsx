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
        flex: { xs: "1 1 calc(100% - 16px)", sm: "1 1 210px" },
minWidth: { xs: "calc(100% - 16px)", sm: 210 },
        height: "auto",
        p: { xs: 2, sm: 2.5 },
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
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
            fontSize: { xs: "0.9rem", sm: "1rem" }
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
            sx={{ fontSize: { xs: 16, sm: 18 }, color: "#9ca3af" }}
          />
        </Box>
      </Box>

       <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#1f2937",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" }
          }}
        >
          {currency}{Number(amount || 0).toLocaleString()}
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
          {change || 0}%
        </Typography>
      </Box>

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