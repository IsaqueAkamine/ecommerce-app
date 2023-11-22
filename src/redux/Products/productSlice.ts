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
      const favoriteProduct = state.favorites.find(
        (item) => item?.id === product.id
      );
      if (favoriteProduct) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== favoriteProduct.id
        );
      } else {
        state.favorites.push(product);
      }
    },
  },
});

export const { setFavorite } = productsSlice.actions;

export default productsSlice.reducer;

export const favoriteList = (state) => state.products.favorites;
