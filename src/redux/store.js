import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Cart/CartSlice"
import orderReducer from './Order/OrderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer
  },
})