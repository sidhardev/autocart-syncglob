import { Box } from "@mui/material";
import Topbar from "./components/layout/Topbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./Pages/Dashboard-UI/Dashboard";
import "./css/root.css";
import { useState } from "react";
import Main from "./Pages/MainPage/Main";
function App() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
