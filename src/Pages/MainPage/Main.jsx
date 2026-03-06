import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Layout from "../../components/layout/Layout";
import Statscard from "../../common/Statscard";
import FinancialCard from "../../common/FinancialCard";
import FinanceChart from "../FinancialManagement/BarChart";

function Main() {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = React.useState({
    adsCards: [],
    usersCards: [],
    financialOverviewCards: [],
    messageInboxMailCards: [],
    storiesCards: [],
    chartData: []
  });

  React.useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch("/main-dashboard.json");
        if (res.ok) {
          const data = await res.json();
          setDashboardData(data);
        }
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      }
    }

    fetchDashboardData();
  }, []);

  const {
    adsCards,
    usersCards,
    financialOverviewCards,
    messageInboxMailCards,
    storiesCards,
    chartData
  } = dashboardData;

  return (
    <Layout>
      <Box
        sx={{
          background: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              py: { xs: 2, sm: 3, md: 4 }
            }}
          >
            {/* Ads */}
                          <Grid container spacing={3} sx={{ mb: 1 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>

            <Box
              onClick={() => navigate("/ads-management")}
              sx={{ cursor: "pointer", mb: { xs: 3, md: 4 }, justifyContent: "center", alignItems: "center" }}
            >
              <Statscard cards={adsCards} heading="Ads" />
            </Box>
            </Grid>

            {/* Users */}
         <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
              <Statscard cards={usersCards} heading="Users" />
            </Grid>

            {/* Finance Overview */}
            <Box
              onClick={() => navigate("/financial-management")}
              sx={{ cursor: "pointer", mb: { xs: 3, md: 4 } }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  mb: 2,
                  mt: { xs: 4, md: 8 },
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center"
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
                    <path
                      d="M13.0389 16.875V11.25C13.0389 10.914 13.1569 10.628 13.3929 10.392C13.6279 10.156 13.9139 10.038 14.2509 10.038C14.5879 10.038 14.8739 10.156 15.1089 10.392C15.3449 10.628 15.4629 10.914 15.4629 11.25V16.875C15.4629 17.212 15.3449 17.498 15.1089 17.733C14.8729 17.969 14.5869 18.087 14.2509 18.087C13.9149 18.087 13.6289 17.969 13.3929 17.733C13.1569 17.497 13.0389 17.211 13.0389 16.875ZM19.5594 18.816V5.24999C19.5594 4.91399 19.6769 4.62799 19.9119 4.39199C20.1479 4.15599 20.4339 4.03799 20.7699 4.03799C21.1069 4.03799 21.3929 4.15599 21.6279 4.39199C21.8639 4.62799 21.9819 4.91399 21.9819 5.24999V18.816C21.9819 19.22 21.8579 19.523 21.6099 19.725C21.3609 19.927 21.0824 20.028 20.7744 20.028C20.4664 20.028 20.1864 19.927 19.9344 19.725C19.6824 19.523 19.5574 19.22 19.5594 18.816Z"
                      fill="currentColor"
                    />
                  </svg>
                </Box>
                Finance Overview
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {financialOverviewCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  bgcolor: "#fff",
                  p: { xs: 1.5, sm: 2, md: 3 },
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  overflowX: "auto"
                }}
              >
                <FinanceChart chartData={chartData} />
              </Box>
            </Box>

            {/* Messages */}
            <Box
              onClick={() => navigate("/message-management")}
              sx={{ cursor: "pointer", mb: { xs: 3, md: 4 } }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  mb: 4,
                  mt: { xs: 4, md: 8 },
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <ChatOutlinedIcon sx={{ mr: 1, color: "#6c757d" }} />
                Messages
              </Typography>

              <Typography sx={{ color: "#9ca3af", mb: 2, fontWeight: 500 }}>
                Flagged Messages
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {messageInboxMailCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ color: "#9ca3af", mb: 2, fontWeight: 500 }}>
                Reported Messages
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {messageInboxMailCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Mail */}
            <Box
              onClick={() => navigate("/email-management")}
              sx={{ cursor: "pointer", mb: { xs: 3, md: 4 } }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  mb: 4,
                  mt: { xs: 4, md: 8 },
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <MailOutlineIcon sx={{ mr: 1, color: "#6c757d" }} />
                Mail
              </Typography>

              <Typography sx={{ color: "#9ca3af", mb: 2, fontWeight: 500 }}>
                Inbox Mail
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {messageInboxMailCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ color: "#9ca3af", mb: 2, fontWeight: 500 }}>
                Outbox Mail
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {messageInboxMailCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Stories */}
            <Box
              onClick={() => navigate("/story-management")}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  mb: 2,
                  mt: { xs: 4, md: 8 },
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <DonutLargeOutlinedIcon sx={{ mr: 1, color: "#6c757d" }} />
                Stories
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }} justifyContent={{ xs: "center", sm: "flex-start" }} alignItems={{ xs: "center", sm: "flex-start" }}>
                {storiesCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <FinancialCard {...card} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Main;