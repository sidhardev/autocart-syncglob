 
import { Box } from '@mui/material'
  import Topbar from './components/layout/Topbar'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import { NotificationProvider, useNotification } from './Context/NotificationContext'
 function App() {
    const { notification } = useNotification();
    console.log(notification);
  return (
    <>

       <Topbar />
       
       <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, width: '100%', top: "64px", position: "relative", }}>
          <Dashboard />
        </Box>
      </Box>
    </>
  )
}

export default App
