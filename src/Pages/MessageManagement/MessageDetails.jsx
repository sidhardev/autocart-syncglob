import DetailsCard from "../../common/DetailsCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonButton from "../../common/Button";
import GoBackButton from "../../common/GoBackButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Layout from "../../components/layout/Layout";

const warnIcon = (
  <svg
    width={24}
    height={24}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.01718 31.377H29.9839C30.3732 31.3769 30.7557 31.2758 31.0943 31.0837C31.4328 30.8915 31.7156 30.6148 31.9152 30.2806C32.1148 29.9464 32.2243 29.5661 32.2329 29.177C32.2416 28.7878 32.1491 28.4031 31.9646 28.0603L19.9819 5.80641C19.1319 4.22859 16.8692 4.22859 16.0191 5.80641L4.03647 28.0603C3.85194 28.4031 3.75948 28.7878 3.76813 29.177C3.77679 29.5661 3.88625 29.9464 4.08584 30.2806C4.28542 30.6148 4.5683 30.8915 4.90681 31.0837C5.24533 31.2758 5.62792 31.3769 6.01718 31.377Z"
      stroke="#ffffff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.596 13.7384L17.9996 22.3165L18.4025 13.7419C18.4049 13.6871 18.3962 13.6323 18.3768 13.581C18.3575 13.5296 18.3278 13.4828 18.2897 13.4433C18.2516 13.4038 18.2058 13.3725 18.1552 13.3513C18.1046 13.3301 18.0502 13.3195 17.9953 13.32C17.9414 13.3205 17.8882 13.3318 17.8387 13.3533C17.7893 13.3747 17.7446 13.4059 17.7074 13.4449C17.6701 13.4839 17.6411 13.5299 17.622 13.5803C17.6028 13.6308 17.594 13.6845 17.596 13.7384Z"
      stroke="#ffffff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
    <path
      d="M18 27.9316C17.7219 27.9316 17.45 27.8492 17.2187 27.6946C16.9875 27.5401 16.8072 27.3205 16.7008 27.0635C16.5944 26.8066 16.5665 26.5238 16.6208 26.251C16.675 25.9783 16.809 25.7277 17.0056 25.531C17.2023 25.3344 17.4529 25.2004 17.7257 25.1462C17.9984 25.0919 18.2812 25.1197 18.5381 25.2262C18.7951 25.3326 19.0147 25.5129 19.1693 25.7441C19.3238 25.9754 19.4063 26.2473 19.4063 26.5254C19.4063 26.8984 19.2581 27.256 18.9944 27.5198C18.7306 27.7835 18.373 27.9316 18 27.9316Z"
      fill="#ffffff"
    />{" "}
  </svg>
);

const STATUS_STYLES = {
  FLAGGED: { dot: "#EAB308", text: "Flagged" },
  REPORTED: { dot: "#EF4444", text: "Reported" },
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
          (msg) => msg.id === parseInt(id),
        );

        if (!selectedMessage) throw new Error("Message not found");

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
    <Layout>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: { xs: 2, md: 0 },
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
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

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            width: { xs: "100%", sm: "100%", md: "auto" },
          }}
        >
          <CommonButton text="Mark Safe" iconName="readAll" color="#60A5FA" />
          <CommonButton text="Warn Sender" icon={warnIcon} color="#F97316" />
          <CommonButton
            text="Suspend Sender"
            iconName="suspend"
            color="#9CA3AF"
          />
          <CommonButton
            text="Delete Message"
            iconName="delete"
            color="#F87171"
          />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          border: "1px solid #E5E7EB",
          p: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          User Details
        </Typography>

        <Box
          sx={{
            height: "1px",
            bgcolor: "#E5E7EB",
            my: 3,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 4 },
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Sender
            </Typography>

            <DetailsCard
              data={messageDetails.sender || {}}
              fields={senderFields}
              image={messageDetails.sender?.avatar}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9CA3AF",
              transform: { xs: "rotate(90deg)", md: "none" },
            }}
          >
            <SwapHorizIcon sx={{ fontSize: 40 }} />
          </Box>

          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Receiver
            </Typography>

            <DetailsCard
              data={messageDetails.receiver || {}}
              fields={receiverFields}
              image={messageDetails.receiver?.avatar}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default MessageDetails;
