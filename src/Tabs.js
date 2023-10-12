import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

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

const StyledTab = styled(Tab)({
  color: "#ffffff", opacity: '.75',
  "&.Mui-selected": {
    opacity: '1'
  }
});

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleBreathMode(newValue);
    console.log(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="Stimulating" {...a11yProps(0)} />
          <StyledTab label="Relaxing" {...a11yProps(1)} />
          <StyledTab label="Counting" {...a11yProps(2)} />
          <StyledTab label="Square" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Bellows Breath
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Relaxing Breath
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Counting Breath
      </CustomTabPanel> */}
    </Box>
  );
}
