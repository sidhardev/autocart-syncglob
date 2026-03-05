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
            marginLeft: "260px",
            minHeight: "calc(100vh - 64px)",
            p: 3,
          }}
        >
          <ReportContainer />
        </Box>
      </Box>
    </>
  );
}

export default ReportUI;
