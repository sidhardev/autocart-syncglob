import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import AdTable from "./AdTable";
import { useEffect } from "react";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const tabsData = [
  { label: "All Ads", adType: "All Ads" },
  { label: "Pending Ads", adType: "PENDING" },
  { label: "Renew Ads", adType: "RENEW" },
  { label: "Deleted Ads", adType: "DELETED" },
  { label: "Approved Ads", adType: "APPROVED" },
  { label: "Rejected Ads", adType: "REJECTED" },
];

export default function TopNav() {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const getCount = (adType) => {
    if (adType === "All Ads") return rows.length;
    return rows.filter((row) => row.adType === adType).length;
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../../ads.json");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        variant="fullWidth"
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTab-root": {
            textTransform: "none",
          },
          "& .MuiTab-root.Mui-selected": {
            backgroundColor: "rgb(58, 193, 239)",
            color: "#fff",
            borderRadius: 3,
          },
        }}
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={`${tab.label} (${getCount(tab.adType)})`}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>

      {tabsData.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <SearchBar />
          {<AdTable filter={tab.adType} rows={rows} />}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
