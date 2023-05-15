import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ejercicios: [],
    isLoading: false,
    missatge: "",
}
export const ejercicioSesionSlice = createSlice({
    name: "ejercicio",

    initialState,

    reducers: {

         startLoadingEjercicios: (state) => {

            //console.log("ABA")

            state.isLoading = true;

        },

        setEjercicios: (state, action) => {

            state.sesions = action.payload

            state.isLoading = false
        },

        setMissatge: (state, action) => {

            state.error = action.payload

        },

    }
})

export const { startLoadingEjercicios,setEjercicios, setMissatge } = ejercicioSesionSlice.actions;

export default ejercicioSesionSlice.reducer