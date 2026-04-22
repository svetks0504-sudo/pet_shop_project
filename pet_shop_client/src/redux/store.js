import { configureStore } from "@reduxjs/toolkit";
import cartReduser, { cartLocalStorageMiddleware } from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
  reducer: {
    cart: cartReduser,
    products: productsReducer,
    categories: categoriesReducer,
    post: postReducer,
  },
  middleware: (getDefoultMiddleware) => 
    getDefoultMiddleware().concat(cartLocalStorageMiddleware)
});
/*2. [default middleware] + [твій middleware] */
/*3. Redux збирає ланцюг
dispatch(action)
   ↓
middleware 1
   ↓
middleware 2
   ↓
reducer */

export default store;
