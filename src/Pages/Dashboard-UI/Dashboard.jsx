import { useEffect, useState } from "react";
import DashboardDatePicker from "./DashboardDatePicker";
import { Box } from "@mui/material";
import Statscard from "../../common/Statscard";

function Dashboard() {
  const [ads, setAds] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchAd = await fetch("../../../adsData.json");
        const fetchUsers = await fetch("../../../users.json");
        const users = await fetchUsers.json();
        const ads = await fetchAd.json();
        setUsers(users || []);
        setAds(ads || []);
      } catch (error) {
        console.error("Error fetching Ads:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          p: { xs: 1, sm: 1.5, md: 2 },
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "94%",
          mx: "auto",
        }}
      >
        <DashboardDatePicker />
        <Box sx={{ mt: 4 }}>
          <Statscard cards={ads} heading={"Ads"} />
          <Statscard cards={users} heading={"Users"} />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
