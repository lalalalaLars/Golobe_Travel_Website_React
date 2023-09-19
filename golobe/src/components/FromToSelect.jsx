import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

const FromToSelect = () => {
  return (
    <div>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[].map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            sx={{ width: "300px" }}
            {...params}
            label="From - To"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
};

export default FromToSelect;
