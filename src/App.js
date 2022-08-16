import './App.css';
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
// import { fetchNews } from './app/feature/news';
// import { fetchWeather } from './app/feature/weather';
import { generateBg } from './app/feature/bg';
// import { fetchquote, generateQuote } from './app/feature/quote';
// import Maintask from './component/maintask';
import Main from './main';

function App() {
  // const state = useSelector(store => store.news);
  const bg = useSelector(store => store.bg);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(generateBg());
    // dispatch(generateQuote());
  },)
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
