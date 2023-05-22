import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    sesions: [{}],
    isLoading: false,
    missatge: "",
}
export const sesionSlice = createSlice({
    name: "sesion",

    initialState,

    reducers: {

         startLoadingSesions: (state) => {

            state.isLoading = true;

        },

        setSesions: (state, action) => {

            state.sesions = action.payload

            state.isLoading = false
        },

        setEjerciciosSesiones:(state, ) => {

            {sesions.map((sesion_ind) => (
                sesions.id == idSesion ?  state.sesions = {...sesions,ejercicios}:sesion_ind+1
            ))}
            
        },

        setMissatge: (state, action) => {

            state.error = action.payload

        },

    }
})

export const { startLoadingSesions,setSesions,setEjerciciosSesiones, setMissatge } = sesionSlice.actions;

export default sesionSlice.reducer