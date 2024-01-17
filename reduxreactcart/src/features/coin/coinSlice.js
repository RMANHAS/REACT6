import {  createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
  name: "coin",
  initialState: {
    cart: 10,
  },
  // reducer:{}
});
export default coinSlice.reducer;
