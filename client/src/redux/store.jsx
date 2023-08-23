import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
const store = configureStore({
    reducer: {
        products: products,
    }
})

export default store;