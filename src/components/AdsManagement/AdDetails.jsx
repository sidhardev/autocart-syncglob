import { Box, Divider, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import AdButton from "./Button";

const BACKGROUND_IMAGE_URL =
  "url('https://syncglob.com/static/media/homeBg.3bfe02e2c5bf3fda69e8.png')";
const STATUS_COLORS = {
  ACTIVE: "#07B007",
  APPROVED: "#07B007",
  INACTIVE: "#ccc",
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
    return ["ACTIVE", "APPROVED"].includes(ad.status)
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
            backgroundImage: BACKGROUND_IMAGE_URL,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              <StopRoundedIcon
                fontSize="small"
                sx={{
                  color: STATUS_COLORS[ad.status] || STATUS_COLORS.INACTIVE,
                }}
              />
              {ad.title || "Untitled Ad"}
            </Typography>

            <AdButton text={getButtonText()} />
          </Box>

          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              width: "100%",
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Ads Details
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Title
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" mt={0.5}>
                      {ad.title || "-"}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Category
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" mt={0.5}>
                      {ad.category || "-"}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Youtube Link
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      mt={0.5}
                      component=""
                      href={ad.youtubeLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#1976d2",
                        cursor: "pointer",
                        wordBreak: "break-all",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      <a
                        href={ad.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youtube
                      </a>
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Vechile lisence number
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      mt={0.5}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "16px",
                      }}
                    >
                      {ad.vehicleNumber || "-"}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Mileage
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      mt={0.5}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      {ad.mileage || "-"}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      Type
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      mt={0.5}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      {ad.sellerType || "-"}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Paper
                sx={{
                  flex: 1,
                  p: 2.5,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={1.5}>
                  Description
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {ad.description || "No description available"}
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default AdDetails;
