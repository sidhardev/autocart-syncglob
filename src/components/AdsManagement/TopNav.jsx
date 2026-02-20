import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';
import AdTable from './AdTable';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TopNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: "flex", flexDirection: "column", gap: 2,  }}>
      <Box sx={{ width: '100%',  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth' sx={{
    "& .MuiTabs-indicator": {
      display: "none",
    },
    
  }}  >
          <Tab label="All Ads" {...a11yProps(0)} sx={{"&.Mui-selected": {
        backgroundColor: "rgb(58, 193, 239)",
        color: "#fff",
        borderRadius: 3,
      }}}/>
          <Tab label="Pending Ads" {...a11yProps(1)} sx={{"&.Mui-selected": {
        backgroundColor: "rgb(58, 193, 239)",
        color: "#fff",
        borderRadius: 3
      }}} />
          <Tab label="Renew Ads" {...a11yProps(2)} sx={{"&.Mui-selected": {
        backgroundColor: "rgb(58, 193, 239)",
        color: "#fff",
        borderRadius: 3
      }}}/>
          <Tab label="Deleted Ads" {...a11yProps(3)} sx={{"&.Mui-selected": {
        backgroundColor: "rgb(58, 193, 239)",
        color: "#fff",
        borderRadius: 3
      }}} />
          <Tab label="Rejected Ads" {...a11yProps(5)} sx={{"&.Mui-selected": {
        backgroundColor: "rgb(58, 193, 239)",
        color: "#fff",
        borderRadius: 3
      }}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SearchBar />
        <AdTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SearchBar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SearchBar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <SearchBar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <SearchBar />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <SearchBar />
      </CustomTabPanel>
    </Box>
  );
}
