import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function AdTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../../ads.json");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    if (status === "Active") return "#F0FDF4";
    if (status === "Suspended") return "#FEFCE8";
    if (status === "Banned") return "#FEF2F2";
    return "default";
  };

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
        <TableHead sx={{ bgcolor: "#E5E7EB" }}>
          <TableRow>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              Status
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              Ad ID
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              Title
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              Category
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              User ID
            </TableCell>
            <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
              Date Created
            </TableCell>
            <TableCell>Expiry Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ mt: 3 }}>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                <Typography variant="body2" color="text.secondary" sx={{ bgcolor: getStatusColor(row.status), p: 1, borderRadius: 1 }}>
                  {row.status}
                </Typography>
              </TableCell>

              <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                {row.adId}
              </TableCell>

              <TableCell sx={{ borderRight: "1px solid #CACACA" }}>
                {row.title}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
