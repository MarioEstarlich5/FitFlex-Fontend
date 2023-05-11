import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cursos: [],
    curso: {
        filepath:"",
        titulo:"",
        descripcion:"",
        modalidad:"",
        duracion:0,
    },
    page: 1,
    pages: [],
    isLoading: true,
    missatge: "",
    inscribe: false,
    filter: { titulo: "", modalidad: ""},
}
export const cursoSlice = createSlice({
name: "curso",

 initialState,

 reducers: {

    startLoadingCursos: (state) => {

        state.isLoading = true;

    },

    setCursos: (state, action) => {

        state.cursos = action.payload


        state.isLoading = false
    },

    setCurso: (state, action) => {

        state.curso = action.payload


        state.isLoading = false
    },

    setMissatge: (state, action) => {

        state.error = action.payload

    },
    setInscribe: (state,action) => {

        //console.log("ABA")

        state.inscribe = action.payload

    },

    setPage: (state,action) => {

        state.page = action.payload
        
    },
    setPages: (state,action) => {

        state.pages = action.payload
        
    },
    setFiltre: (state,action) => {

        state.filter = action.payload
        
    }

 }
})

// Action creators are generated for each case reducer function
export const { startLoadingCursos,setCurso, setCursos, setMissatge,setInscribe,setPage ,setPages,setFiltre} = cursoSlice.actions

export default cursoSlice.reducer