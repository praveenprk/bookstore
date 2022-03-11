import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem("userInfo"))

const initialState = {
  isLogged: user ? 1 : 0,
  userDetails: user ? user : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    logoutUser: (state) => {
      state.isLogged = 0
      state.userDetails = {}
    },
  
  },
})

export const { logoutUser } = authSlice.actions

export default authSlice.reducer