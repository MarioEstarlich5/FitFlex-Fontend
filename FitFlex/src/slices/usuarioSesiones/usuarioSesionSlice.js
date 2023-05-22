import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    sesions: [],
    isLoading: false,
    missatge: "",
    complet: false,
}
export const sesionSlice = createSlice({
    name: "UsuarioSesions",

    initialState,

    reducers: {

        startLoadingUsuarioSesions: (state) => {

            state.isLoading = true;

        },

        setUsuarioSesions: (state, action) => {

            state.sesions = action.payload

            state.isLoading = false
        },

        setMissatge: (state, action) => {

            state.error = action.payload

        },

        setComplet: (state,action) => {


            state.complet = action.payload
    
        },

    }
})

export const { startLoadingUsuarioSesions,setUsuarioSesions, setMissatge, setComplet } = sesionSlice.actions;

export default sesionSlice.reducer