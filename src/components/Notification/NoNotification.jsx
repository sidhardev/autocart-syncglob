import { Box, Typography } from "@mui/material";
import React from "react";

function NoNotification() {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, mt: 1, color: "text.secondary" }}
        >
          Notification 0
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          You have no new notifications.
        </Typography>
      </Box>
    </>
  );
}

export default NoNotification;
