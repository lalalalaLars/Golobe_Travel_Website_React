/* eslint-disable react/prop-types */
import { useState } from "react";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../features/hotelSlice";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.hotels.priceRange);

  // Use local state to manage the price range
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  // Function to handle price range changes and dispatch the action
  const handlePriceRangeChange = (newValue) => {
    setLocalPriceRange(newValue); // Update local state
    dispatch(setPriceRange(newValue)); // Dispatch the setPriceRange action
  };

  return (
    <div>
      <h3>Price Range:</h3>
      <Slider
        value={localPriceRange} // Use localPriceRange as the value
        onChange={(_, newValue) => handlePriceRangeChange(newValue)} // Pass newValue to the handler
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />
    </div>
  );
};

export default PriceSlider;
