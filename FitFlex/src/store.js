import { configureStore } from '@reduxjs/toolkit'
import dietaSlice from './slices/dietas/dietaSlice'
import cursoSlice from './slices/cursos/cursoSlice'
import userSlice from './slices/users/userSlice'

export const store = configureStore({
  reducer: {
    dieta: dietaSlice,
    curso:cursoSlice,
    user:userSlice,
  }
})