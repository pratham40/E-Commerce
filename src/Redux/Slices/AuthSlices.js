import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isLoggedIn:false,
    role:"",
    data:new Object()
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true
            state.role=action.payload.role
            state.data=action.payload.data
        },
        logout:(state)=>{
            state.isLoggedIn=false
            state.role=""
            state.data=null
        }
    }
})

export const {login,logout}=authSlice.actions

export default authSlice.reducer