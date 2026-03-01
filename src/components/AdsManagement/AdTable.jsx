import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { useNavigate } from "react-router-dom";

export default function AdTable({ filter, rows }) {
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
  const tableHeaders = [
    "Status",
    "Ad ID",
    "Title",
    "Category",
    "User ID",
    "Date Created",
    "Expiry Date",
  ];

  console.log("Current filter:", filter);
  console.log("Rows length:", rows.length);
  console.log(
    "AdTypes:",
    rows.map((r) => r.adType),
  );
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table
        sx={{
          minWidth: 900,
          bgcolor: "#F3F4F6",
          borderLeft: "1px solid #CACACA",
        }}
        aria-label="simple table"
      >
        <TableHead sx={{ bgcolor: "#F3F4F6" }}>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  borderRight:
                    index !== tableHeaders.length - 1
                      ? "1px solid #CACACA"
                      : "none",
                  fontWeight: 600,
                  color: "#9CA3AF",
                  fontStyle: "SemiBold",
                  fontFamily: "Source Sans Pro",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ mt: 3 }}>
          {rows
            .filter((row) =>
              filter === "All Ads" ? true : row.adType === filter,
            )
            .map((row, index) => {
              let active = index % 2 == 0;
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    bgcolor: active ? "#ffffffd7" : "#F3F4F6",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#E5E7EB",
                    },
                  }}
                  onClick={() => navigate(`/ads-management/${row.id}`)}
                >
                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
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
                              : row.status === "PENDING" ||
                                  row.status === "RENEW"
                                ? "#F59E0B"
                                : "#EF4444",
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {row.status}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
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
                              row.sellerType === "Private Seller"
                                ? "#8B5CF6"
                                : "#EF4444",
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {row.sellerType}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img src={row.image} style={{ width: 28 }} />
                      {row.title}
                    </Box>
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                    {row.category}
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        src={row.user.avatar}
                        sx={{ width: 28, height: 28 }}
                      />
                      {row.user.userId}
                    </Box>
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                    {row.dateCreated}
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                    {row.expiryDate}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
