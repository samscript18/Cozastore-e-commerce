import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
const cartItems = getCartFromLocalStorage();

const initialState = {
  cart: cartItems,
  amount: 0,
  total: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addToCart: (state, item) => {
      item.payload.inCart = true;
      state.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cart = state.cart.filter((item) => item.payload.id !== itemID);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
    increase: (state, { payload }) => {
      const cartItem = state.cart.find(
        (item) => item.payload.id === payload.id
      );
      cartItem.payload.amount = cartItem.payload.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find(
        (item) => item.payload.id === payload.id
      );
      cartItem.payload.amount = cartItem.payload.amount - 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cart.forEach((item) => {
        amount += item.payload.amount;
        total += item.payload.price * item.payload.amount;
      });
      state.amount = amount;
      state.total = total;
    }
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  removeItem,
  clearCart,
  increase,
  decrease,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
