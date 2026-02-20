import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PeopleIcon from '@mui/icons-material/People';
import StopRoundedIcon from '@mui/icons-material/StopRounded';

function Statscard({ cards, heading }) {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 2, mt: 8, color: "text.secondary", display: "flex", alignItems: "center" }}
      >
        {heading === 'Ads' && (
          <AdsClickIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
        )}
        {heading === 'Users' && (
          <PeopleIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} />
        )}
        {heading}
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        {cards.map((card) => (
          <Paper
            key={card.id}
            elevation={1}
            sx={{
              flex: '1 1 220px',
              minWidth: 220,
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
              boxShadow: "0",
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