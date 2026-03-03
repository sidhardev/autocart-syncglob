import DetailsCard from "../../common/DetailsCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";
import CommonButton from "../../common/Button";
import GoBackButton from "../../common/GoBackButton";

const STATUS_STYLES = {
  FLAGGED: {
    dot: "#EAB308",
    text: "Flagged",
  },
  REPORTED: {
    dot: "#EF4444",
    text: "Reported",
  },
};

function MessageDetails() {
  const { id } = useParams();
  const [messageDetails, setMessageDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/message-management.json");
        if (!response.ok) throw new Error("Failed to fetch message data");

        const data = await response.json();

        const allMessages = [
          ...(data.flaggedMessages || []),
          ...(data.reportedMessages || []),
        ];

        const selectedMessage = allMessages.find(
          (msg) => msg.id === parseInt(id)
        );

        if (!selectedMessage) {
          throw new Error("Message not found");
        }

        setMessageDetails(selectedMessage);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching message details");
        setMessageDetails({});
      }
    };

    if (id) fetchData();
  }, [id]);

  const senderFields = [
    { label: "Name", key: "name" },
    { label: "Country", key: "country" },
    { label: "Email Address", key: "email" },
    { label: "Area", key: "area" },
  ];

  const receiverFields = [
    { label: "Name", key: "name" },
    { label: "Country", key: "country" },
    { label: "Email Address", key: "email" },
    { label: "Area", key: "area" },
  ];

  const statusStyle =
    STATUS_STYLES[messageDetails.status] || STATUS_STYLES.FLAGGED;

  return (
    <>
      <TopBar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            top: "64px",
            position: "relative",
            marginLeft: "260px",
            minHeight: "calc(100vh - 64px)",
            p: 3,
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <GoBackButton />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  bgcolor: statusStyle.dot,
                  borderRadius: "50%",
                }}
              />
              {statusStyle.text}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <CommonButton text="Mark Safe" size="medium" />
              <CommonButton text="Warn Sender" size="medium" />
              <CommonButton text="Suspend Sender" size="medium" />
              <CommonButton text="Delete Message" size="medium" />
            </Box>
          </Box>

          {/* User Details Section */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 3,
              p: 3,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={3}>
              User Details
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "space-between",
              }}
            >
              {/* Sender */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                  Sender
                </Typography>

                <DetailsCard
                  title=""
                  data={messageDetails.sender || {}}
                  fields={senderFields}
                  image={messageDetails.sender?.avatar}
                />
              </Box>

              {/* Receiver */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                  Receiver
                </Typography>

                <DetailsCard
                  title=""
                  data={messageDetails.receiver || {}}
                  fields={receiverFields}
                  image={messageDetails.receiver?.avatar}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MessageDetails;