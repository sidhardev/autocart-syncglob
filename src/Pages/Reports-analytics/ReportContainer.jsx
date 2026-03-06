import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import SearchBar from "../../common/SearchBar";
import ReportsTable from "./ReportsTable";

function ReportContainer() {
  const tabsData = [
    { label: "All Reports", reportType: "All Reports" },
    { label: "Read", reportType: "READ" },
    { label: "Unread", reportType: "UNREAD" },
    { label: "Ad Report", reportType: "AD_REPORT" },
    { label: "User Report", reportType: "USER_REPORT" },
  ];
  const TableHeaders = [
    "Status",
    "Reporter User Id",
    "Title",
    "Category",
    "Date Issued",
  ];
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);
  const getCount = (reportType) => {
    if (reportType === "All Reports") return rows.length;
    else if (reportType === "READ")
      return rows.filter((row) => row.status === "READ").length;
    else if (reportType === "UNREAD")
      return rows.filter((row) => row.status === "UNREAD").length;
    else return rows.filter((row) => row.reportType === reportType).length;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../../reports.json");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const getFilterField = (reportType) => {
    if (reportType === "READ" || reportType === "UNREAD") {
      return "status";
    }
    return "reportType";
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>

        <ReusableTabs
          tabsData={tabsData}
          value={value}
          onChange={setValue}
          getCount={getCount}
          typeKey="reportType"
        >
          {(activeIndex) => (
            <>
              {tabsData.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>

                  <SearchBar text={"Search Reports"}  />

                  <ReportsTable
                    filter={tab.reportType}
                    filterField={getFilterField(tab.reportType)}
                    tableHeaders={TableHeaders}
                    rows={rows}
                  />
                </TabPanel>
              ))}
            </>
          )}
        </ReusableTabs>
      </Box>
    </>
  );
}

export default ReportContainer;
