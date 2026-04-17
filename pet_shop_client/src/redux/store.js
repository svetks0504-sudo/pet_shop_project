import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slices/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReduser,
    },
});

export default store;