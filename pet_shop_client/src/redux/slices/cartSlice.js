import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);

      if (!item) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    updateQuantity: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
    }
},
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
