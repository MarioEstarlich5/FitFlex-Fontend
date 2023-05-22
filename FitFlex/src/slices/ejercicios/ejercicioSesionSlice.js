import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ejercicios: [],
    ejercicio: {
        titulo:"",
        descripcion:"",
        id_video:""
      },
    isLoading: false,
    missatge: "",
}
export const ejercicioSesionSlice = createSlice({
    name: "ejercicio",

    initialState,

    reducers: {

         startLoadingEjercicios: (state) => {

            state.isLoading = true;

        },

        setEjercicios: (state, action) => {

            state.ejercicios = action.payload

            state.isLoading = false
        },

        setMissatge: (state, action) => {

            state.error = action.payload

        },

    }
})

export const { startLoadingEjercicios,setEjercicios, setMissatge, setEjercicio } = ejercicioSesionSlice.actions;

export default ejercicioSesionSlice.reducer