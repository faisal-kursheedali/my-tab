import './App.css';
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
// import { fetchNews } from './app/feature/news';
// import { fetchWeather } from './app/feature/weather';
import { generateBg } from './app/feature/bg';
// import { fetchquote, generateQuote } from './app/feature/quote';
// import Maintask from './component/maintask';
import Main from './main';
import { loadMaintask } from './app/feature/maintask';
import { loadSubtask } from './app/feature/subtask';
import { loadAppLink } from './app/feature/webpages';

function App() {
  // const state = useSelector(store => store.news);
  const bg = useSelector(store => store.bg);
  // const stateMain = useSelector(store => store.maintask);
  // const stateSub = useSelector(store => store.subtask);
  const dispatch=useDispatch();
  // useEffect(()=>{
  //   console.log(stateMain);
  //   localStorage.setItem("myTabTask",JSON.stringify({
  //     mainTask:stateMain.mainTask,
  //     subTask:stateSub.subTask
  //   }))
  // //   if (stateMain.mainTask.length&& stateSub.subTask.length === 0) {
  // //    return""
  // // }else{
     
  // // }
  // },[stateMain,stateSub]);
  const getLocalStorage=(pram)=>{
    return localStorage.getItem(pram);
  }
  const setLocalStorage=(pram,value)=>{
    return localStorage.setItem(pram,value)
  }
  if (!(getLocalStorage("maintask")&&getLocalStorage("link")&&getLocalStorage("subtask"))) {
    console.log( getLocalStorage("maintask"));
    console.log(typeof getLocalStorage("maintask"));
    let arr=[];
    setLocalStorage("maintask",JSON.stringify(arr));
    setLocalStorage("subtask",JSON.stringify(arr));
    setLocalStorage("link",JSON.stringify(arr));
  }
  // console.log(localStorage.getItem("maintask"));
  useEffect(()=>{
      dispatch(loadMaintask());
      dispatch(loadSubtask());
      dispatch(loadAppLink());
  },[dispatch])
  useEffect(()=>{
    dispatch(generateBg());
    // dispatch(generateQuote());
  },[dispatch])
  useEffect(()=>{
    document.body.style.backgroundImage=`url(${bg.bg})`;
    console.log(bg.bg);
  },[bg])
  
  return (
    <>
    <Main/>
    
    </>
  );
}

export default App;
