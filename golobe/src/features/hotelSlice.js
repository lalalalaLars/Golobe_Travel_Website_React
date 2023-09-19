// features/hotelSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { hotelData } from "../data";

const initialState = {
  allHotels: hotelData,
  filteredHotels: [],
  priceRange: [0, 500],
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    // Reducer to filter hotels
    filterHotels: (state, action) => {
      const { destination, checkInDate, checkOutDate, priceRange } =
        action.payload;

      // Filter hotels based on criteria and update the list of filtered hotels
      state.filteredHotels = state.allHotels.filter((hotel) => {
        // Check if hotel object and its properties are defined
        if (
          hotel &&
          hotel.city &&
          hotel.available_dates &&
          Array.isArray(hotel.available_dates) && // Make sure available_dates is an array
          destination
        ) {
          return (
            (destination === "" ||
              hotel.city.toLowerCase() === destination.toLowerCase()) &&
            hotel.available_dates.includes(checkInDate) &&
            hotel.available_dates.includes(checkOutDate) &&
            priceRange[0] <= hotel.price &&
            hotel.price <= priceRange[1]
          );
        } else {
          // If any required property is undefined or available_dates is not an array, exclude this hotel
          return false;
        }
      });
    },
  },
});

export const { filterHotels, setPriceRange } = hotelSlice.actions;
export default hotelSlice.reducer;
