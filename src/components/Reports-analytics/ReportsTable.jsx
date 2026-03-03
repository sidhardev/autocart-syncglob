import { useNavigate } from "react-router-dom";
import CommonTable from "../../common/Table";
import { Box, Typography, Avatar } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

export default function ReportsTable({
  filter,
  filterField,
  rows,
  tableHeaders,
}) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    if (status === "READ") return "#F0FDF4";
    if (status === "UNREAD") return "#FEE2E2";
    return "default";
  };

  const columns = [
    {
      header: tableHeaders[0] || "Status",
      render: (row) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: getStatusColor(row.status),
            p: 1,
            borderRadius: 1,
            fontWeight: 500,
          }}
        >
          <StopRoundedIcon
            fontSize="small"
            sx={{
              color:
                row.status === "READ"
                  ? "#10B981"
                  : row.status === "UNREAD"
                    ? "#F59E0B"
                    : "#EF4444",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {row.status}
          </Typography>
        </Box>
      ),
    },
    {
      header: tableHeaders[1] || " Reporter User ID",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={row.imageUrl} sx={{ width: 28, height: 28 }} />
          {row.reporterUserId}
        </Box>
      ),
    },
    {
      header: tableHeaders[2] || "Title",
      render: (row) => row.title,
    },
    {
      header: tableHeaders[3] || "Category",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {row.category}
        </Box>
      ),
    },

    {
      header: tableHeaders[4] || "Date Issued",
      render: (row) => row.dateIssued,
    },
  ];

  return (
    <CommonTable
      columns={columns}
      rows={rows}
      filter={filter !== "All Reports"}
      filterField={filterField}
      filterValue={filter}
      onRowClick={(row) => navigate(`/report-analytics/${row.id}`)}
    />
  );
}
