import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theUser:"",
    status:"idle",
}

const currentUserSlice = createSlice({
  name:"theCurentUser",
  initialState,
  reducers:{
    setCurrentUser: (state,action) => {
        state.theUser=(action.payload)
        
    }
  }

})

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;