import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  title: string;
  quantity: 0;
};

const initialState = {
  products: [] as TProduct[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.products.push(product);
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.products.find(
        (product) => product.id === productId
      );

      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.products = state.products.filter((item) => item !== cartItem);
      }
    },
    clearBasket: (state) => {
      state.products = initialState.products;
    },
  },
});

export const { addToCart, changeQuantity, clearBasket } = cartSlice.actions;

export default cartSlice.reducer;

export const cartList = (state) => state.cart.products;
