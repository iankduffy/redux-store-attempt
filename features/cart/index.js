import { createSlice, current } from '@reduxjs/toolkit' 
import {cart} from './initalState'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart
  },
  reducers: {
    addToBag: (state)  => {
      const test = current(state)
      // const newItems = [...items]

      console.log(test)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBag } = cartSlice.actions

export default cartSlice.reducer