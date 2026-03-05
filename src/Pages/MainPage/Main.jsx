import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import Statscard from "../../common/Statscard";
import FinancialCard from "../../common/FinancialCard";
import FinanceChart from "../FinancialManagement/BarChart";
import { useNavigate } from "react-router-dom";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

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
        <>
            <Topbar />

            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box
                    sx={{
                        flexGrow: 1,
                        width: "100%",
                        top: "64px",
                        position: "relative",
                        minHeight: "calc(100vh - 64px)",
                        p: 4,
                        marginLeft: "260px",
                        background: "#F9F9F9",
                    }}
                >
                    <Box onClick={() => navigate("/ads-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Statscard cards={adsCards} heading="Ads" />
                    </Box>

                    <Box onClick={() => navigate("/users-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Statscard cards={usersCards} heading="Users" />
                    </Box>

                    <Box onClick={() => navigate("/financial-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: 8, color: "text.secondary", display: "flex", alignItems: "center" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 1 }}>
                                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0389 16.875V11.25C13.0389 10.914 13.1569 10.628 13.3929 10.392C13.6279 10.156 13.9139 10.038 14.2509 10.038C14.5879 10.038 14.8739 10.156 15.1089 10.392C15.3449 10.628 15.4629 10.914 15.4629 11.25V16.875C15.4629 17.212 15.3449 17.498 15.1089 17.733C14.8729 17.969 14.5869 18.087 14.2509 18.087C13.9149 18.087 13.6289 17.969 13.3929 17.733C13.1569 17.497 13.0389 17.211 13.0389 16.875ZM19.5594 18.816V5.24999C19.5594 4.91399 19.6769 4.62799 19.9119 4.39199C20.1479 4.15599 20.4339 4.03799 20.7699 4.03799C21.1069 4.03799 21.3929 4.15599 21.6279 4.39199C21.8639 4.62799 21.9819 4.91399 21.9819 5.24999V18.816C21.9819 19.22 21.8579 19.523 21.6099 19.725C21.3609 19.927 21.0824 20.028 20.7744 20.028C20.4664 20.028 20.1864 19.927 19.9344 19.725C19.6824 19.523 19.5574 19.22 19.5594 18.816ZM6.46289 22.029V17.25C6.46289 16.914 6.58039 16.628 6.81539 16.392C7.05139 16.156 7.33789 16.038 7.67489 16.038C8.01189 16.038 8.29789 16.156 8.53289 16.392C8.76789 16.628 8.88539 16.914 8.88539 17.25V22.0305C8.88539 22.4345 8.76139 22.737 8.51339 22.938C8.26539 23.14 7.98689 23.241 7.67789 23.241C7.36989 23.241 7.08989 23.14 6.83789 22.938C6.58789 22.737 6.46289 22.4345 6.46289 22.0305ZM8.09039 30.825C7.75539 30.825 7.52389 30.6725 7.39589 30.3675C7.26789 30.0635 7.32589 29.789 7.56989 29.544L13.4319 23.6835C13.6489 23.4655 13.9164 23.344 14.2344 23.319C14.5524 23.294 14.8349 23.3905 15.0819 23.6085L19.5594 27.456L29.6889 17.325H27.0009C26.7879 17.325 26.6099 17.253 26.4669 17.109C26.3239 16.965 26.2519 16.7865 26.2509 16.5735C26.2499 16.3605 26.3219 16.1825 26.4669 16.0395C26.6119 15.8965 26.7899 15.825 27.0009 15.825H31.0389C31.3829 15.825 31.6709 15.941 31.9029 16.173C32.1349 16.405 32.2509 16.693 32.2509 17.037V21.075C32.2509 21.288 32.1789 21.466 32.0349 21.609C31.8909 21.752 31.7124 21.824 31.4994 21.825C31.2864 21.826 31.1084 21.754 30.9654 21.609C30.8224 21.464 30.7509 21.286 30.7509 21.075V18.387L20.3949 28.743C20.1779 28.96 19.9104 29.081 19.5924 29.106C19.2744 29.131 18.9919 29.0345 18.7449 28.8165L14.2674 24.969L8.63189 30.606C8.56789 30.666 8.48739 30.7175 8.39039 30.7605C8.29339 30.8035 8.19339 30.825 8.09039 30.825Z" fill="currentColor" />
                                </svg>
                            </Box>
                            Finance Overview
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
                            {financialOverviewCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>
                        <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 3, border: "1px solid #e5e7eb" }}>
                            <FinanceChart chartData={chartData} />
                        </Box>
                    </Box>

                    {/* Messages Section */}
                    <Box onClick={() => navigate("/message-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 4, mt: 8, color: "text.secondary", display: "flex", alignItems: "center" }}>
                            <ChatOutlinedIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
                            Messages
                        </Typography>

                        <Typography variant="body1" sx={{ color: "#9ca3af", mb: 1.5, fontWeight: 500 }}>
                            Flagged Messages
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
                            {messageInboxMailCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>

                        <Typography variant="body1" sx={{ color: "#9ca3af", mb: 1.5, fontWeight: 500 }}>
                            Reported Messages
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
                            {messageInboxMailCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>
                    </Box>

                    <Box onClick={() => navigate("/email-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 4, mt: 8, color: "text.secondary", display: "flex", alignItems: "center" }}>
                            <MailOutlineIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
                            Mail
                        </Typography>

                        <Typography variant="body1" sx={{ color: "#9ca3af", mb: 1.5, fontWeight: 500 }}>
                            Inbox Mail
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
                            {messageInboxMailCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>

                        <Typography variant="body1" sx={{ color: "#9ca3af", mb: 1.5, fontWeight: 500 }}>
                            Outbox Mail
                        </Typography>
                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
                            {messageInboxMailCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>
                    </Box>

                    <Box onClick={() => navigate("/story-management")} sx={{ cursor: "pointer", mb: 4 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, mt: 8, color: "text.secondary", display: "flex", alignItems: "center" }}>
                            <DonutLargeOutlinedIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
                            Stories
                        </Typography>

                        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                            {storiesCards.map((card) => (
                                <FinancialCard key={card.id} {...card} />
                            ))}
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
}

export default Main;
