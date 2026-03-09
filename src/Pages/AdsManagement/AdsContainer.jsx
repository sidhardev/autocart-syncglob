import React, { useEffect, useState } from "react";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import SearchBar from "../../common/SearchBar";
import AdTable from "./AdTable";

const tabsData = [
  { label: "All Ads", adType: "All Ads" },
  { label: "Pending Ads", adType: "PENDING" },
  { label: "Renew Ads", adType: "RENEW" },
  { label: "Deleted Ads", adType: "DELETED" },
  { label: "Approved Ads", adType: "APPROVED" },
  { label: "Rejected Ads", adType: "REJECTED" },
];

export default function Container() {
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);

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
    <ReusableTabs
      tabsData={tabsData}
      value={value}
      onChange={setValue}
      getCount={getCount}
    >
      {(activeIndex) => (
        <>
          {tabsData.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              <SearchBar text={"Search Ads"} />
              <AdTable
                tableHeaders={[
                  "Status",
                  "Ad ID",
                  "Title",
                  "Category",
                  "User",
                  "Date Created",
                  "Expiry Date",
                ]}
                filter={tab.adType}
                rows={rows}
              />
            </TabPanel>
          ))}
        </>
      )}
    </ReusableTabs>
  );
}
