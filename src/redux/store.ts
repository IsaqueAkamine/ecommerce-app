import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import productReducer from "./Products/productSlice";

export const store = configureStore({
  reducer: { auth: authReducer, products: productReducer },
});
