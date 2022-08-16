import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addMainTask, editMainTask } from '../app/feature/maintask';
import {AiFillEdit} from "react-icons/ai"
import "./css/maintask.css"

const Maintask = () => {
    const state = useSelector(store => store.maintask)
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [newTask, setNewTask] = useState(false);
    const [newTaskValue, setNewTaskValue] = useState("");
    const data = state.mainTask;
    return (
        <div className="maintask-container">
            <div className="main-task-head">Main task </div>
            {edit?<button className="maintask-edit-btn" onClick={()=>setEdit(false)}>done</button>:''}
            <div className="maintask-list">
            {

                data.map((i,index) => {
                    return (

                        !edit ? (
                            <div className="maintask-display">
                                {i}
                            </div>) : (
                                <div className="maintask-input-container">
                                    <input type="text" className="maintask-input" placeholder='Enter the main task' value={i} onChange={(e)=>{
                                        dispatch(editMainTask({
                                            index:index,
                                            text:e.target.value
                                        }));
                                    }}/>
                                </div>
                            
                        )
                    )
                })
                
            }
            </div>
            <button className="maintask-new-task-btn" onClick={()=>setNewTask(prev=>prev=!prev)}>{newTask?"-":"+"}</button>
            <button className="maintask-edit-task-btn"  onClick={()=>setEdit(prev=>prev=!prev)}><AiFillEdit/></button>

            {
                newTask?(
                    <>
                    <div className="new-maintask-container">
                    <input type="text" className="maintask-new-input" value={newTaskValue} onChange={(e)=>setNewTaskValue(prev=>prev=e.target.value)}/>
                    <button className="maintask-new-btn" onClick={()=>{
                        setNewTask(false)
                        if (newTaskValue!=="") {
                            dispatch(addMainTask(newTaskValue));
                        }
                        setNewTaskValue(prev=>prev="")
                    }}>add</button>
                    </div>
                    </>
                ):("")
            }
        </div>
    )
}

export default Maintask