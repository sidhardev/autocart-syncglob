import { Box, Typography } from "@mui/material";
import ReusableTabs, { TabPanel } from "../../common/Tabs";
import { useEffect, useState } from "react";
import MessageOverviewCards from "./MessageOverview";
import MessageTable from "./MessageTable";

function MessageContainer() {
  const [value, setValue] = useState(0);
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/message-management.json");
        const data = await response.json();
        setMessageData(data); // ✅ store full JSON
      } catch (error) {
        console.error("Error fetching Message:", error);
      }
    }

    fetchData();
  }, []);

  const tabsData = [
    { label: "Message Overview" },
    { label: "Flagged Messages" },
    { label: "Reported Messages" },
  ];

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <ReusableTabs
        tabsData={tabsData}
        value={value}
        onChange={setValue}
      >
        {(activeIndex) => (
          <>
            {/* Overview Tab */}
            <TabPanel value={value} index={0}>
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
                  sx={{ mt: 4, color: "text.secondary" }}
                >
                  Message Overview
                </Typography>

                {messageData?.messageOverview && (
                  <MessageOverviewCards
                    messageOverview={messageData.messageOverview}
                  />
                )}

                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ mt: 4, color: "text.secondary" }}
                >
                  Flagged Messages
                </Typography>

                {messageData?.flaggedMessagesStats && (
                  <MessageOverviewCards
                    messageOverview={messageData.flaggedMessagesStats}
                  />
                )}

                <Typography variant="h6" fontWeight={600} sx={{ mt: 4, color: "text.secondary" }}>
                  Reported Messages
                </Typography>
                {messageData?.reportedMessagesStats && (
                  <MessageOverviewCards
                    messageOverview={messageData.reportedMessagesStats}
                  />
                )}
              </Box>
            </TabPanel>

            {/* Flagged Messages Tab */}
            <TabPanel value={value} index={1}>
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
                  sx={{ mt: 4, color: "text.secondary" }}
                >
                  Flagged Messages
                </Typography>

                {messageData?.flaggedMessagesStats && (
                  <MessageOverviewCards
                    messageOverview={messageData.flaggedMessagesStats}
                  />
                )}
                <MessageTable rows={messageData?.flaggedMessages || []} />
              </Box>
            </TabPanel>

            {/* Reported Messages Tab */}
            <TabPanel value={value} index={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  width: "100%",
                }}
              >

                <Typography variant="h6" fontWeight={600} sx={{ mt: 4, color: "text.secondary" }}>
                  Reported Messages
                </Typography>
                {messageData?.reportedMessagesStats && (
                  <MessageOverviewCards
                    messageOverview={messageData.reportedMessagesStats}
                  />
                )}
                <MessageTable rows={messageData?.reportedMessages || []} />
              </Box>
            </TabPanel>
          </>
        )}
      </ReusableTabs>
    </Box>
  );
}

export default MessageContainer;