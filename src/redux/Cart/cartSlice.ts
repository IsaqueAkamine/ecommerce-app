import { createSelector, createSlice } from "@reduxjs/toolkit";

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
  selectedCreditCard: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const cartItem = state.products.find((item) => item.id === newProduct.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.products.push(newProduct);
      }
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
    selectCreditCard: (state, action) => {
      state.selectedCreditCard = action.payload;
    },
  },
});

export const { addToCart, changeQuantity, clearBasket, selectCreditCard } =
  cartSlice.actions;

export default cartSlice.reducer;

export const cartList = (state) => state.cart.products;
export const creditCardSelected = (state) => state.cart.selectedCreditCard;

export const selectTotal = (state) =>
  state.cart.products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
