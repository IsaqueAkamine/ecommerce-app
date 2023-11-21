import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const product = action.payload;
      state.favorites.push(product);
    },
  },
});

export const { setFavorite } = productsSlice.actions;

export default productsSlice.reducer;

export const favoriteList = (state) => state.products.favorites;
