import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../../api";
import axios from "axios"


const initialState = {
    products: [],   
    status: "idle",
}

export const fetchProductList = createAsyncThunk('/products/fetchProductList',fetchProducts)
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            console.log("ap", action.payload);
            state.products.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.status = "succeded";
                state.products = action.payload;
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                state.status = "failed";
            })

    }

})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;