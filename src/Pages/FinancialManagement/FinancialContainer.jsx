import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/Topbar";
import ReusableTabs from "../../common/Tabs";
import OverviewCards from "./OverviewCards";
import FinanceChart from "./BarChart";
import { useEffect, useState } from "react";
import { TabPanel } from "../../common/Tabs";
import FinanceTransactionsTable from "./FinanceTransactionsTable";
import SearchBar from "../../common/SearchBar";

function FinancialContainer() {
  const [finance, setFinance] = useState({
    chartData: [],
  });
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/finance.json");
        const data = await response.json();

        if (data.financeType === "OVERVIEW") {
          setFinance(data.overview);
        }
      } catch (error) {
        console.error("Error fetching Finance:", error);
      }
    }

    fetchData();
  }, []);
  console.log(finance)

  const tabsData = [
    { label: "Finance Overview", fincanceType: "OVERVIEW" },
    { label: "All Transactions", fincanceType: "ALL_TRANSACTIONS" },
    { label: "Refund Management", fincanceType: "REFUND_MANAGEMENT" },
  ];
  const [transactions, setTransactions] = useState([]);
  const [refund, setRefund] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/finance.json");
        const data = await response.json();

        if (data.financeType === "OVERVIEW") {
          setFinance(data.overview);
        }

        if (data.transactions) {
          setTransactions(data.transactions);
        }
        if (data.refunds) {
          setRefund(data.refunds);
        }

      } catch (error) {
        console.error("Error fetching Finance:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <ReusableTabs
          tabsData={tabsData}
          value={value}
          onChange={setValue}
          typeKey="financialType"
        >
          {(activeIndex) => (
            <>
              {tabsData.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>

                  {index === 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          mt: 4,
                          color: "text.secondary",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        Finance Overview
                      </Typography>

                      {finance.chartData?.length > 0 && (
                        <OverviewCards finance={finance} />
                      )}

                      {finance.chartData?.length > 0 && (
                        <FinanceChart chartData={finance.chartData} />
                      )}
                    </Box>
                  )}

                  {index === 1 && (
                    <>
                      <SearchBar text={"Search Users"} />
                      <FinanceTransactionsTable
                        rows={transactions}
                      />
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <SearchBar text={"Search Refunds"} />
                      <FinanceTransactionsTable
                        rows={refund}
                      />
                    </>
                  )}

                </TabPanel>
              ))}
            </>
          )}
        </ReusableTabs>

      </Box>
    </>
  );
}

export default FinancialContainer;
