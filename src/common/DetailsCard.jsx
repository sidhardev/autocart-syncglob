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
        width: { xs: "80%", sm: "100%" },
        maxWidth: "1200px",
        mx: "auto",
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 3,
        boxShadow: 0,
        border: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        {title}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "flex-start" },
          gap: { xs: 3, md: 4 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            flex: 2,
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr",
            },
            columnGap: { xs: 2, sm: 4 },
            rowGap: { xs: 2.5, sm: 3 },
          }}
        >
          {fields.map((field) => (
            <Box
              key={field.key}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={600}
              >
                {field.label}
              </Typography>

              <Typography
                variant="body1"
                fontWeight={600}
                sx={{
                  mt: 0.5,
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
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
                    style={{ textDecoration: "none", color: "inherit" }}
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

        {(description || image) && (
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: { xs: "stretch", sm: "flex-start", md: "flex-start" },
              gap: 2.5,
            }}
          >
            {image && (
              <Box
                component="img"
                src={image}
                alt="User"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 300 },
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            )}

            {description && (
              <Paper
                sx={{
                  p: { xs: 0, sm: 2.5 },
                  borderRadius: 2,
                  boxShadow: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="subtitle1" fontWeight={700} mb={1}>
                  {descriptionLabel}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                    wordBreak: "break-word",
                  }}
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
