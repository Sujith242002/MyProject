import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ModularKitchen from "./Kitchen.jsx";
import LivingRoom from "./Livingroom.jsx";
import BedroomDesign from "./Bedroom.jsx";
import TVUnitDesign from "./TVunit.jsx";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="orange"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "orange",
            },
          }}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Living Room" {...a11yProps(0)} />
          <Tab label="Modular Kitchen" {...a11yProps(1)} />
          <Tab label="Bedroom" {...a11yProps(2)} />
          <Tab label="TV Unit" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LivingRoom />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ModularKitchen />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BedroomDesign />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TVUnitDesign />
      </CustomTabPanel>
    </Box>
  );
}
