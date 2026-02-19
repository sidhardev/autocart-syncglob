import { Box } from "@mui/material";
import TopBar from "./components/layout/TopBar";
import Dashboard from "./components/Dashboard/DashBoard";
import Sidebar from "./components/layout/Sidebar";
import "./css/root.css";

function App() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Layout */}
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default App;
