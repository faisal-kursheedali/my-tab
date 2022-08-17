import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../app/feature/weather';
import "./css/temp.css"

const Temparature = () => {
  const state=useSelector(store=>store.weather);
  const data=state.data;
  const [location,setLocation]=useState({
    lat:0,lon:0  
  })
  const dispatch=useDispatch();
  useEffect(() => {
  (()=>{
    window.navigator.geolocation.getCurrentPosition(
      (i) => {
             setLocation(prev=>prev={lat:i.coords.latitude,lon:i.coords.longitude});
           })
  })()
  },[]);
  useEffect(() => {
    if (location.lat!==0&&location.lon!==0) {
      
      dispatch(fetchWeather(location));
    }
    
  }, [location,dispatch]);
  useEffect(()=>{
    console.log(state.data);
  },[state]);

  return (
    <>
    {
      data.main?(<div className="weather-container">
      <div className="temp-box">
       {Math.round(data.main.temp-273)+" °C"}
      </div>
      <div className="climate-box">
        {data.weather[0].main}
      </div>
    </div>):("")
    }
    
    </>
    
  )
}

export default Temparature