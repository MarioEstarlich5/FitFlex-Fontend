import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dietas: [],
    dieta: {
      nombre:"",
      descripcion:"",
      file:{filepath:""}
    },
    error: "",
}

export const dietaSlice = createSlice({
 name: 'dieta',
 initialState,  
 reducers: {

    startLoading: (state) => {
      state.isLoading = true;
    },

    setDietas: (state, action ) => {
      state.dietas= action.payload
      state.isLoading = false;
    },

    setError: (state,action) => {
      state.error = action.payload
    }
 }
});

export const { startLoading,setDietas,setDieta,setError } = dietaSlice.actions

export default dietaSlice.reducer