import { createSlice } from "@reduxjs/toolkit";
import bg1 from "../../assets/bg1.svg"
import bg2 from "../../assets/bg2.svg"
import bg3 from "../../assets/bg3.svg"
import bg4 from "../../assets/bg4.svg"
import bg5 from "../../assets/bg5.svg"
import bg6 from "../../assets/bg6.svg"

const initialState={
    bgArr:[bg1,bg2,bg3,bg4,bg5,bg6],
    bg:bg1,
};


const bgSlice=createSlice({
    name:"bg",
    initialState,
    reducers:{
        generateBg:(state)=>{
            let index=Math.floor(Math.random() * state.bgArr.length);
            console.log(index);
            state.bg=state.bgArr[index];
        }
    }
})

export const {generateBg}=bgSlice.actions;
export default bgSlice.reducer