import { configureStore } from '@reduxjs/toolkit'
import dietaSlice from './slices/dietas/dietaSilice'


export const store = configureStore({
  reducer: {
    dieta: dietaSlice
  }
})