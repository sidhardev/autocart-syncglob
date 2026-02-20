import React from 'react'
import DashboardDatePicker from './DashboardDatePicker'
import { Box } from '@mui/material'
import Statscard from './Statscard'
import adCards from '../../../ads'
import Users from '../../../users'


function  Dashboard() {
  return (
    <>
   <Box
      sx={{
        p: 4,
        backgroundImage:
          "url('https://syncglob.com/static/media/homeBg.3bfe02e2c5bf3fda69e8.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >

      <DashboardDatePicker />
      <Box sx={{ mt: 4 }}>
    <Statscard cards={adCards} heading={'Ads'} />
        <Statscard cards={Users} heading={'Users'} />

      </Box>
    </Box>
    </>
  )
}

export default Dashboard
