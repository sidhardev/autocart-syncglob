import { Box, Avatar, Typography } from "@mui/material";
import CommonTable from "../../common/Table";

export default function MessageTable({ rows, tableHeaders }) {
  const getStatusStyles = (status, count) => {
    if (status === "FLAGGED") {
      return {
        bg: "#FFF7E6",
        dot: "#EAB308",
        text: "#B45309",
        label: "Flagged",
      };
    }

    if (status === "REPORTED") {
      return {
        bg: "#FEE2E2",
        dot: "#EF4444",
        text: "#B91C1C",
        label: count ? `Reported (${count})` : "Reported",
      };
    }

    return {
      bg: "#F3F4F6",
      dot: "#6B7280",
      text: "#374151",
      label: status,
    };
  };

  const columns = [
    {
      header: tableHeaders?.[0] || "Status",
      render: (row) => {
        const styles = getStatusStyles(row.status, row.reportCount);

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: styles.bg,
              px: 2,
              py: 0.5,
              borderRadius: 2,
              width: "fit-content",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: styles.dot,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body2" sx={{ color: styles.text }}>
              {styles.label}
            </Typography>
          </Box>
        );
      },
    },
    {
      header: tableHeaders?.[1] || "Sender Id",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={row.sender.avatar} sx={{ width: 28, height: 28 }} />
          <Typography fontWeight={500}>{row.sender.id}</Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders?.[2] || "Receiver Id",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={row.receiver.avatar} sx={{ width: 28, height: 28 }} />
          <Typography fontWeight={500}>{row.receiver.id}</Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders?.[3] || "Message Content",
      render: (row) => (
        <Box>
          <Typography variant="body2">
            {row.message.content}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {row.message.time}
          </Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders?.[4] || "Reason",
      render: (row) => (
        <Typography fontWeight={500}>
          {row.reason}
        </Typography>
      ),
    },
    {
      header: tableHeaders?.[5] || "Date",
      render: (row) => row.date,
    },
  ];

  return (
    <CommonTable
      columns={columns}
      rows={rows}
      onRowClick={(row) => console.log("Message row:", row)}
    />
  );
}