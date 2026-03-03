import React, { useState, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/Topbar";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CommonButton from "../../common/Button";
import DetailsCard from "../../common/DetailsCard";
import GoBackButton from "../../common/GoBackButton";

const STATUS_COLORS = {
  UNREAD: "#FEE2E2",
  READ: "#F0FDF4",
};
const warnIcon = (
    <svg width={24} height={24} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.01718 31.377H29.9839C30.3732 31.3769 30.7557 31.2758 31.0943 31.0837C31.4328 30.8915 31.7156 30.6148 31.9152 30.2806C32.1148 29.9464 32.2243 29.5661 32.2329 29.177C32.2416 28.7878 32.1491 28.4031 31.9646 28.0603L19.9819 5.80641C19.1319 4.22859 16.8692 4.22859 16.0191 5.80641L4.03647 28.0603C3.85194 28.4031 3.75948 28.7878 3.76813 29.177C3.77679 29.5661 3.88625 29.9464 4.08584 30.2806C4.28542 30.6148 4.5683 30.8915 4.90681 31.0837C5.24533 31.2758 5.62792 31.3769 6.01718 31.377Z" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M17.596 13.7384L17.9996 22.3165L18.4025 13.7419C18.4049 13.6871 18.3962 13.6323 18.3768 13.581C18.3575 13.5296 18.3278 13.4828 18.2897 13.4433C18.2516 13.4038 18.2058 13.3725 18.1552 13.3513C18.1046 13.3301 18.0502 13.3195 17.9953 13.32C17.9414 13.3205 17.8882 13.3318 17.8387 13.3533C17.7893 13.3747 17.7446 13.4059 17.7074 13.4449C17.6701 13.4839 17.6411 13.5299 17.622 13.5803C17.6028 13.6308 17.594 13.6845 17.596 13.7384Z" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M18 27.9316C17.7219 27.9316 17.45 27.8492 17.2187 27.6946C16.9875 27.5401 16.8072 27.3205 16.7008 27.0635C16.5944 26.8066 16.5665 26.5238 16.6208 26.251C16.675 25.9783 16.809 25.7277 17.0056 25.531C17.2023 25.3344 17.4529 25.2004 17.7257 25.1462C17.9984 25.0919 18.2812 25.1197 18.5381 25.2262C18.7951 25.3326 19.0147 25.5129 19.1693 25.7441C19.3238 25.9754 19.4063 26.2473 19.4063 26.5254C19.4063 26.8984 19.2581 27.256 18.9944 27.5198C18.7306 27.7835 18.373 27.9316 18 27.9316Z" fill="#ffffff" />
</svg>

);

const ReportDetails = () => {
  const [reportDetails, setReportDetails] = useState(null);
  const [relatedDetails, setRelatedDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
         const reportRes = await fetch("../../../reports.json");
        const reportsData = await reportRes.json();
        const report = reportsData.find((r) => r.id === parseInt(id));

        if (!report) {
          setError("Report not found");
          setLoading(false);
          return;
        }

        setReportDetails(report);

         if (report.reportType === "AD_REPORT") {
          const adsRes = await fetch("../../../ads.json");
          const adsData = await adsRes.json();
          const ad = adsData.find((a) => a.id === report.adId);
          setRelatedDetails(ad);
        } else if (report.reportType === "USER_REPORT") {
          const usersRes = await fetch("../../../userData.json");
          const usersData = await usersRes.json();
          const user = usersData.find((u) => u.id === report.userId);
          setRelatedDetails(user);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <>
        <TopBar />
        <Sidebar />
        
      </>
    );
  }


  

  const adFields = [
     { label: "Title", key: "title" },
    { label: "Category", key: "category" },
    { label: "Status", key: "status" },
    { label: "Price", key: "price" },
    { label: "Mileage", key: "mileage" },
  ];

  const userFields = [
    { label: "Name", key: "name" },
    { label: "Country", key: "country" },
    { label: "Email", key: "email" },
    { label: "Area", key: "area" },

    { label: "Phone Number", key: "phoneNumber" },
    { label: "Type", key: "type" },
    { label: "Following", key: "following" },
    { label: "Followers", key: "followers" },
  ];
  return (
    <>
      <TopBar />
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
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
             pb: 3,
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
                color: reportDetails.status === "READ" ? "#10B981" : "#F59E0B",
              }}
            />
            {reportDetails.title}
          </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
          {reportDetails.reportType === "AD_REPORT" && (
            <>
                <CommonButton text="Warn" icon={warnIcon} color="#F97316" size="medium" />
                <CommonButton text="Delete Ad" size="medium" />
            </>
            )}
            {reportDetails.reportType === "USER_REPORT" && (
            <>
                <CommonButton text="Warn User" icon={warnIcon} size="medium" />
                <CommonButton text="Suspend User" size="medium" />
                <CommonButton text="Ban User" size="medium" />
            </>
            )}
            </Box>

       

        </Box>
         {relatedDetails && reportDetails.reportType === "AD_REPORT" && (
          <DetailsCard
            title="Reported Ad Details"
            data={relatedDetails}
            fields={adFields}
             description={relatedDetails.description}
          />
        )}

        {relatedDetails && reportDetails.reportType === "USER_REPORT" && (
          <DetailsCard
            title="Reported User Details"
            data={relatedDetails}
            fields={userFields}
            image={relatedDetails.imageUrl}
          />
        )}
      </Box>
    </>
  );
};

export default ReportDetails;
