import { useState } from "react";
import { CustomButton, OptionsForm } from "../components";
import { paperPlane } from "../assets";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const PageTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col gap-y-5 bg-white lg:absolute lg:mt-[580px] lg:w-[1232px] lg:h-[280px] lg:rounded-[24px] pt-10 lg:pt-[16px] lg:px-[32px] lg:drop-shadow-md">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Flights" {...a11yProps(0)} />
          <Tab label="Stays" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OptionsForm />
        <div className="flex justify-center lg:justify-end mt-10">
          <CustomButton
            style={
              " flex flex-row items-center justify-center gap-x-1 w-[144px] h-[48px] bg-[#8DD3BB] rounded-[4px] font-montserrat font-medium text-[14px] "
            }
          >
            <img src={paperPlane} alt="paper plane icon" />
            {"Show Flights"}
          </CustomButton>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}></CustomTabPanel>
    </div>
  );
};

export default PageTabs;
