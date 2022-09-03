import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mainTask:[],
    completed:[],
    deleted:[]
};

const mainTaskSlice=createSlice({
    name:"main-task",
    initialState,
    reducers:{
        addMainTask:(state,action)=>{
            state.mainTask=[...state.mainTask,action.payload];
            localStorage.setItem("maintask",JSON.stringify(state.mainTask))
        },
        editMainTask:(state,action)=>{
            state.mainTask[action.payload.index]=action.payload.text;
            localStorage.setItem("maintask",JSON.stringify(state.mainTask))
        },
        completedMainTask:(state,action)=>{
            const newArr=state.mainTask.filter((i)=> i!==action.payload );
            // state.completed=[...state.completed,action.payload];
            state.mainTask=newArr;
            localStorage.setItem("maintask",JSON.stringify(state.mainTask))
            // localStorage.setItem("completed-maintask",JSON.stringify(state.completed))
        },
        loadMaintask:(state)=>{
            const task=JSON.parse(localStorage.getItem("maintask"));
            // const {mainTask}=task;
            state.mainTask=task;
        },
        delMainTask:(state,action)=>{
            const newArrMainTask=state.mainTask.filter(i=> i!==action.payload.id );
            const newArrCompleted=state.completed.filter(i=> i!==action.payload.id );
            
            state.deleted=[...state.delete,action.payload];
            state.mainTask=newArrMainTask;
            state.completed=newArrCompleted;
            // localStorage.setItem("maintask",JSON.stringify(state.mainTask))
        },
        delPermanentlyMainTask:(state,action)=>{
            const newArrDeleted=state.deleted.filter(i=> i!==action.payload.id );
            state.deleted=newArrDeleted;
        },

    }
});

const {editMainTask,delMainTask,addMainTask,delPermanentlyMainTask,completedMainTask,loadMaintask}=mainTaskSlice.actions
export {editMainTask,delMainTask,addMainTask,delPermanentlyMainTask,completedMainTask,loadMaintask};
export default mainTaskSlice.reducer;