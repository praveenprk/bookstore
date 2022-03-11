import { configureStore } from "@reduxjs/toolkit"
import authSlice from '../features/auth/authSlice'
import productSlice from "../features/products/productSlice"
import registerSlice from "../features/register/registerSlice"

//creating store
export const store = configureStore({
    //combining reducers
    reducer: {
        auth: authSlice,
        register: registerSlice,
        product: productSlice,
    },
}) 

