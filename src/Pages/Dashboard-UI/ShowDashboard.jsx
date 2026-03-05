import React from "react";
import TopBar from "../../components/layout/Topbar";
import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
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
            mt: "64px",
            minHeight: "calc(100vh - 64px)",
            p: { xs: 1.5, sm: 2, md: 3 },
            background: "#F9F9F9",
            overflow: "hidden"
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default ShowDashboard;
