import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import ReportContainer from "./ReportContainer";

function ReportUI() {
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
            minHeight: "calc(100vh - 64px)", overflow: "auto",
            p: 3,
            background: "#F9F9F9"
          }}
        >
          <ReportContainer />
        </Box>
      </Box>
    </>
  );
}

export default ReportUI;
