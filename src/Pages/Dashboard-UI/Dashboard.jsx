import { useEffect, useState } from "react";
import DashboardDatePicker from "./DashboardDatePicker";
import { Box, Grid, Typography } from "@mui/material";
import FinancialCard from "../../common/FinancialCard";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import StatsCard from "../../common/Statscard";

function Dashboard() {
  const [ads, setAds] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchAd = await fetch("../../../adsData.json");
        const fetchUsers = await fetch("../../../users.json");
        const usersData = await fetchUsers.json();
        const adsData = await fetchAd.json();
        setUsers(usersData || []);
        setAds(adsData || []);
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
           display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
           mx: "auto",
        }}
      >
        <DashboardDatePicker />
        <Box sx={{}}>
          {/* ADS SECTION */}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              mb: 2,
              mt: { xs: 4, sm: 6, md: 8 },
              color: "text.secondary",
              display: "flex",
               fontSize: { xs: "1rem", sm: "1.25rem" },
               
            }}
          >
            <AdsClickIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
            Ads
          </Typography>
          <Grid
  container
  spacing={3}
  sx={{ mb: 4, display: "flex", flexWrap: "wrap",alignItems: "stretch" }}
  >
  {ads.map((card) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
      <StatsCard
        title={card.title}
        amount={card.data}
        change={card.ratio}
        dotColor={card.color}
        unit="Ads"
      />
    </Grid>
  ))}
</Grid>
          

          {/* USERS SECTION */}
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              mb: 2,
              mt: { xs: 4, sm: 6, md: 8 },
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M17.9 17.3C20.6 17.3 22.7 15.1 22.7 12.4C22.7 9.7 20.5 7.6 17.8 7.6C15.1 7.6 13 9.8 13 12.4C13 15.1 15.2 17.3 17.9 17.3Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M26.1 22.7L25.9 22.4C23.9 20.2 21.1 18.9 18.1 19C15.1 18.9 12.2 20.2 10.2 22.4L10 22.7V30.3C10 31.2 10.7 32 11.7 32H24.5C25.4 32 26.2 31.2 26.2 30.3V22.7H26.1Z"
                    fill="#9CA3AF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            Users
          </Typography>
<Grid
  container
  spacing={3}
  sx={{ mb: 4, display: "flex", flexWrap: "wrap",alignItems: "stretch" }}
  >         {users.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                <StatsCard
                  title={card.title}
                  amount={card.data}
                  change={card.ratio}
                  dotColor={card.color}
                  unit="Users"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
