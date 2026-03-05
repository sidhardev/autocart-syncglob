import { Box, Avatar, Typography } from "@mui/material";
import CommonTable from "../../common/Table";

export default function FinanceTransactionsTable({
  rows,
  tableHeaders,
}) {
  const columns = [
    {
      header: tableHeaders?.[0] || "Ad Id",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={row.ad.imageUrl}
            variant="rounded"
            sx={{ width: 40, height: 40 }}
          />
          <Typography fontWeight={500}>
            {row.ad.id}
          </Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders?.[1] || "User Id",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            src={row.user.avatarUrl}
            sx={{ width: 36, height: 36 }}
          />
          <Typography fontWeight={500}>
            {row.user.id}
          </Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders?.[2] || "Transaction Id",
      render: (row) => row.transactionId,
    },
    {
      header: tableHeaders?.[3] || "Amount",
      render: (row) => (
        <Typography>
          ${row.amount}
        </Typography>
      ),
    },
    {
      header: tableHeaders?.[4] || "Date",
      render: (row) => row.date,
    },
  ];

  return (
    <CommonTable
      columns={columns}
      rows={rows}
      onRowClick={(row) =>
        console.log("Transaction clicked:", row)
      }
    />
  );
}