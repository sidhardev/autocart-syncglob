import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import StopRoundedIcon from "@mui/icons-material/StopRounded";

function Statscard({ cards, heading }) {

  const CARD_STYLE = {
    flex: { xs: "1 1 100%", sm: "1 1 220px" },
    minWidth: { xs: "100%", sm: 220 },
    p: 2.5,
    borderRadius: 3,
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    justifyContent: "center",
  };

  return (
    <Box>

      {/* SECTION HEADING */}

      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          mb: 2,
          mt: { xs: 4, sm: 6, md: 8 },
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "1rem", sm: "1.25rem" }
        }}
      >

        {heading === "Ads" && (
          <AdsClickIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
        )}

        {heading === "Users" && (
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M17.9 17.3C20.6 17.3 22.7 15.1 22.7 12.4C22.7 9.7 20.5 7.6 17.8 7.6C15.1 7.6 13 9.8 13 12.4C13 15.1 15.2 17.3 17.9 17.3Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M26.1 22.7L25.9 22.4C23.9 20.2 21.1 18.9 18.1 19C15.1 18.9 12.2 20.2 10.2 22.4L10 22.7V30.3C10 31.2 10.7 32 11.7 32H24.5C25.4 32 26.2 31.2 26.2 30.3V22.7H26.1Z"
                  fill="#9CA3AF"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        )}

        {heading === "Finance Overview" && (
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0389 16.875V11.25C13.0389 10.914 13.1569 10.628 13.3929 10.392C13.6279 10.156 13.9139 10.038 14.2509 10.038C14.5879 10.038 14.8739 10.156 15.1089 10.392C15.3449 10.628 15.4629 10.914 15.4629 11.25V16.875Z"
                fill="currentColor"
              />
            </svg>
          </Box>
        )}

        {heading}
      </Typography>


      {/* CARDS GRID */}

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        {cards.map((card) => (

          <Paper
            key={card.id}
            elevation={0}
            sx={CARD_STYLE}
          >

            {/* TOP ROW */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                {/* ICON CONTAINER */}

                <Box
                  sx={{
                     borderRadius: 2,
                    p: 0.7,
                    display: "flex",
                    alignItems: "normal",
                    justifyContent: "center",
                  }}
                >
                  <StopRoundedIcon sx={{ fontSize: 16, color: card.color }} />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#6b7280",
                    fontSize: { xs: "0.9rem", sm: "1rem" }
                  }}
                >
                  {card.title}
                </Typography>

              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#16a34a"
                }}
              >
                {card.ratio}
              </Typography>

            </Box>


            {/* MAIN VALUE */}

            <Typography
              variant="h4"
              sx={{
                color: "#1f2937",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" }
              }}
            >
              {card.data}

              <Typography
                component="span"
                variant="body2"
                sx={{
                  ml: 1,
                  color: "#9ca3af"
                }}
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