import {Maintask,Temparature,Time,News,Webpg,Quote} from "./component/import";
import "./main.css"

import React,{useState} from 'react';
import {FcNews,FcTodoList} from "react-icons/fc";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {IoAppsSharp} from "react-icons/io5"

const Main = () => {
  const[news,setNews]=useState(false)
  const[todo,setTodo]=useState(false)
  const[webpg,setWebpg]=useState(false)
  return (
    <div className="app-container">
      {
        news?<div className="news-box">
        <div className="side-box-close-btn" onClick={()=>setNews(prev=>prev=false)}><AiOutlineCloseCircle className="side-box-close-icn"/></div>
        <div className="box-head">NEWS</div>
        <div className="box-content">
          <News/>
        </div>

      </div>:""
      }
        {
          todo?<div className="todo-box">
          <div className="side-box-close-btn" onClick={()=>setTodo(prev=>prev=false)}><AiOutlineCloseCircle className="side-box-close-icn"/></div>
            <div className="box-head">TODO</div>
        <div className="box-content">
          hii
        </div>

        </div>:""
        }
        
        {
          webpg?<div className="webpg-box">
            <div className="box-head">APP</div>
          <div className="side-box-close-btn" onClick={()=>setWebpg(prev=>prev=false)}><AiOutlineCloseCircle className="side-box-close-icn"/></div>
        <div className="box-content">
         <Webpg/>
        </div>

        </div>:""
        }
        
        <div className="main-page">
        <div className="time-box"><Time/></div>
        <div className="weather-box">
          <Temparature/>
        </div>
        <div className="quote-box">
          <Quote/>
        </div>
        {
          webpg===false&&todo===false&&news===false?(<>
          <div className="news-btn" onClick={()=>setNews(prev=>prev=true)}><FcNews/></div>
          <div className="app-btn" onClick={()=>setWebpg(prev=>prev=true)}><IoAppsSharp/></div>
        <div className="todo-btn" onClick={()=>setTodo(prev=>prev=true)}><FcTodoList /></div></>):""
        }
        
        </div>
        <div className="maintask-box">
          <Maintask/>
        </div>
    </div>
  )
}

export default Main