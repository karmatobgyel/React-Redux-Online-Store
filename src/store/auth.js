import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    userId: null,
  },
  reducers: {
    userLogin: (auth, action) => {
      console.log("logged in");
    },
  },
});

export const authActions = slice.actions;
export default slice.reducer;
