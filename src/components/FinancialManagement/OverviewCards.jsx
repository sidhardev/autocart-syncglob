import React, { useEffect, useState } from "react";
import FinancialCard from "../../common/FinancialCard";
import { Box } from "@mui/material";

function OverviewCards({finance}) {
   
  const overviewCards = [
  {
    id: 1,
    title: "Today",
    amount: finance.today.amount,
    change: finance.today.change,
    comparisonText: "Compared to yesterday",
  },
  {
    id: 2,
    title: "This Week",
    amount: finance.week.amount,
    change: finance.week.change,
    comparisonText: "Compared to previous week",
  },
  {
    id: 3,
    title: "This Month",
    amount: finance.month.amount,
    change: finance.month.change,
    comparisonText: "Compared to previous month",
  },
  {
    id: 4,
    title: "This Year",
    amount: finance.year.amount,
    change: finance.year.change,
    comparisonText: "Compared to previous year",
  },
];

  return (
    <div>
<Box sx={{ display: "flex", gap: 3, }}>
  {overviewCards.map((card) => (
    <FinancialCard
      key={card.id}
      title={card.title}
      amount={card.amount}
      change={card.change}
      comparisonText={card.comparisonText}
    />
  ))}
</Box>    </div>
  );
}

export default OverviewCards;
