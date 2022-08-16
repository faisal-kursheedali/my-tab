import React, { useState, useEffect } from 'react'
import "./css/time.css"

const Time = () => {
  const d = new Date();
  const [time, setTime] = useState({
    hr: 0,
    min: 0
  })
  useEffect(() => {
    setTime(prev => prev = {
      hr: d.getHours(),
      min: d.getMinutes()
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setTime(prev => prev = {
        hr: d.getHours(),
        min: d.getMinutes()
      });
    }, 10 * 1000)
  },[time]);
  const days = [ "sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  return (<>
    <div className="time-container">
      <div className="time-box">
        {time.hr>12?time.hr-12:time.hr}:{time.min}
      </div>
      <div className="date-box">
        {days[d.getDay()]} {d.getDate()},{d.getMonth()},{d.getFullYear()}
      </div>
    </div>
  </>
  )
}

export default Time