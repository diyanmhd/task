import { useEffect, useState } from "react";

function Task(){
    const[quotes,setQuote] =useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes' )
        .then((res)=>res.json())
        .then((data)=>setQuote(data.quotes.slice(0,10)))
    },[])
    return(
        <div>
          <ul>
        
          {quotes.map((value)=>(
            <h1 key={value.id}>{value.quote}</h1>
          ))}

          </ul>

        </div>
    )
}

export default Task