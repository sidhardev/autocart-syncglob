import DetailsCard from "../../common/DetailsCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../components/layout/Topbar";
import Sidebar from "../../components/layout/Sidebar";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CommonButton from "../../common/Button";
import GoBackButton from "../../common/GoBackButton";

const STATUS_COLORS = {
  Active: "#07B007",
  Suspended: "#f4da48",
  Banned: "#d32f2f",
};

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../userData.json");
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        const selectedUser = data[parseInt(id) - 1];

        if (!selectedUser) {
          throw new Error("User not found");
        }

        setUserDetails(selectedUser);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching user details");
        setUserDetails({});
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const getButtonText = () => {
    return ["Active", "Suspended", "Banned"].includes(userDetails.status)
      ? "Delete User"
      : "Approve User";
  };

  const fields = [
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

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            top: "64px",
            position: "relative",
            minHeight: "calc(100vh - 64px)", overflow: "auto",
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
                  color:
                    STATUS_COLORS[userDetails.status] || STATUS_COLORS.Active,
                }}
              />
              {userDetails.name || "Untitled User"}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {userDetails.status === "Active" && (
                <>
                  <CommonButton text="Edit User" size="medium" />
                  <CommonButton text="Suspend User" size="medium" />
                  <CommonButton text="Ban User" size="medium" />

                </>
              )}
              {userDetails.status === "Suspended" && (
                <>
                  <CommonButton text="Edit User" size="medium" />
                  <CommonButton text="Unsuspend User" size="medium" />
                  <CommonButton text="Ban User" size="medium" />
                </>
              )}
            </Box>
          </Box>

          <DetailsCard
            title="User Details"
            data={userDetails}
            fields={fields}
            image={userDetails.imageUrl}
          />
        </Box>
      </Box>
    </>
  );
}

export default UserDetails;
