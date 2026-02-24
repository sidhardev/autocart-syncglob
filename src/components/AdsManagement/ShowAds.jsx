import React from "react";
import TopNav from "./TopNav";
import { Box } from "@mui/material";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/Topbar";

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
            backgroundImage:
              "url('https://syncglob.com/static/media/homeBg.3bfe02e2c5bf3fda69e8.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
