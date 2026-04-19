import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existing = state.cart.find(
                (item) => item.id === action.payload.id);
                if(existing){
                    existing.quantity +=1;
                }else{
            state.cart.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;