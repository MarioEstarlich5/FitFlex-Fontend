import { configureStore } from '@reduxjs/toolkit'
import dietaSlice from './slices/dietas/dietaSlice'
import cursoSlice from './slices/cursos/cursoSlice'
import sesionSlice from './slices/sesiones/sesionSlice'
import usuarioSesionSlice from './slices/usuarioSesiones/usuarioSesionSlice'
import userSlice from './slices/users/userSlice'
import ejercicioSesionSlice from './slices/ejercicios/ejercicioSesionSlice'


export const store = configureStore({
  reducer: {
    dieta: dietaSlice,
    curso:cursoSlice,
    sesion:sesionSlice,
    usuarioSesion:usuarioSesionSlice,
    user:userSlice,
    ejercicio:ejercicioSesionSlice

  }
})