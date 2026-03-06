import { Box, Typography } from "@mui/material";
import TopBar from "../../components/layout/Topbar";
import Sidebar from "../../components/layout/Sidebar";
import NoNotification from "./NoNotification";
import ShowNotification from "./ShowNotification";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
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
      <Layout>

        {notification.length === 0 ? (
          <NoNotification />
        ) : (
          <ShowNotification notification={notification} />
        )}
      </Layout>

    </>
  );
};

export default Notification;
