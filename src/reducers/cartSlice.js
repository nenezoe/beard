import {createSlice} from '@reduxjs/toolkit'
import { addProductToCart, removeCartProduct } from '../utils/cartUtils';


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    error: false
  }


  const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers:{
       addToCart: (state,action) => {
       state.cartItems = addProductToCart(state.cartItems, action.payload)  
       } ,
       removeCart: (state,action) => {
        state.cartItems = removeCartProduct(state.cartItems, action.payload)  
        } 
        
    },
    extraReducers:{
       
    }
        
  })
   
  export const selectCart = state => state.cartProducts;

  export const selectCartProductCount =  state => state.cartItems.reduce((calcQuantity, cartItem) =>
          calcQuantity + cartItem.quantity,
          0)
  
  export const selectCartTotal = state => state.cartProducts.reduce((calcQuantity, cartProduct) =>
          calcQuantity + cartProduct.quantity * cartProduct.price, 0)
  
  
  export const {addToCart,removeCart} = cartSlice.actions
  
  export default cartSlice.reducer
