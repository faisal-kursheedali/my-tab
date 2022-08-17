import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from '../app/feature/news';
import "./css/news.css"

const News = () => {
  const state = useSelector(store => store.news);
  const dispatch = useDispatch();
  useEffect(() => {
      if (state.data!==[]) {
        
        dispatch(fetchNews());
      }
   
    // console.log(state.data);
  },[state.data])
  return (
    <>
      {
        state.data !== [] ? (
          <>
            {
              state.data.map((i, index) => {
                // console.log(i);
                return(
                <div className="news-container" key={index}>
                  <a href={i.link} className="news-link">
                  <img src={i.media} alt="" className="news-img" />
                  <div className="news-detail">
                    <div className="news-head">{i.title}</div>
                    {/* <div className="news-sub">{i.summary}</div> */}
                  </div>
                  </a>
                </div>)
              })
            }
          </>
         ) : ""
      } 

    </>
  )
}

export default News