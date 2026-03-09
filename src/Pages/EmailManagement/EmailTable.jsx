import { Box, Avatar, Typography } from "@mui/material";
import CommonTable from "../../common/Table";

export default function EmailTable({ rows, type = "inbox", onRowClick }) {
  const getStatusStyles = (status) => {
    const map = {
      Unread: { bg: "#FEF2F2", dot: "#EF4444", label: "Unread" },
      Read: { bg: "#F9FAFB", dot: "#6B7280", label: "Read" },
      "Not Delivered": {
        bg: "#FEF9C3",
        dot: "#EAB308",
        label: "Not Delivered",
      },
      Opened: { bg: "#F9FAFB", dot: "#6B7280", label: "Opened" },
      Delivered: { bg: "#EFF6FF", dot: "#3B82F6", label: "Delivered" },
    };

    return {
      bg: map[status]?.bg || "#F3F4F6",
      dot: map[status]?.dot || "#6B7280",
      label: map[status]?.label || status,
      text: "#9CA3AF",
    };
  };

  const StatusChip = ({ status }) => {
    const styles = getStatusStyles(status);

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: styles.bg,
          px: { xs: 1.5, sm: 2 },
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

        <Typography
          variant="body2"
          sx={{
            color: styles.text,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
          }}
        >
          {styles.label}
        </Typography>
      </Box>
    );
  };

  const userColumn = {
    header: "User Id",
    render: (row) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 140,
        }}
      >
        <Avatar
          src={row.userAvatar}
          sx={{
            width: { xs: 24, sm: 28 },
            height: { xs: 24, sm: 28 },
          }}
        />

        <Typography
          fontWeight={500}
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            whiteSpace: "nowrap",
          }}
        >
          {row.userId}
        </Typography>
      </Box>
    ),
  };

  const emailColumn = {
    header: "Email Address",
    render: (row) => (
      <Typography
        fontWeight={500}
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: { xs: 140, md: 220 },
        }}
      >
        {row.email}
      </Typography>
    ),
  };

  const inboxColumns = [
    {
      header: "Status",
      render: (row) => <StatusChip status={row.status} />,
    },
    userColumn,
    emailColumn,
    {
      header: "Message Content",
      render: (row) => (
        <Box sx={{ maxWidth: { xs: 160, md: 300 } }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {row.message}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
          >
            {row.time}
          </Typography>
        </Box>
      ),
    },
    {
      header: "Date",
      render: (row) => (
        <Typography
          fontWeight={500}
          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
        >
          {row.date}
        </Typography>
      ),
    },
  ];

  const outboxColumns = [
    {
      header: "Status",
      render: (row) => <StatusChip status={row.status} />,
    },
    {
      header: "Status Date",
      render: (row) => (
        <Typography
          fontWeight={600}
          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
        >
          {row.statusDate}
        </Typography>
      ),
    },
    userColumn,
    emailColumn,
    {
      header: "User Action",
      render: (row) => (
        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
        >
          {row.action}
        </Typography>
      ),
    },
    {
      header: "Date Sent",
      render: (row) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            fontWeight={500}
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
          >
            {row.dateSent}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
          >
            {row.time}
          </Typography>
        </Box>
      ),
    },
  ];

  const draftColumns = [
    userColumn,
    emailColumn,
    {
      header: "Message Content",
      render: (row) => (
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            maxWidth: { xs: 160, md: 300 },
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {row.message}
        </Typography>
      ),
    },
    {
      header: "Date Saved",
      render: (row) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            fontWeight={500}
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
          >
            {row.dateSaved}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}
          >
            {row.time}
          </Typography>
        </Box>
      ),
    },
    {
      header: "Days in draft",
      render: (row) => (
        <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
          {row.daysInDraft}
        </Typography>
      ),
    },
  ];

  const columnMap = {
    inbox: inboxColumns,
    outbox: outboxColumns,
    draft: draftColumns,
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
      }}
    >
      <CommonTable
        columns={columnMap[type] || inboxColumns}
        rows={rows}
        onRowClick={onRowClick}
      />
    </Box>
  );
}
