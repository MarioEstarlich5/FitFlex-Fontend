import { configureStore } from '@reduxjs/toolkit'
import dietaSlice from './slices/dietas/dietaSilice'
import cursoSlice from './slices/cursos/cursoSlice'
import sesionSlice from './slices/sesiones/sesionSlice'

export const store = configureStore({
  reducer: {
    dieta: dietaSlice,
    curso:cursoSlice,
    sesion:sesionSlice
  }
})