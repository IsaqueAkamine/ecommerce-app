import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import cartReducer from "./Cart/cartSlice";
import productReducer from "./Products/productSlice";

export const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer, products: productReducer },
});
