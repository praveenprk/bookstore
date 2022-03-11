import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    frmData: null
}

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        register: (state, action) => {
            // console.log(action.payload)
            axios.post('/users/create', action.payload)
            .then(res => {
            
            if(res.data.errors != undefined) {
                toast.error("Registration failed due to server error", {
                    position: "top-center",
                    autoClose: 1000,
                })
            }

            if(res.data.status === true) {
                toast.success("Registration successful", {
                    position: "top-center",
                    autoClose: 1000,
                })
            }

            })
        },
    }
})

export const { register } = registerSlice.actions
export default registerSlice.reducer