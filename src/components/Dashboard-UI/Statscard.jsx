import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PeopleIcon from "@mui/icons-material/People";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

function Statscard({ cards, heading }) {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          mb: 2,
          mt: 8,
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
        }}
      >
        {heading === "Ads" && (
          <AdsClickIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
        )}
        {heading === "Users" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 1 }}>
            <svg
              width="24"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_952_28858)">
                <path
                  d="M17.9 17.3C20.6 17.3 22.7 15.1 22.7 12.4C22.7 9.70001 20.5 7.60001 17.8 7.60001C15.1 7.60001 13 9.80001 13 12.4C13 15.1 15.2 17.3 17.9 17.3ZM17.8 9.60001C17.9 9.60001 17.9 9.60001 17.8 9.60001C19.4 9.60001 20.7 10.9 20.7 12.5C20.7 14.1 19.4 15.3 17.8 15.3C16.2 15.3 15 14 15 12.5C15 10.9 16.3 9.60001 17.8 9.60001Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M32.7 16.7C30.8 15 28.3 14.1 25.7 14.2H24.9C24.7 15 24.4 15.7 24 16.3C24.6 16.2 25.1 16.2 25.7 16.2C27.6 16.1 29.5 16.7 31 17.8V25H33V17L32.7 16.7Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M23.4 7.79999C23.9 6.59999 25.3 5.99999 26.6 6.49999C27.8 6.99999 28.4 8.39999 27.9 9.69999C27.5 10.6 26.6 11.2 25.7 11.2C25.5 11.2 25.2 11.2 25 11.1C25.1 11.6 25.1 12.1 25.1 12.5V13.1C25.3 13.1 25.5 13.2 25.7 13.2C28.2 13.2 30.2 11.2 30.2 8.79999C30.2 6.29999 28.2 4.29999 25.8 4.29999C24.2 4.29999 22.8 5.09999 22 6.49999C22.5 6.79999 23 7.19999 23.4 7.79999Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M12 16.4C11.6 15.8 11.3 15.1 11.1 14.3H10.3C7.7 14.2 5.2 15.1 3.3 16.7L3 17V25H5V17.8C6.6 16.7 8.4 16.1 10.3 16.2C10.9 16.2 11.5 16.3 12 16.4Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M10.2998 13.1C10.4998 13.1 10.6998 13.1 10.8998 13V12.4C10.8998 11.9 10.8998 11.4 10.9998 11C10.7998 11.1 10.4998 11.1 10.2998 11.1C8.99977 11.1 7.89977 10 7.89977 8.70001C7.89977 7.40001 8.99977 6.30001 10.2998 6.30001C11.2998 6.30001 12.1998 6.90001 12.5998 7.80001C12.9998 7.30001 13.5998 6.80001 14.0998 6.40001C12.7998 4.30001 10.0998 3.60001 7.99977 4.90001C5.89977 6.20001 5.19977 8.90001 6.49977 11C7.29977 12.3 8.69977 13.1 10.2998 13.1Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M26.1 22.7L25.9 22.4C23.9 20.2 21.1 18.9 18.1 19C15.1 18.9 12.2 20.2 10.2 22.4L10 22.7V30.3C10 31.2 10.7 32 11.7 32H24.5C25.4 32 26.2 31.2 26.2 30.3V22.7H26.1ZM24.1 30H12V23.4C13.6 21.8 15.8 21 18.1 21C20.3 20.9 22.5 21.8 24.1 23.4V30Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0_952_28858">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        )}
        {heading}
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {cards.map((card) => (
          <Paper
            key={card.id}
            elevation={1}
            sx={{
              flex: "1 1 220px",
              minWidth: 220,
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
              boxShadow: "0",
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <StopRoundedIcon fontSize="small" sx={{ color: card.color }} />
                <Typography variant="body2" color="text.secondary">
                  {card.title}
                </Typography>
              </Box>

              <Typography variant="body2" color="success.main">
                {card.ratio}
              </Typography>
            </Box>

            <Typography variant="h4" color="text.primary">
              {card.data}
              <Typography
                component="span"
                variant="body2"
                sx={{ ml: 1, color: "text.secondary" }}
              >
                {heading}
              </Typography>
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Statscard;
