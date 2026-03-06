import FinancialCard from "../../common/FinancialCard";
import { Box } from "@mui/material";

function MessageOverviewCards({ messageOverview }) {
  if (!messageOverview) return null;

  const overviewCards = [
    {
      id: 1,
      title: "Today",
      amount: messageOverview.today?.count,
      change: messageOverview.today?.change,
      comparisonText: messageOverview.today?.compareText,
    },
    {
      id: 2,
      title: "This Week",
      amount: messageOverview.thisWeek?.count,
      change: messageOverview.thisWeek?.change,
      comparisonText: messageOverview.thisWeek?.compareText,
    },
    {
      id: 3,
      title: "This Month",
      amount: messageOverview.thisMonth?.count,
      change: messageOverview.thisMonth?.change,
      comparisonText: messageOverview.thisMonth?.compareText,
    },
    {
      id: 4,
      title: "This Year",
      amount: messageOverview.thisYear?.count,
      change: messageOverview.thisYear?.change,
      comparisonText: messageOverview.thisYear?.compareText,
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
      {overviewCards.map((card) => (
        <FinancialCard
          key={card.id}
          title={card.title}
          amount={card.amount}
          change={card.change}
          comparisonText={card.comparisonText}
        />
      ))}
    </Box>
  );
}

export default MessageOverviewCards;