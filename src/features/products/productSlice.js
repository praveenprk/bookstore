import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productData: {}
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action) => {
        state.productData = action.payload
        // console.log(state.productData)
    }
  }
});

export const {  setProductData  } = productSlice.actions

export default productSlice.reducer