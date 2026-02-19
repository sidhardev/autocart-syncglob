import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
 import AdbIcon from '@mui/icons-material/Adb';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function TopBar() {
     const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <>
       <AppBar position="static" sx={{ background: "rgba(58, 193, 239, 0.85)",}}>
      <Container maxWidth="xl">
  <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
  
  {/* LEFT SECTION */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <AdbIcon sx={{ mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      SG AUTOMOBILES
    </Typography>
  </Box>

   <Box sx={{ flexGrow: 1 }} />

   <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
      <Typography sx={{ mr: 0, }}>
        Syncglob Admin
      </Typography>
       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar sx={{border: 'rgb(35, 151, 147), 1px solid'}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
     <NotificationsActiveIcon fontSize="large" />
  </Box>

</Toolbar>

      </Container>
    </AppBar>
    </>
  )
}

export default TopBar
