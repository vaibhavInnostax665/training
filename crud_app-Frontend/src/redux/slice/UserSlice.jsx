import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'users',
    initialState : {
        details:[],
        sNo:0,
update:false,
    },
    reducers:{
        createUser:(state,action)=>{
state.details = [...state.details,action.payload]
        },
        deleteUser:(state,action)=>{
    console.log(action.payload);
state.details = action.payload;
        },
        updateUser:(state,action)=>{
state.details[action.payload.sNo] = action.payload.details;
        },
        updateSNo:(state,action)=>{
state.sNo = action.payload;
        },
        changeUpdate:(state,action)=>{
state.update = action.payload;
        },
    }
})

export const {createUser,deleteUser,updateUser,changeUpdate,updateSNo} = userSlice.actions;
export default userSlice.reducer;

