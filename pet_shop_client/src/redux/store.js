import { configureStore } from "@reduxjs/toolkit";
import cartReduser from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'
import postReducer from './slices/postSlice'

const store = configureStore({
    reducer: {
        cart: cartReduser,
        products: productsReducer,
        categories: categoriesReducer,
        post: postReducer,
    },
});

export default store;