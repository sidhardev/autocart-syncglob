import { Box, Avatar, Typography } from "@mui/material";
import CommonTable from "../../common/Table";
import { useNavigate } from "react-router-dom";
import { formatLabel } from "../../common/Formatlabel";

export default function StoryTable({ rows }) {
  const navigate = useNavigate();

  const getStatusStyles = (status, count) => {
    switch (status) {
      case "Flagged":
        return {
          bg: "#FEFCE8",
          dot: "#EAB308",
          text: "#9CA3AF",
          label: "Flagged",
        };
      case "Reported":
        return {
          bg: "#FEF2F2",
          dot: "#EF4444",
          text: "#9CA3AF",
          label: `Reported (${count})`,
        };
      case "Active":
        return {
          bg: "#F0FDF4",
          dot: "#22C55E",
          text: "#9CA3AF",
          label: "Active",
        };
      case "Expired":
        return {
          bg: "#F9FAFB",
          dot: "#6B7280",
          text: "#9CA3AF",
          label: "Expired",
        };
      default:
        return {
          bg: "#F3F4F6",
          dot: "#6B7280",
          text: "#9CA3AF",
          label: status,
        };
    }
  };

  const columns = [
    {
      header: "Status",
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
              borderRadius: 1,
              width: "fit-content",
              minWidth: "100px",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: styles.dot,
                borderRadius: "2px",
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
      header: "User Id",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={row.userAvatar} sx={{ width: 28, height: 28 }} />
          <Typography>{formatLabel(row.userId)}</Typography>
        </Box>
      ),
    },
    {
      header: "Story Content",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={row.storyImage}
            alt="Story"
            sx={{ width: 40, height: 40, borderRadius: 1, objectFit: "cover" }}
          />
          <Typography>{row.storyText}</Typography>
        </Box>
      ),
    },
    {
      header: "Story Id",
      render: (row) => <Typography>{row.storyId}</Typography>,
    },
    {
      header: "Upload Date",
      render: (row) => <Typography>{row.uploadDate}</Typography>,
    },
  ];

  const handleRowClick = (row) => {
    navigate(`/story-management/${row.id}`);
  };

  return (
    <CommonTable columns={columns} rows={rows} onRowClick={handleRowClick} />
  );
}
