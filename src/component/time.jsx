import React, { useState,
  //  useEffect 
  } from 'react'
import "./css/time.css"

const Time = () => {
  const d = new Date();
  const [minute,setMinute]=useState(d.getMinutes());
    const [hour,setHour]=useState(d.getHours());
    const [day,setDay]=useState(d.getDay());
    const [month,setMonth]=useState(d.getMonth());
    const [year,setYear]=useState(d.getFullYear());
    const [date,setDate]=useState(d.getDate());
  // const [hr, setHr] = useState(0);
  // setTime(prev => prev = {
  //   hr: d.getHours(),
  //   min: d.getMinutes()
  // });
  setTimeout(()=>{
    setHour(prev=>prev=d.getHours())
    setMinute(prev=>prev=d.getMinutes())
  },10*1000)
  setTimeout(()=>{
        
    setDay(prev=>prev=d.getDay());  
    setMonth(prev=>prev=d.getsetMonth());  
    setYear(prev=>prev=d.getyear());  
    setDate(prev=>prev=d.getdate());  
},3600000) 
  // useEffect(
  //   ((realTime)=>{
  //     setTimeout(() => {
  //       realTime.hr=d.getHours();
  //       realTime.min=d.getMinutes();
  //     }, 30 * 1000)
  //   })(realTime)
      
    
  //   , [realTime]); 
  // useEffect(
    
  //     setTimeout(() => {
  //       console.log("calling")
  //       setTime(prev => prev = {
  //         hr: d.getHours(),
  //         min: d.getMinutes()
  //       });
  //     }, 30 * 1000)
    
  //   , [time]); 
  
  const days = [ "sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  return (<>
    <div className="time-container">
      <div className="time-box">
        {hour>12?hour-12:hour}:{minute}
      </div>
      <div className="date-box">
        {days[day]} {date},{month},{year}
      </div>
    </div>
  </>
  )
}

export default Time