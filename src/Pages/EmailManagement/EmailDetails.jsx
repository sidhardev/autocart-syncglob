import { Box, Typography, CircularProgress } from "@mui/material";
import CommonButton from "../../common/Button";
import ReplyIcon from "@mui/icons-material/Reply";
import ForwardIcon from "@mui/icons-material/Forward";
import GoBackButton from "../../common/GoBackButton";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

function EmailDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "inbox";

  const [emailData, setEmailData] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmailData = async () => {
      try {
        const listRes = await fetch("/email-data.json");
        const listData = await listRes.json();

        const list = listData[type] || [];
        const emailRow = list.find((item) => item.id === id);

        const detailRes = await fetch("/email-details.json");
        const detailData = await detailRes.json();

        const emailDetail = detailData[type]?.[id];

        setEmailData(emailRow);
        setDetails(emailDetail);
      } catch (err) {
        console.error("Failed to load email details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmailData();
  }, [id, type]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Unread":
        return "#EF4444";
      case "Not Delivered":
        return "#EAB308";
      case "Opened":
      case "Read":
        return "#9CA3AF";
      case "Delivered":
        return "#3B82F6";
      default:
        return "#9CA3AF";
    }
  };

  if (loading) {
    return (
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  if (!emailData) {
    return (
      <Layout>
        <Typography variant="h6">Email not found.</Typography>
      </Layout>
    );
  }

  const statusColor = getStatusColor(emailData?.status);
  const title = `${emailData?.status || "Draft"} Mail`;

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          mb: 4,
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: 2,
          }}
        >
          <GoBackButton />

          <StopRoundedIcon
            fontSize="small"
            sx={{
              color: statusColor,
              borderRadius: 1,
            }}
          />

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
            }}
          >
            {title}

            <Typography
              variant="body2"
              sx={{
                color: "#9CA3AF",
                fontWeight: 500,
                fontSize: "0.75rem",
              }}
            >
              {emailData?.date || emailData?.dateSent || emailData?.statusDate}{" "}
              &nbsp;&nbsp; {emailData?.time}
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mt: 1,
            justifyContent: { xs: "center", sm: "flex-end" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <CommonButton
            text={type === "outbox" ? "Resend Mail" : "Reply Mail"}
            icon={<ReplyIcon fontSize="small" />}
            sx={{
              color: "#9CA3AF",
              border: "1px solid #E5E7EB",
              bgcolor: "#f3f4f6",
            }}
          />

          <CommonButton
            text="Forward Mail"
            icon={<ForwardIcon fontSize="small" />}
            sx={{
              color: "#9CA3AF",
              border: "1px solid #E5E7EB",
              bgcolor: "#f3f4f6",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          border: "1px solid #E5E7EB",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: { xs: 2, sm: 3, md: 4 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            flexWrap: "nowrap",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Subject:
          </Typography>

          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {details?.subject || "No Subject"}
          </Typography>
        </Box>
        <Box sx={{ height: "1px", bgcolor: "#E5E7EB", mb: 3 }} />

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
          }}
        >
          {details?.body || "No Content"}
        </Typography>
      </Box>

      {(type === "outbox" || details?.userReply) && (
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 3,
            border: "1px solid #E5E7EB",
            p: { xs: 2, sm: 3, md: 4 },
            mb: 4,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            User Reply
          </Typography>

          <Box sx={{ height: "1px", bgcolor: "#E5E7EB", my: 3 }} />

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {details?.userReply || "No reply yet....."}
          </Typography>
        </Box>
      )}
    </Layout>
  );
}

export default EmailDetails;
