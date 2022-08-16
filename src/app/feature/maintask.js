import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mainTask:["hii","byee","good morning"],
    completed:[],
    deleted:[]
};

const mainTaskSlice=createSlice({
    name:"main-task",
    initialState,
    reducers:{
        addMainTask:(state,action)=>{
            state.mainTask=[...state.mainTask,action.payload];
        },
        editMainTask:(state,action)=>{
            state.mainTask[action.payload.index]=action.payload.text;
        },
        completedMainTask:(state,action)=>{
            const newArr=state.mainTask.filter((i)=> i!==action.payload );
            state.completed=[...state.completed,action.payload];
            state.mainTask=newArr;
        },
        delMainTask:(state,action)=>{
            const newArrMainTask=state.mainTask.filter(i=> i!==action.payload.id );
            const newArrCompleted=state.completed.filter(i=> i!==action.payload.id );
            
            state.deleted=[...state.delete,action.payload];
            state.mainTask=newArrMainTask;
            state.completed=newArrCompleted;
        },
        delPermanentlyMainTask:(state,action)=>{
            const newArrDeleted=state.deleted.filter(i=> i!==action.payload.id );
            state.deleted=newArrDeleted;
        },

    }
});

const {editMainTask,delMainTask,addMainTask,delPermanentlyMainTask,completedMainTask}=mainTaskSlice.actions
export {editMainTask,delMainTask,addMainTask,delPermanentlyMainTask,completedMainTask};
export default mainTaskSlice.reducer;