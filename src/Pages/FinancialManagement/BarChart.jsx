import * as React from "react";
import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

function FinanceChart({ chartData }) {
  const labels = chartData.map((item) => item.day);
  const values = chartData.map((item) => item.value);

  return (
    <Box sx={{ width: "100%", height: 350 }}>
      <BarChart
        height={350}
        sx={{ width: "100%", display: "flex" }}
        xAxis={[
          {
            scaleType: "band",
            data: labels,
          },
        ]}
        series={[
          {
            data: values,
            color: "url(#financeGradient)",
            borderRadius: 6,
          },
        ]}
        yAxis={[
          {
            min: 0,
          },
        ]}
        grid={{ horizontal: true }}
      >
        <defs>
          <linearGradient id="financeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DE4949" />
            <stop offset="100%" stopColor="#F2C89C" />
          </linearGradient>
        </defs>
      </BarChart>
    </Box>
  );
}

export default FinanceChart;
