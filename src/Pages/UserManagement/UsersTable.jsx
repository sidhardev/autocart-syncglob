import { useNavigate } from "react-router-dom";
import CommonTable from "../../common/Table";
import { Box, Typography, Avatar } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

export default function UsersTable({ filter, rows, tableHeaders }) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    if (status === "Active") return "#F0FDF4";
    if (status === "Suspended") return "#FEFCE8";
    if (status === "Banned") return "#FEE2E2";
    return "default";
  };

  const getSellerColor = (sellerType) => {
    if (sellerType === "Private Seller") return "#FAF5FF";
    if (sellerType === "Trade Seller") return "#ECFEFF";
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
                row.status === "Active"
                  ? "#10B981"
                  : row.status === "Suspended"
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
      header: tableHeaders[1] || "Name",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
           {row.name}
        </Box>
      ),
    },
    {
      header: tableHeaders[2] || "Email",
      render: (row) => row.email,
    },
    {
      header: tableHeaders[3] || "Ad posted",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {row.adsPosted}
        </Box>
      ),
    },
    {
      header: tableHeaders[4] || "User ID",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={row.imageUrl} sx={{ width: 28, height: 28 }} />
          {row.userId}
        </Box>
      ),
    },
    {
      header: tableHeaders[5] || "Registration Date",
      render: (row) => row.registrationDate,
    },
  ];

  return (
    <CommonTable
      columns={columns}
      rows={rows}
      filter={filter !== "All Users"}
      filterField="userType"
      filterValue={filter}
      onRowClick={(row) => navigate(`/user-management/${row.id}`)}
    />
  );
}