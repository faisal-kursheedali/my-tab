import { createSlice } from "@reduxjs/toolkit";
const initialState=[];

const webpgSlice=createSlice({
    name:"webpg",
    initialState,
    reducers:{
        addApp:(state,action)=>{
            state=[...state,action.payload];
            localStorage.setItem("link",JSON.stringify(state))
            return state;
        },
        loadAppLink:(state)=>{
            state=JSON.parse(localStorage.getItem("link"))
           return state
        },
        removeApp:(state,action)=>{
            const newArr=state.filter((i,index)=>index!==action.payload);
            state=newArr;
            // localStorage.setItem("link",JSON.stringify(state))
            return state;
        }
    }
});



const {addApp,removeApp,loadAppLink}=webpgSlice.actions;
export {addApp,removeApp,loadAppLink};
export default webpgSlice.reducer;
