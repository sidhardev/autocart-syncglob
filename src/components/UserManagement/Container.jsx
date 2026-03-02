import { useEffect, useState } from "react";
import TopNav from "../AdsManagement/Container";
import TopBar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import SearchBar from "../../common/SearchBar";
import UsersTable from "./UsersTable";

function Container() {
  const tabsData = [
    { label: "All Users", userType: "All Users" },
    { label: "Active Users", userType: "ACTIVE" },
    { label: "Suspended Users", userType: "SUSPENDED" },
    { label: "Banned Users", userType: "BANNED" },
  ];
  const TableHeaders = [
    "Status",
    "Name",
    "Email",
    "Ad Posted",
    "User ID",
    "Registration Date",
  ];
  const [value, setValue] = useState(0);
  const [rows, setRows] = useState([]);
  const getCount = (userType) => {
    if (userType === "All Users") return rows.length;
    return rows.filter((row) => row.userType === userType).length;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../../userData.json");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ReusableTabs
        tabsData={tabsData}
        value={value}
        onChange={setValue}
        getCount={getCount}
        typeKey="userType"
      >
        {(activeIndex) => (
          <>
            {tabsData.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                <SearchBar text={"Search Users"} />
                <UsersTable
                  filter={tab.userType}
                  rows={rows}
                  tableHeaders={TableHeaders}
                />
              </TabPanel>
            ))}
          </>
        )}
      </ReusableTabs>
    </div>
  );
}

export default Container;
