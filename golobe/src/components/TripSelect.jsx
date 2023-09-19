import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TripSelect = () => {
  const [trip, setTrip] = useState("");

  const handleChange = (event) => {
    setTrip(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trip</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={trip}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>One way</MenuItem>
          <MenuItem value={20}>Return</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TripSelect;
