import { Box, Typography } from "@mui/material";
import ReadAllButton from "./ReadAllButton";
import StopRoundedIcon from '@mui/icons-material/StopRounded';
const ShowNotification = ({ notification }) => {
  return (
    <>
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
        Notifications 
        <Typography
          component="span"
          variant="body1"
          color="text.secondary"
          sx={{ ml: 2 }}
        >
          {notification.length}
        </Typography>
      </Typography>

      <ReadAllButton />
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {notification.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: 2,
           }}
        >
          <Typography
  variant="subtitle1"
  fontWeight={item.isRead ? "normal" : "bold"}
  color="text.primary"
  sx={{ display: "flex", alignItems: "center", gap: 1 }}
>
  <StopRoundedIcon fontSize="small" sx={{ color: "#07B007",  }} />

  {item.title}
</Typography>
          
        </Box>
      ))}
    </Box>
        </>
  );
};

export default ShowNotification;