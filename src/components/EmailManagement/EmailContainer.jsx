import { Box, Button, Typography } from "@mui/material";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import { useEffect, useState } from "react";
import SearchBar from "../../common/SearchBar";
import CalendarIcon from "../../Icons/CalanderIcon";
import FinancialCard from "../../common/FinancialCard";
import EmailTable from "./EmailTable";

function EmailContainer() {
    const [value, setValue] = useState(0);
    const [emailData, setEmailData] = useState(null);
    const [inboxEmails, setInboxEmails] = useState([]);
    const [activeInboxTab, setActiveInboxTab] = useState("All");
    const [outboxEmails, setOutboxEmails] = useState([]);
    const [activeOutboxTab, setActiveOutboxTab] = useState("All");
    const [draftEmails, setDraftEmails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/message-management.json");
                const data = await response.json();
                setEmailData(data);

                const emailsResponse = await fetch("/email-data.json");
                const emailsData = await emailsResponse.json();
                setInboxEmails(emailsData.inbox || []);
                setOutboxEmails(emailsData.outbox || []);
                setDraftEmails(emailsData.draft || []);
            } catch (error) {
                console.error("Error fetching Message:", error);
            }
        }

        fetchData();
    }, []);

    const tabsData = [
        { label: "Mail Overview" },
        { label: "Inbox Mail" },
        { label: "Outbox Mail" },
        { label: "Draft Mail" }
    ];

    const filterTabs = ["All", "Unread", "Read"];
    const outboxFilterTabs = ["All", "Delivered", "Opened", "Not Delivered"];

    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <ReusableTabs
                tabsData={tabsData}
                value={value}
                onChange={setValue}
            >
                {(activeIndex) => (
                    <Box sx={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                width: "100%",
                                px: 3,
                                pt: 2,
                            }}
                        >
                            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                                <Box sx={{ width: { xs: "100%", md: "400px" } }}>
                                    <SearchBar text="Search User" width="100%" />
                                </Box>
                                <Button
                                    variant="outlined"
                                    startIcon={<CalendarIcon />}
                                    sx={{ whiteSpace: "nowrap", color: "#9CA3AF", border: "1px solid #CACACA" }}
                                >
                                    From Date
                                </Button>

                                <Button
                                    variant="outlined"
                                    startIcon={<CalendarIcon />}
                                    sx={{ whiteSpace: "nowrap", color: "#9CA3AF", border: "1px solid #CACACA" }}
                                >
                                    To Date
                                </Button>
                            </Box>

                            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                                <Button
                                    variant="outlined"
                                    sx={{ whiteSpace: "nowrap", borderRadius: 2 }}
                                >
                                    Compose Mail
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{ whiteSpace: "nowrap", color: "#9CA3AF", border: "1px solid #CACACA", borderRadius: 2 }}
                                >
                                    Bulk Mail
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{ whiteSpace: "nowrap", color: "#9CA3AF", border: "1px solid #CACACA", borderRadius: 2 }}
                                >
                                    Download
                                </Button>
                            </Box>
                        </Box>

                         <TabPanel value={value} index={0}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", mt: -2 }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{ color: "text.primary" }}
                                >
                                    Inbox Mail
                                </Typography>
                                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 2 }}>
                                    <FinancialCard title="Today" amount={54} change={9.2} comparisonText="Compared to yesterday" currency="" />
                                    <FinancialCard title="This Week" amount={25455} change={-0.2} comparisonText="Compared to Last week" currency="" />
                                    <FinancialCard title="This Month" amount={347588} change={9.2} comparisonText="Compared to Last Month" currency="" />
                                    <FinancialCard title="This Year" amount={8752235} change={-8.4} comparisonText="Compared to Last Year" currency="" />
                                </Box>

                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{ mt: 2, color: "text.primary" }}
                                >
                                    Outbox Mail
                                </Typography>
                                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 2 }}>
                                    <FinancialCard title="Today" amount={54} change={9.2} comparisonText="Compared to yesterday" currency="" />
                                    <FinancialCard title="This Week" amount={25455} change={-0.2} comparisonText="Compared to Last week" currency="" />
                                    <FinancialCard title="This Month" amount={347588} change={9.2} comparisonText="Compared to Last Month" currency="" />
                                    <FinancialCard title="This Year" amount={8752235} change={-8.4} comparisonText="Compared to Last Year" currency="" />
                                </Box>
                            </Box>
                        </TabPanel>

                         <TabPanel value={value} index={1}>
                            <Box sx={{ mt: -2 }}>
                                 <Box sx={{ display: "flex", gap: 4, mb: 1 }}>
                                    {filterTabs.map((tab) => (
                                        <Typography
                                            key={tab}
                                            onClick={() => setActiveInboxTab(tab)}
                                            sx={{
                                                pb: 1,
                                                cursor: "pointer",
                                                color: activeInboxTab === tab ? "#05A629" : "text.secondary",
                                                borderBottom: activeInboxTab === tab ? "2px solid #05A629" : "2px solid transparent",
                                                fontWeight: activeInboxTab === tab ? 600 : 400,
                                            }}
                                        >
                                            {tab}
                                        </Typography>
                                    ))}
                                </Box>

                                <EmailTable
                                    rows={inboxEmails.filter(row => activeInboxTab === "All" ? true : row.status === activeInboxTab)}
                                />
                            </Box>
                        </TabPanel>

                         <TabPanel value={value} index={2}>
                            <Box sx={{ mt: -2 }}>
                                 <Box sx={{ display: "flex", gap: 4, mb: 1 }}>
                                    {outboxFilterTabs.map((tab) => (
                                        <Typography
                                            key={tab}
                                            onClick={() => setActiveOutboxTab(tab)}
                                            sx={{
                                                pb: 1,
                                                cursor: "pointer",
                                                color: activeOutboxTab === tab ? "#05A629" : "text.secondary",
                                                borderBottom: activeOutboxTab === tab ? "2px solid #05A629" : "2px solid transparent",
                                                fontWeight: activeOutboxTab === tab ? 600 : 400,
                                            }}
                                        >
                                            {tab}
                                        </Typography>
                                    ))}
                                </Box>

                                <EmailTable
                                    type="outbox"
                                    rows={outboxEmails.filter(row => activeOutboxTab === "All" ? true : row.status === activeOutboxTab)}
                                />
                            </Box>
                        </TabPanel>

                         <TabPanel value={value} index={3}>
                            <Box sx={{ mt: -2 }}>
                                <EmailTable
                                    type="draft"
                                    rows={draftEmails}
                                />
                            </Box>
                        </TabPanel>
                    </Box>
                )}
            </ReusableTabs>
        </Box>
    );
}

export default EmailContainer;