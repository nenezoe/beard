import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice'
import userSlice from './userSlice'
import cartReducer from './cartSlice'


export default configureStore({
  reducer: {
   product: productSlice,
   user : userSlice,
   cart : cartReducer,
   devTools: true,
  },
});
