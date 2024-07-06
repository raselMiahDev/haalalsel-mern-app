import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import brandSlice from "../slice/brandSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    brand: brandSlice,
  },
});
export default store;
