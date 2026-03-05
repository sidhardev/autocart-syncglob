import { Box } from "@mui/material";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import { useEffect, useState } from "react";
import SearchBar from "../../common/SearchBar";
import FinancialCard from "../../common/FinancialCard";
import StoryTable from "./StoryTable";

function StoryContainer() {
    const [value, setValue] = useState(0);
    const [storyData, setStoryData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/story-data.json");
                const data = await response.json();
                setStoryData(data);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        }
        fetchData();
    }, []);

    const tabsData = [
        { label: "Story Overview" },
        { label: "Active Stories" },
        { label: "Flagged Stories" },
        { label: "Reported Stories" },
        { label: "Expired Stories" }
    ];

    const cardData = [
        { id: 1, title: "Today", amount: 852, change: 9.2, comparisonText: "Compared to yesterday", currency: "" },
        { id: 2, title: "This Week", amount: 54752, change: -0.2, comparisonText: "Compared to previous Week", currency: "" },
        { id: 3, title: "This Month", amount: 255475, change: 9.2, comparisonText: "Compared to previous month", currency: "" },
        { id: 4, title: "This Year", amount: 22534285, change: -8.4, comparisonText: "Compared to previous year", currency: "" }
    ];

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
                            <Box sx={{ width: { xs: "100%", md: "400px" } }}>
                                <SearchBar text="Search User" width="100%" />
                            </Box>
                        </Box>

                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", mt: -2 }}>
                                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 2 }}>
                                    {cardData.map((card) => (
                                        <FinancialCard
                                            key={card.id}
                                            title={card.title}
                                            amount={card.amount}
                                            change={card.change}
                                            comparisonText={card.comparisonText}
                                            currency={card.currency}
                                        />
                                    ))}
                                </Box>

                                <StoryTable rows={storyData} />
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <Box sx={{ mt: -2 }}>
                                <StoryTable rows={storyData.filter(row => row.status === "Active")} />
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <Box sx={{ mt: -2 }}>
                                <StoryTable rows={storyData.filter(row => row.status === "Flagged")} />
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={3}>
                            <Box sx={{ mt: -2 }}>
                                <StoryTable rows={storyData.filter(row => row.status === "Reported")} />
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={4}>
                            <Box sx={{ mt: -2 }}>
                                <StoryTable rows={storyData.filter(row => row.status === "Expired")} />
                            </Box>
                        </TabPanel>
                    </Box>
                )}
            </ReusableTabs>
        </Box>
    );
}

export default StoryContainer;