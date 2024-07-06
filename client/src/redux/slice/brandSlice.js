import { createSlice } from "@reduxjs/toolkit";

export const brandSlice = createSlice({
  name: "brand",
  initialState: {
    value: [],
  },
  reducers: {
    addBrand: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBrand } = brandSlice.actions;
export default brandSlice.reducer;
