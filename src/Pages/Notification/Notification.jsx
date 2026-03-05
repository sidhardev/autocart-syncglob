import { Box, Typography } from "@mui/material";
import TopBar from "../../components/layout/Topbar";
import Sidebar from "../../components/layout/Sidebar";
import NoNotification from "./NoNotification";
import ShowNotification from "./ShowNotification";
import { useEffect, useState } from "react";
const Notification = () => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    async function fetchNotification() {
      try {
        const response = await fetch("../../../notification.json");
        const data = await response.json();
        setNotification(data || []);
      } catch (error) {
        console.error("Error fetching notification:", error);
      }
    }
    fetchNotification();
  }, []);
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
          {notification.length === 0 ? (
            <NoNotification />
          ) : (
            <ShowNotification notification={notification} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Notification;
