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
    <>
      <Paper
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          width: { xs: "100%", sm: "95%" },
          mx: "auto",
          boxShadow: 0,
          border: '1px solid #E5E7EB',
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2} sx={{ mt: 1 }}>
          {title}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              columnGap: 4,
              rowGap: 3,
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
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mt: 1,
                    ...(field.type === "link" && {
                      color: "#1976d2",
                      wordBreak: "break-all",
                      display: "block",
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
                      {field.linkText || "Link"}
                    </a>
                  ) : (
                    data[field.key] || "-"
                  )}
                </Typography>
              </Box>
            ))}
          </Box>

          {(description || image) && (
            <Paper
              sx={{
                flex: { xs: "1", md: 0.8 },
                borderRadius: 2,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                boxShadow: '0 0 0 0',
              }}
            >
              {image && (
                <Box
                  component="img"
                  src={image}
                  alt="User"
                  sx={{
                    width: "100%",
                    flex: 1,
                    objectFit: "contain",
                    borderRadius: 2,

                    mb: description ? 2 : 0,
                    boxShadow: '0 0 0 0',
                  }}
                />
              )}
              {description && (
                <>
                  <Box
                    sx={{
                      borderRadius: 2,
                      border: "1px solid #e0e0e0",
                      p: 2.5,
                      width: "100%",
                      backgroundColor: "#ffffff",
                      boxShadow: '0 0 0 0',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" mb={1.5}>
                      {descriptionLabel}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {description || "No description available"}
                    </Typography>
                  </Box>
                </>
              )}
            </Paper>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default DetailsCard;
