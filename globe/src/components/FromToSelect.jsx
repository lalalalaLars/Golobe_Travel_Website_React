import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const FromToSelect = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="From - To" />}
      />
    </div>
  );
};

export default FromToSelect;
