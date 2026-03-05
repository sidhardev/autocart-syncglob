import React from "react";
import TopNav from "./AdsContainer";
import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";

function ShowAds() {
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
            overflow: "auto",
            background: "#F9F9F9",
            p: { xs: 2, sm: 3 },
          }}
        >
          <TopNav />
        </Box>
      </Box>
    </>
  );
}

export default ShowAds;
