import { createSlice } from "@reduxjs/toolkit";
import userData from "../data/userData";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: userData,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, action) => {
      const { id } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...action.payload,
        };
      }
    },
  },
});

export const { setCurrentUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
