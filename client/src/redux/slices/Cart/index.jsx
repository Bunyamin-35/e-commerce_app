import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    basket:JSON.parse(localStorage.getItem("basket") ?? "[]"),
    selectedProduct:{}
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        handleAddtoCart : (state,action) => {
            const temp = { ...action.payload }
            console.log("temp:",temp.item);
            const isExist = state.basket.find((item) => item.item._id === temp.item._id)
            state.selectedProduct = temp.item
            if (isExist) {
                isExist.count += 1
                localStorage.setItem("basket", JSON.stringify(state.basket))
            } else {
                temp.count = 1
                state.basket.push(temp)
                localStorage.setItem("basket", JSON.stringify(state.basket))
            }
            console.log(state.basket);  
        }
    }
})

export const {handleAddtoCart} = cartSlice.actions;
export default cartSlice.reducer;