import { Box, Grid } from "@mui/material";
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
    { label: "Expired Stories" },
  ];

  const cardData = [
    {
      id: 1,
      title: "Today",
      amount: 852,
      change: 9.2,
      comparisonText: "Compared to yesterday",
      currency: "",
    },
    {
      id: 2,
      title: "This Week",
      amount: 54752,
      change: -0.2,
      comparisonText: "Compared to previous Week",
      currency: "",
    },
    {
      id: 3,
      title: "This Month",
      amount: 255475,
      change: 9.2,
      comparisonText: "Compared to previous month",
      currency: "",
    },
    {
      id: 4,
      title: "This Year",
      amount: 22534285,
      change: -8.4,
      comparisonText: "Compared to previous year",
      currency: "",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 3 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <ReusableTabs tabsData={tabsData} value={value} onChange={setValue}>
        {() => (
          <Box sx={{ width: "100%", mt: 2 }}>
            {/* SEARCH */}
            <Box sx={{ mb: 3, width: "100%" }}>
              <SearchBar text="Search User" width="80%" />
            </Box>

            <TabPanel value={value} index={0}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "stretch",
                  width: "100%",
                  gap: 3,
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  sx={{
                    width: "100%",
                    margin: 0,
                    "& > .MuiGrid-item": {
                      paddingTop: { xs: 2, md: 3 },
                    },
                  }}
                >
                  {cardData.map((card) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                      <FinancialCard
                        title={card.title}
                        amount={card.amount}
                        change={card.change}
                        comparisonText={card.comparisonText}
                        currency={card.currency}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ width: "100%", overflowX: "auto" }}>
                  <StoryTable rows={storyData} />
                </Box>
              </Box>
            </TabPanel>

            {[1, 2, 3, 4].map((idx) => {
              const filterStatus = tabsData[idx].label.split(" ")[0];
              return (
                <TabPanel key={idx} value={value} index={idx}>
                  <Box sx={{ width: "100%", overflowX: "auto" }}>
                    <StoryTable
                      rows={storyData.filter(
                        (row) => row.status === filterStatus,
                      )}
                    />
                  </Box>
                </TabPanel>
              );
            })}
          </Box>
        )}
      </ReusableTabs>
    </Box>
  );
}

export default StoryContainer;
