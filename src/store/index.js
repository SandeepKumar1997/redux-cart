import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-redux";
import cartSlice from "./cart-redux";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
