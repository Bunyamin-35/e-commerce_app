import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../../api";

const initialState = {
    users: [],
    status: "idle",
}

export const fetchAllUsers = createAsyncThunk('/users/fetchAllUsers', fetchUsers)
const usersSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            console.log("get-all-users:", action.payload);
            state.users.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = "succeded";
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = "failed";
            })

    }
})

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;