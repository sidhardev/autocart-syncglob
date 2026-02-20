import { Box, Typography } from "@mui/material";
import ReadAllButton from "./ReadAllButton";

const ShowNotification = ({ notification }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        mt: 1
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ color: "text.primary", fontFamily: "Lexend" }}
      >
        Notification{" "}
        <Typography
          component="span"
          variant="body1"
          color="text.secondary"
          sx={{ ml: 1 }}
        >
          {notification.length}
        </Typography>
      </Typography>

      <ReadAllButton />
    </Box>
  );
};

export default ShowNotification;