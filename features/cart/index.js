import { createSlice, current } from '@reduxjs/toolkit' 
import {cart} from './initalState'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ...cart
  },
  reducers: {
    addToBag: (state, payload)  => {
      console.log({payload})
      const cart = current(state)
      const newCart = { ...cart }

      newCart.attributes = {
        ...newCart.attributes,
        line_items_count: newCart.attributes.line_items_count + 1
      }

      console.log(newCart)
      return newCart
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBag } = cartSlice.actions

export default cartSlice.reducer