import { Box } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import FinancialContainer from "./FinancialContainer";

function FinancialUI() {
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
            p: { xs: 2, sm: 3 },
            background: "#F9F9F9"
          }}
        >
          <FinancialContainer />
        </Box>
      </Box>
    </>
  );
}

export default FinancialUI;
