import React from "react";
import TopBar from "../layout/Topbar";
import { Box } from "@mui/material";
import Sidebar from "../layout/Sidebar";
import Dashboard from "./Dashboard";

function ShowDashboard() {
  return (
    <>
      <TopBar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            top: "64px",
            position: "relative",
            overflowX: "auto",
            overflowY: "auto",
            marginLeft: "260px",
            minHeight: "calc(100vh - 64px)",
            p: 3,
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default ShowDashboard;
