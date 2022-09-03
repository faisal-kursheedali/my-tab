import React, { useState } from 'react';
import "./css/webpg.css";
import { useDispatch, useSelector } from "react-redux"
import { addApp } from '../app/feature/webpages';
import {FaGlobeAmericas} from "react-icons/fa"


const Webpg = () => {
  const [create, setCreate] = useState(false);
  const state = useSelector(store => store.webpg)

  // const [useImg, setUseImg] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  
  const dispatch = useDispatch();
  console.log(state);
  // const webIcnHandler = (title,link) => {
  //   fetch(`${link}/favicon.ico`).then((res) =>{
  //     if (res.status===200) {
  //       // setUseImg(true)
  //       setUseImg(<img src={`${link}/favicon.ico`} alt="" className="webpg-img" />);
  //       return(<img src='${link}/favicon.ico' alt="" className="webpg-img" />)
  //     }else{
  //       // setUseImg(false)
  //       setUseImg(<div className="web-title-icn">
  //       {title.charAt()}
  //     </div>)
  //     return(<div className="web-title-icn">
  //     {title.charAt()}
  //   </div>)
  //     }
  //   })
  // }
  // function isImage(url) {
  //   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  // }
  
  return (
    <>
      <div className="webpg-container">
        {create ? <div className="webpg-create-box">
          <input type="text" className="user-input-webpg-title" placeholder='title' value={title} onChange={(e) => setTitle(prev => prev = e.target.value)} />
          <input type="text" className="user-input-webpg-link" placeholder='link' value={link} onChange={(e) => setLink(prev => prev = e.target.value)}  />
          <button className="webpg-btn" onClick={() => {
            if (title !== "" && link !== "") {
              console.log(link);
              dispatch(addApp({
                title: title,
                link: link
              }))
            }
            setLink("");
            setTitle("");
            setCreate(false)
          }}>add</button>
        </div> : ""}
        {
          create === false ? <button className="create-new-app" onClick={() => setCreate(true)}>add new</button> : ""
        }
        <ul className="webpg-list">
          {
            state.map((i, index) => {
              return (
                <li className="webpg-list-item" key={index}>
                  <a href={i.link} className="webpg-link">
                    <div className="webpg-icn">
                      <FaGlobeAmericas/>
                   </div>
                    <div className="webpg-title">{i.title}</div>
                  </a>
                </li>
              )
            })
          }
        </ul>

      </div>

    </>
  )
}

export default Webpg