import { createSlice } from "@reduxjs/toolkit";

const initialState={
    subTask:[],
    completed:[],
    deleted:[]
};

const subTaskSlice=createSlice({
    name:"sub-task",
    initialState,
    reducers:{
        addsubTask:(state,action)=>{
            state.subTask=[...state.subTask,action.payload];
        },
        completedsubTask:(state,action)=>{
            const newArr=state.subTask.filter(i=> i!==action.payload.id );
            state.completed=[...state.completed,action.payload];
            state.subTask=newArr;
        },
        delsubTask:(state,action)=>{
            const newArrsubTask=state.subTask.filter(i=> i!==action.payload.id );
            const newArrCompleted=state.completed.filter(i=> i!==action.payload.id );
            
            state.deleted=[...state.delete,action.payload];
            state.subTask=newArrsubTask;
            state.completed=newArrCompleted;
        },
        delPermanentlysubTask:(state,action)=>{
            const newArrDeleted=state.deleted.filter(i=> i!==action.payload.id );
            state.deleted=newArrDeleted;
        },

    }
});

const {delsubTask,addsubTask,delPermanentlysubTask,completedsubTask}=subTaskSlice.actions
export {delsubTask,addsubTask,delPermanentlysubTask,completedsubTask};
export default subTaskSlice.reducer;