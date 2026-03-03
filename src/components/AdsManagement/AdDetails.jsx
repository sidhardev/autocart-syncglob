import { Box, Divider, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CommonButton from "../../common/Button";
import AdDetailsCard from "./AdDetailsCard.jsx";
import GoBackButton from "../../common/GoBackButton.jsx";
import Rejection from "./Rejection.jsx";

const STATUS_COLORS = {
  ACTIVE: "#07B007",
  APPROVED: "#07B007",
  INACTIVE: "#f4da48",
};

function AdDetails() {
  const [ad, setAd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../ads.json");
        if (!response.ok) throw new Error("Failed to fetch ads data");

        const data = await response.json();
        const selectedAd = data[parseInt(id) - 1];

        if (!selectedAd) {
          throw new Error("Advertisement not found");
        }

        setAd(selectedAd);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching advertisement details");
        setAd(null);
      } finally {
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const getButtonText = () => {
    return ["ACTIVE", "APPROVED", "REJECTED"].includes(ad.status)
      ? "Delete Ad"
      : "Approve Ad";
  };

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
              color="text.primary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <GoBackButton />
              <StopRoundedIcon
                fontSize="small"
                sx={{
                  color: STATUS_COLORS[ad.status] || STATUS_COLORS.INACTIVE,
                }}
              />
              {ad.title || "Untitled Ad"}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CommonButton text={getButtonText()} size="medium" />
              {(ad.status === "PENDING" || ad.status === "RENEW") && (
                <CommonButton text="Reject Ad" size="medium" />
              )}
            </Box>
          </Box>

          <AdDetailsCard ad={ad} />
          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 3,
            }}
          >
            {["/slide1.png", "/slide2.png", "/slide3.png"].map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>
          

            {ad.status === "REJECTED" && (
              <Rejection rejectionReason={ad.rejectionReason} />
            )}
        </Box>
      </Box>
    </>
  );
}

export default AdDetails;
