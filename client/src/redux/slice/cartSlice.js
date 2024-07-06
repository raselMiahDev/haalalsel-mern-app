import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeTocart: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});
export const { addToCart, removeTocart } = cartSlice.actions;
export default cartSlice.reducer;
