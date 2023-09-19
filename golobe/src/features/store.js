import { configureStore } from "@reduxjs/toolkit";
import { userReducer, hotelReducer } from "../features";

const Store = configureStore({
  reducer: {
    user: userReducer,
    hotels: hotelReducer,
  },
});

export default Store;
