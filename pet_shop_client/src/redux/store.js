import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'

const store = configureStore({
    reducer: {
        cart: cartReduser,
        products: productsReducer,
        categories: categoriesReducer,
    },
});

export default store;