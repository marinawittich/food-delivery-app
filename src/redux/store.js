import { configureStore } from '@reduxjs/toolkit'
import dishes from './CategorySlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    dishes,
    cart
  },
})