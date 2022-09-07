import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    porductRequested: (products, action) => {
      products.loading = true;
    },
    productRequestSuccess: (products, action) => {
      products.productList = action.payload.data;
    },
    productRequestFail: (products, action) => {},
    productReceived: (products, action) => {},
  },
});

export const productActions = slice.actions;
export default slice.reducer;
