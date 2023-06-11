import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import {createApi,fetchBaseQuery,create} from "@reduxjs/toolkit/query/react"
import axios from 'axios'



const initialState = {
  products: [],
  loading: false,
  error: false
}

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  // const response = await fetch("https://beardmen-store-api.herokuapp.com/api/products")
  try {
		const  data  = await axios.get("https://breadmen-api.onrender.com/api/products")
	   return data.data
	} catch (error) {
	return error.response && error.response.data.message
  }
})


 const productSlice = createSlice({
   name: "products",
  initialState,
  reducers:{
   
    // rehydate(state,action){
    //   state.loading = action.payload.loading;
    //   state.error = action.payload.error;
    //   state.products  = action.payload.products;
    //   state.cartProducts = action.payload.cartProducts;
    // }
    
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProduct.fulfilled, (state,action) => {
      state.loading = false;
      state.products = action.payload.data;

    })
    .addCase(getProduct.rejected, (state) => {
      state.loading  = true;
      state.error = true;
    })
  }
})


export default productSlice.reducer
