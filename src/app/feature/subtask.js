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
            console.log(state.subTask);
            localStorage.setItem("subtask",JSON.stringify(state.subTask));
        },
        completedsubTask:(state,action)=>{
            const newArr=state.subTask.filter(i=> i.id!==action.payload.id );
            // state.completed=[...state.completed,action.payload];
            state.subTask=newArr;
            localStorage.setItem("subtask",JSON.stringify(state.subTask));
        },
        loadSubtask:(state)=>{
            const task=JSON.parse(localStorage.getItem("subtask"));   
            // console.log(task);
            // const {subTask}=task;
            // console.log(subTask);
            state.subTask=task;
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

const {delsubTask,addsubTask,delPermanentlysubTask,completedsubTask,loadSubtask}=subTaskSlice.actions
export {delsubTask,addsubTask,delPermanentlysubTask,completedsubTask,loadSubtask};
export default subTaskSlice.reducer;