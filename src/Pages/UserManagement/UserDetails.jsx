import DetailsCard from "../../common/DetailsCard";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import CommonButton from "../../common/Button";
import GoBackButton from "../../common/GoBackButton";
import Layout from "../../components/layout/Layout";

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
    <Layout>
      <Box
        sx={{
          p: { xs: 1, sm: 2 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "flex-start",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="text.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          <GoBackButton />

          <StopRoundedIcon
            fontSize="small"
            sx={{
              color: STATUS_COLORS[userDetails.status] || STATUS_COLORS.Active,
            }}
          />

          {userDetails.name || "Untitled User"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", sm: "nowrap" },
            gap: 2,
            justifyContent: { xs: "center", sm: "flex-end" },
            width: { xs: "100%", sm: "auto" },
            ml: "auto",
          }}
        >
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

          {userDetails.status === "Banned" && (
            <>
              <CommonButton text="Edit User" size="medium" />
              <CommonButton text="Suspend User" size="medium" />
              <CommonButton
                text="Lift ban on user"
                size="medium"
                iconName="reject"
                color="delete"
              />
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        <DetailsCard
          title="User Details"
          data={userDetails}
          fields={fields}
          image={userDetails.imageUrl}
        />
      </Box>
    </Layout>
  );
}

export default UserDetails;
