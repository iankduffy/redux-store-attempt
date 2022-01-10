import { createSlice, current } from '@reduxjs/toolkit' 
import {cart} from './initalState'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ...cart
  },
  reducers: {
    addToBag: (state, {payload})  => {
      const cart = current(state)
      const newCart = { ...cart }
      
      newCart.attributes = {
        ...newCart.attributes,
        line_items_count: newCart.attributes.line_items_count + 1, 
        total: newCart.attributes.total + payload.price
      }

      const { reference, quantity, price, variant, varient_sku, title, picture_url } = payload
      console.log(payload)

      newCart.items = [
        ...newCart.items,
        {
          title,
          reference, 
          quantity, 
          price, 
          variant, 
          varient_sku, 
          picture_url,
        }
      ]

      console.log(newCart)
      return newCart
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBag } = cartSlice.actions

export default cartSlice.reducer