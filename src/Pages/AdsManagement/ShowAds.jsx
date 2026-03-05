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
            top: "64px",
            position: "relative",
            marginLeft: "260px",

            minHeight: "calc(100vh - 64px)",
            p: 3,
          }}
        >
          <TopNav />
        </Box>
      </Box>
    </>
  );
}

export default ShowAds;
