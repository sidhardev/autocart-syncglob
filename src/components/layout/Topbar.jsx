import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
 import AdbIcon from '@mui/icons-material/Adb';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNotification } from '../../Context/NotificationContext';

function TopBar() {
        const { toggleNotification } = useNotification();
  return (
    <>
       <AppBar position="fixed" sx={{ background: "rgba(3, 193, 254, 0.1)",}}>
      <Container maxWidth="xl">
  <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
  
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <AdbIcon sx={{ mr: 1, color: 'rgb(58, 193, 254)'}} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#"
      sx={{
        fontFamily: 'monospace',

        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'rgb(58, 193, 254)',
        textDecoration: 'none',
      }}
    >
      SG AUTOMOBILES
    </Typography>
  </Box>

   <Box sx={{ flexGrow: 1 }} />

      <Typography sx={{ mr: 1, color: 'rgb(58, 193, 254)' }}>
        Syncglob Admin
      </Typography>
   <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
       <IconButton   sx={{ p: 0 }}>
        <Avatar sx={{border: '1px solid rgb(58, 193, 254)'}} />
      </IconButton>
     <NotificationsActiveIcon fontSize="large" sx={{ color: 'rgb(58, 193, 254)', cursor: "pointer", "&:hover": { color: 'rgb(58, 193, 254)', opacity: 0.8 }, }} onClick={() => toggleNotification()}/>
  </Box>

</Toolbar>

      </Container>
    </AppBar>
    </>
  )}

export default TopBar
