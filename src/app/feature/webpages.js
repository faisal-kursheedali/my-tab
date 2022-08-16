import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {
        link:"https://www.w3schools.com/howto/howto_css_loader.asp",
        title:"w3 app"
    },

];

const webpgSlice=createSlice({
    name:"webpg",
    initialState,
    reducers:{
        addApp:(state,action)=>{
            return state=[...state,action.payload];
        },
        removeApp:(state,action)=>{
            const newArr=state.filter((i,index)=>index!==action.payload);
            return state=newArr;
        }
    }
});



const {addApp,removeApp}=webpgSlice.actions;
export {addApp,removeApp};
export default webpgSlice.reducer;
