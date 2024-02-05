import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

const rootReducer = combineReducers({
    users: userReducer,

});

const store = configureStore({
    reducer: rootReducer
});

export default store;


