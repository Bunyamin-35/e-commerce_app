import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/Product";
import Cart from "./slices/Cart";
const store = configureStore({
    reducer: {
        products: products,
        cart:Cart,
    }
})

export default store;