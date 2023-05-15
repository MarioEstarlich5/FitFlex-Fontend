import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    user: {
      name:"",
      email:""
    },
    error: "",
}

export const userSlice = createSlice({
 name: 'user',
 initialState,  
 reducers: {

    startLoading: (state) => {
      state.isLoading = true;
    },

    setUser: (state, action ) => {
      state.user= action.payload
      state.isLoading = false;
    },

    setError: (state,action) => {
      state.error = action.payload
    }
 }
});

export const { startLoading,setUser,setError } = userSlice.actions

export default userSlice.reducer