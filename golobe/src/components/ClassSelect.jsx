import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ClassSelect = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ minWidth: 130 }}
        renderInput={(params) => <TextField {...params} label="Class" />}
      />
    </div>
  );
};

export default ClassSelect;
