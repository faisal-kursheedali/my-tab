import React,{useEffect} from 'react'
import { generateQuote } from '../app/feature/quote';
import {useSelector,useDispatch} from "react-redux"

const Quote = () => {
  const quoteState = useSelector(store => store.quote);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(generateQuote());
  },[])
  
  return (
    <div>
      <div className=''>{quoteState.quote.text} </div>
    <div className=''>-{quoteState.quote.author} </div>
    </div>
  )
}

export default Quote