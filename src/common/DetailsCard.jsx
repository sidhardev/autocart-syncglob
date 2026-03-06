import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

function DetailsCard({
  title,
  data,
  fields,
  description,
  descriptionLabel = "Description",
  image = null,
}) {
  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        boxShadow: 0,
        border: "1px solid #E5E7EB",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {title}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* Left Side Fields */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            columnGap: { xs: 2, sm: 4 },
            rowGap: { xs: 2, sm: 3 },
          }}
        >
          {fields.map((field) => (
            <Box key={field.key}>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={600}
              >
                {field.label}
              </Typography>

              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  mt: 0.5,
                  wordBreak: "break-word",
                  ...(field.type === "link" && {
                    color: "#1976d2",
                    "&:hover": { textDecoration: "underline" },
                  }),
                }}
              >
                {field.type === "link" ? (
                  <a
                    href={data[field.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {field.linkText || data[field.key]}
                  </a>
                ) : (
                  data[field.key] || "-"
                )}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Side Image + Description */}
        {(description || image) && (
          <Box
            sx={{
              flex: { xs: 1, md: 0.8 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            {image && (
              <Box
                component="img"
                src={image}
                alt="User"
                sx={{
                  width: { xs: "100%", sm: 280 },
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            )}

            {description && (
              <Paper
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  width: "100%",
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  borderBottom: { xs: "none", md: "1px solid #E5E7EB" },
                  boxShadow: 0,
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  {descriptionLabel}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {description || "No description available"}
                </Typography>
              </Paper>
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
}

export default DetailsCard;