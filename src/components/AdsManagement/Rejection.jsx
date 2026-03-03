import { Box, Typography } from "@mui/material";

function Rejection({ rejectionReason }) {
  return (
    <div>
        <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      Reason for Rejection
                    </Typography>
      <Box
        sx={{
          borderRadius: 2,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {rejectionReason}
        </Typography>
      </Box>
      </Box>
    </div>
  );
}

export default Rejection;
