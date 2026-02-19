import { Box } from "@mui/material";
import TodayCard from "./Todaycard";
import AdsSection from "./Adsection";

export default function Dashboard() {
  return (
    <Box
      sx={{
        p: 4,
        backgroundImage:
          "url('https://syncglob.com/static/media/homeBg.3bfe02e2c5bf3fda69e8.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <TodayCard />
      <AdsSection />
    </Box>
  );
}
