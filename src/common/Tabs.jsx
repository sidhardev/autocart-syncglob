import PropTypes from "prop-types";
import { Tab, Tabs as MuiTabs, Box } from "@mui/material";

// AI WRITTEN CODE
export function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 2, md: 3 } }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ReusableTabs({
  tabsData,
  value,
  onChange,
  getCount,
  children,
  showCount = true,
  sx = {},
  typeKey = "adType",
}) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ...sx,
      }}
    >
      <MuiTabs
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
          "& .MuiTab-root": {
            textTransform: "none",
          },
          "& .MuiTab-root.Mui-selected": {
            backgroundColor: "#07B007",
            color: "#fff",
            borderRadius: 3,
          },
        }}
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={
              showCount && getCount
                ? `${tab.label} (${getCount(tab[typeKey])})`
                : tab.label
            }
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </MuiTabs>

      {children
        ? children(value)
        : tabsData.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.content || `Content for ${tab.label}`}
          </TabPanel>
        ))}
    </Box>
  );
}

ReusableTabs.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      adType: PropTypes.string,
      userType: PropTypes.string,
      id: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  getCount: PropTypes.func,
  children: PropTypes.func,
  showCount: PropTypes.bool,
  sx: PropTypes.object,
  typeKey: PropTypes.string,
};

export default ReusableTabs;
