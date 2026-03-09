import PropTypes from "prop-types";
import { Tab, Tabs as MuiTabs, Box } from "@mui/material";

export function TabPanel({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{
        width: "100%",
      }}
    >
      {value === index && (
        <Box
          sx={{
            p: { xs: 1.5, sm: 2, md: 3 },
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

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
        gap: { xs: 1.5, md: 2 },
        ...sx,
      }}
    >
      <MuiTabs
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        variant="scrollable"
        scrollButtons="true"
        allowScrollButtonsMobile
        sx={{
          minHeight: { xs: 40, sm: 48 },

          "& .MuiTabs-flexContainer": {
            gap: { xs: 1, sm: 1.5 },
          },

          "& .MuiTabs-indicator": {
            display: "none",
          },

          "& .MuiTab-root": {
            textTransform: "none",
            minHeight: { xs: 36, sm: 40 },
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
            padding: {
              xs: "6px 12px",
              sm: "8px 16px",
              md: "10px 18px",
            },
            borderRadius: 2,
            whiteSpace: "nowrap",
          },

          "& .MuiTab-root.Mui-selected": {
            backgroundColor: "#07B007",
            color: "#fff",
            borderRadius: 2,
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

      <Box sx={{ width: "100%" }}>
        {children
          ? children(value)
          : tabsData.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                {tab.content || `Content for ${tab.label}`}
              </TabPanel>
            ))}
      </Box>
    </Box>
  );
}

export default ReusableTabs;
