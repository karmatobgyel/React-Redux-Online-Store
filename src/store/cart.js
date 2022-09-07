import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (cart, action) => {},
  },
});

export const cartActions = slice.actions;
export default slice.reducer;
