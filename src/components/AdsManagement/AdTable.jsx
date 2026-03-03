import { useNavigate } from "react-router-dom";
import CommonTable from "../../common/Table";
import { Box, Typography, Avatar } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

export default function AdTable({ filter, rows, tableHeaders }) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    if (status === "ACTIVE" || status === "APPROVED") return "#F0FDF4";
    if (status === "PENDING" || status === "RENEW") return "#FEFCE8";
    if (status === "REJECTED" || status === "DELETED") return "#FEE2E2";
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
                row.status === "ACTIVE" || row.status === "APPROVED"
                  ? "#10B981"
                  : row.status === "PENDING" || row.status === "RENEW"
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
      header: tableHeaders[1] || "Ad ID",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {row.adId}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: getSellerColor(row.sellerType),
              p: 1,
              borderRadius: 1,
              fontWeight: 500,
              height: 10,
            }}
          >
            <StopRoundedIcon
              fontSize="xsmall"
              sx={{
                color:
                  row.sellerType === "Private Seller" ? "#8B5CF6" : "#EF4444",
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {row.sellerType}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      header: tableHeaders[2] || "Title",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src={row.image}
            style={{
              width: 28,
              height: 28,
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          {row.title}
        </Box>
      ),
    },
    {
      header: tableHeaders[3] || "Category",
      render: (row) => row.category,
    },
    {
      header: tableHeaders[4] || "User",
      render: (row) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={row.user.avatar} sx={{ width: 28, height: 28 }} />
          {row.user.userId}
        </Box>
      ),
    },
    {
      header: tableHeaders[5] || "Date Created",
      render: (row) => row.dateCreated,
    },
    {
      header: tableHeaders[6] || "Expiry Date",
      render: (row) => row.expiryDate,
    },
  ];

  return (
    <CommonTable
      columns={columns}
      rows={rows}
      filter={filter !== "All Ads"}
      filterField="adType"
      filterValue={filter}
      onRowClick={(row) => navigate(`/ads-management/${row.id}`)}
    />
  );
}
