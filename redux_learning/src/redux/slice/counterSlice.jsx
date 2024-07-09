import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{user:0,},
    reducers:{
        increment: (state)=>{
            state.user += 1;
        },
        decrement: (state)=>{
            state.user -= 1;
        },
        incrementByAmount:(state,action)=>{
            state.user += action.payload;
        },
    }
})
export const {increment,decrement,incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer;