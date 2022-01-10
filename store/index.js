import { configureStore } from '@reduxjs/toolkit' 
import counterReducer from 'features/count'
import cartReducer from 'features/cart'

export default configureStore({
  reducer: { 
    counter: counterReducer,
    cart: cartReducer,
  }
})