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
            backgroundImage:
              "url('https://syncglob.com/static/media/homeBg.3bfe02e2c5bf3fda69e8.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
