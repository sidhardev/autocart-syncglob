import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AdsClickIcon from "@mui/icons-material/AdsClick";
import StopIcon from '@mui/icons-material/Stop';
import PeopleIcon from '@mui/icons-material/People';

function Statscard({cards, heading}) {
  return (
      <Box>
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 2, mt: 8,color: "text.secondary" }}
      >
        {heading === 'Ads' && <AdsClickIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} /> }
        {heading === 'Users' && <PeopleIcon fontSize="small" sx={{ mr: 1, color: "#6c757d" }} /> }
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
 
      {cards.map((card, index) => (
        <Card
          key={card.id}
          sx={{
            flex: '1 1 220px',
            minWidth: 220,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardActionArea
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
                  <StopIcon
                    fontSize="small"
                    sx={{ color: card.color }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {card.title}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="success.main"
                >
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
             
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
        </Box>
  );
}

export default Statscard;
