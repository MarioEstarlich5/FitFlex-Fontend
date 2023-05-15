import { configureStore } from '@reduxjs/toolkit'
import dietaSlice from './slices/dietas/dietaSlice'
import cursoSlice from './slices/cursos/cursoSlice'
import sesionSlice from './slices/sesiones/sesionSlice'
import userSlice from './slices/users/userSlice'


export const store = configureStore({
  reducer: {
    dieta: dietaSlice,
    curso:cursoSlice,
    sesion:sesionSlice,
    user:userSlice,

  }
})