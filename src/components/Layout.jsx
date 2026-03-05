import { Box } from "@mui/material";
import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/Topbar";
import ErrorBoundary from "./Error/ErrorBoundary";

function Layout({ children }) {
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
            <ErrorBoundary>
          {children}
            </ErrorBoundary>
        </Box>
      </Box>
    </>
  );
}

export default Layout;