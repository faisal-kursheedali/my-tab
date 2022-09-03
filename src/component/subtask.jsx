import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addsubTask, completedsubTask } from '../app/feature/subtask';
// import SubtaskCompleted from './subtaskCompleted';
import { v4 as uuid } from 'uuid';
// import { useEffect } from 'react';
import { completedMainTask } from '../app/feature/maintask';



const Subtask = () => {
  const dispatch=useDispatch();
  const [head,setHead]=useState("");
  const [desc,setDesc]=useState("");
  const state=useSelector(store=>store.subtask);
  const stateMainTask=useSelector(store=> store.maintask);
  const mainTask=stateMainTask.mainTask;
  const {subTask}=state;
  console.log(mainTask);
  
  return (
    <div className="subtask-container">
      <input type="text" className="subtask-head-input" value={head} onChange={(e)=>setHead(prev=>prev=e.target.value)} />
      <textarea name="" id="" cols="30" rows="10" className='subtask-desc-input' value={desc} onChange={(e)=>setDesc(prev=>prev=e.target.value)}></textarea>
      <button className="subtask-head-button" onClick={()=>{
        dispatch(addsubTask({id:uuid(),head,desc}))
        console.log(subTask);
        // localStorage.setItem("myTabTask",JSON.stringify({
        //   mainTask:mainTask,
        //   subTask:subTask
        // }))
        setHead("");
        setDesc("");
      }}>ADD</button>
      <div className="subtask-display-maintask-container">
        <div className="subtask-maintask-head">Main Task</div>
        <ul className="subtask-main-task-list">
        {
        mainTask.map((i,index)=>{
          return(

            <li className="subtask-main-task-list-item">
              <label htmlFor={`main-task-input${index}`} onClick={()=>{
                dispatch(completedMainTask(i));
                console.log(subTask);
                // localStorage.setItem("myTabTask",JSON.stringify({
                //   mainTask:mainTask,
                //   subTask:subTask
                // }));
              }}>
                <input type="checkbox" id={`main-task-input${index}`}/>
                {i}
              </label>
            </li>
          )
        })
      }
      </ul>
      </div>
      <div className="subtask-display-container">

      <div className="subtask-display-container-head">Sub task</div>
       
          <ul className="subtask-display-list">
        {
          subTask.map((i)=>{
           
            console.log(i);
            return(<li className="subtask-display-list-item">
              <div className="subtask-display-input-box">
              <label htmlFor={`task${i.id}`} className="subtask-list-lable" onClick={()=>{
                  dispatch(completedsubTask({id:i.id,head:i.head,desc:i.desc}));
                  // localStorage.setItem("myTabTask",JSON.stringify({
                  //   mainTask:mainTask,
                  //   subTask:subTask
                  // }));
                }} >
                <input type="checkbox" name="" id={`task${i.id}`} />
                {i.head}
              </label>
              {/* <button className="subtask-display-button" >Know more</button> */}
              </div>
              
               <div className="subtask-display-desc">
                {i.desc}
              </div>
              
            </li>)
          })
        }
      </ul>
        </div>
      
    </div>
  )
}

export default Subtask