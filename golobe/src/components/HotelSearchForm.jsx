import { CustomButton } from ".";
import { filterHotels } from "../features/hotelSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayjs from "dayjs";

import { Autocomplete, TextField } from "@mui/material";
import styles from "../styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const HotelSearch = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.hotels.priceRange);

  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleSearch = () => {
    const formattedCheckInDate = dayjs(checkInDate).format("YYYY-MM-DD");
    const formattedCheckOutDate = dayjs(checkOutDate).format("YYYY-MM-DD");

    dispatch(
      filterHotels({
        destination,
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        priceRange,
      })
    );
  };

  return (
    <>
      <div
        className={`flex items-center justify-center gap-x-5 bg-white rounded-[16px] h-[120px] mt-40 shadow-lg z-10 ${styles.boxWidth}`}
      >
        {
          // Destination search
        }
        <Autocomplete
          sx={{ width: 350 }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Destination"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              onChange={(event) => setDestination(event.target.value)}
            />
          )}
        />

        {
          // Check in search
        }
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check in"
            onChange={(date) => setCheckInDate(date)}
          />
        </LocalizationProvider>
        {
          // Check out search
        }
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Check out"
            onChange={(date) => setCheckOutDate(date)}
          />
        </LocalizationProvider>
        {
          // TO DO: add room and guest search
        }

        <CustomButton
          onClick={handleSearch}
          style={"w-[56px] h-[56px] rounded-[4px] bg-mint "}
        >
          S
        </CustomButton>
      </div>
    </>
  );
};

export default HotelSearch;
