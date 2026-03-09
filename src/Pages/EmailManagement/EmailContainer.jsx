import { Box, Button, Typography } from "@mui/material";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import { useEffect, useState } from "react";
import SearchBar from "../../common/SearchBar";
import CalendarIcon from "../../Icons/CalanderIcon";
import FinancialCard from "../../common/FinancialCard";
import EmailTable from "./EmailTable";
import { useNavigate } from "react-router-dom";

function EmailContainer() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const [inboxEmails, setInboxEmails] = useState([]);
  const [outboxEmails, setOutboxEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]);

  const [activeInboxTab, setActiveInboxTab] = useState("All");
  const [activeOutboxTab, setActiveOutboxTab] = useState("All");

  const filterTabs = ["All", "Unread", "Read"];
  const outboxFilterTabs = ["All", "Delivered", "Opened", "Not Delivered"];

  const tabsData = [
    { label: "Mail Overview" },
    { label: "Inbox Mail" },
    { label: "Outbox Mail" },
    { label: "Draft Mail" },
  ];

  const cardData = [
    { id: 1, title: "Today", amount: 54, change: 9.2 },
    { id: 2, title: "This Week", amount: 25455, change: -0.2 },
    { id: 3, title: "This Month", amount: 347588, change: 9.2 },
    { id: 4, title: "This Year", amount: 8752235, change: -8.4 },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const emailsResponse = await fetch("/email-data.json");
        const emailsData = await emailsResponse.json();

        setInboxEmails(emailsData.inbox || []);
        setOutboxEmails(emailsData.outbox || []);
        setDraftEmails(emailsData.draft || []);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    }

    fetchData();
  }, []);

  const handleRowClick = (row, type) => {
    navigate(`/email-management/${row.id}?type=${type}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ReusableTabs tabsData={tabsData} value={value} onChange={setValue}>
        {(activeIndex) => (
          <>
            {tabsData.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                {/* HEADER SECTION */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    width: "100%",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: 2, md: 4 },
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: { xs: "100%", md: "400px" } }}>
                      <SearchBar text="Search User" width="100%" />
                    </Box>

                    <Button
                      startIcon={<CalendarIcon />}
                      sx={{
                        whiteSpace: "nowrap",
                        border: "1px solid #CACACA",
                        color: "#9CA3AF",
                      }}
                    >
                      From Date
                    </Button>

                    <Button
                      startIcon={<CalendarIcon />}
                      sx={{
                        whiteSpace: "nowrap",
                        border: "1px solid #CACACA",
                        color: "#9CA3AF",
                      }}
                    >
                      To Date
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        whiteSpace: "nowrap",
                        border: "1px solid #CACACA",
                        color: "#9CA3AF",
                      }}
                    >
                      Compose Mail
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        whiteSpace: "nowrap",
                        border: "1px solid #CACACA",
                        color: "#9CA3AF",
                      }}
                    >
                      Bulk Mail
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        whiteSpace: "nowrap",
                        border: "1px solid #CACACA",
                        color: "#9CA3AF",
                      }}
                    >
                      Download
                    </Button>
                  </Box>
                </Box>

                {index === 0 && (
                  <>
                    <Typography variant="h6" fontWeight={600}>
                      Inbox Mail
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                      {cardData.map((card) => (
                        <FinancialCard key={card.id} {...card} />
                      ))}
                    </Box>

                    <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
                      Outbox Mail
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                      {cardData.map((card) => (
                        <FinancialCard key={card.id} {...card} />
                      ))}
                    </Box>
                  </>
                )}

                {index === 1 && (
                  <>
                    <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
                      {filterTabs.map((tab) => (
                        <Typography
                          key={tab}
                          onClick={() => setActiveInboxTab(tab)}
                          sx={{
                            cursor: "pointer",
                            pb: 1,
                            borderBottom:
                              activeInboxTab === tab
                                ? "2px solid #05A629"
                                : "2px solid transparent",
                            color:
                              activeInboxTab === tab
                                ? "#05A629"
                                : "text.secondary",
                          }}
                        >
                          {tab}
                        </Typography>
                      ))}
                    </Box>

                    <EmailTable
                      rows={inboxEmails.filter((row) =>
                        activeInboxTab === "All"
                          ? true
                          : row.status === activeInboxTab,
                      )}
                      onRowClick={(row) => handleRowClick(row, "inbox")}
                    />
                  </>
                )}

                {index === 2 && (
                  <>
                    <Box sx={{ display: "flex", gap: 2, mb: 2, width: "100%" }}>
                      {outboxFilterTabs.map((tab) => (
                        <Typography
                          key={tab}
                          onClick={() => setActiveOutboxTab(tab)}
                          sx={{
                            cursor: "pointer",
                            pb: 1,
                            px: { xs: 0.5, sm: 1 },
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.9rem",
                              md: "0.95rem",
                            },
                            whiteSpace: "nowrap",
                            transition: "all 0.2s ease",
                            borderBottom:
                              activeOutboxTab === tab
                                ? "2px solid #05A629"
                                : "2px solid transparent",
                            color:
                              activeOutboxTab === tab
                                ? "#05A629"
                                : "text.secondary",
                            "&:hover": {
                              color: "#05A629",
                            },
                          }}
                        >
                          {tab}
                        </Typography>
                      ))}
                    </Box>

                    <EmailTable
                      type="outbox"
                      rows={outboxEmails.filter((row) =>
                        activeOutboxTab === "All"
                          ? true
                          : row.status === activeOutboxTab,
                      )}
                      onRowClick={(row) => handleRowClick(row, "outbox")}
                    />
                  </>
                )}

                {index === 3 && (
                  <EmailTable
                    type="draft"
                    rows={draftEmails}
                    onRowClick={(row) => handleRowClick(row, "draft")}
                  />
                )}
              </TabPanel>
            ))}
          </>
        )}
      </ReusableTabs>
    </Box>
  );
}

export default EmailContainer;
