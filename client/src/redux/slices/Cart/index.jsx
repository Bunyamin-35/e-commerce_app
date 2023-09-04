import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    basket: JSON.parse(localStorage.getItem("basket") ?? "[]"),
    selectedProduct: {}
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleAddtoCart: (state, action) => {
            const temp = { ...action.payload }
            const isExist = state.basket.find((item) => item._id === temp._id)
            state.selectedProduct = temp
            if (isExist) {
                isExist.count += 1
                localStorage.setItem("basket", JSON.stringify(state.basket))
            } else {
                temp.count = 1
                state.basket.push(temp)
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }

        },
        handleIncreaseCount: (state, action) => {
            const temp = { ...action.payload }
            const isExist = state.basket.find((item) => item._id === temp._id)
            state.selectedProduct = temp
            if (isExist) {
                isExist.count += 1
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }
        },
        handleDecreaseCount: (state, action) => {
            const temp = { ...action.payload }
            const isExist = state.basket.find((item) => item._id === temp._id)
            state.selectedProduct = temp
            if (isExist) {
                isExist.count -= 1
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }
        },
        handleDeleteItem: (state, action) => {
            const temp = { ...action.payload };
            const updatedBasket = state.basket.filter((item) => item._id !== temp._id);
            state.basket = updatedBasket;
            localStorage.setItem("basket", JSON.stringify(updatedBasket));
        }
    }
})

export const { handleAddtoCart, handleIncreaseCount, handleDecreaseCount, handleDeleteItem } = cartSlice.actions;
export default cartSlice.reducer;