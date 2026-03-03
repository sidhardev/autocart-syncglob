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
          p: 3,
          borderRadius: 3,
          width: "95%",
          mx: "auto",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2} sx={{ mt: 1 }}>
          {title}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
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
                flex: 0.8,
                 borderRadius: 2,
                 alignItems:"end",
                 justifyContent:"end",
                 display:"flex",}}
            >
              {image && (
                <Box sx={{ mb: 2 }}>
                  <img
                    src={image}
                    alt="User"
                    style={{
                      width: "80%",
                      borderRadius: "8px",
                       height:  "80%",

                    }}
                  />
                </Box>
              )}
              {description && (
                <>
                <Box sx={{ borderRadius: 2, border: "1px solid #e0e0e0", p: 2 }}>


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
