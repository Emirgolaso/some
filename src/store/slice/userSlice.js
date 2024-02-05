import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, deleteUsers, createUsers } from "../reducers/userReducer";


const initialState = {
    users: [],
    isLoading: false,
    isError: "",

};

const userSlice = createSlice({
    initialState,
    name: "users",
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
            state.users = [];
        })
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = action.payload;
        })
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = [];
        })




        builder.addCase(createUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
            // state.users = [];
        })
        builder.addCase(createUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users.push(action.payload);
        })
        builder.addCase(createUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })



        builder.addCase(deleteUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = "";
        })
        builder.addCase(deleteUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.users = state.users.filter((user) => user.id !== action.payload);
        })
        builder.addCase(deleteUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })



       
    }
})

const userReducer = userSlice.reducer;
export default userReducer;