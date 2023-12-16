import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/Product";
import Cart from "./slices/Cart";
import Users from "./slices/Users"
import CurrentUser from "./slices/CurrentUser";
const store = configureStore({
    reducer: {
        products: products,
        cart:Cart,
        users:Users,
        theCurentUser:CurrentUser,

    }
})

export default store;