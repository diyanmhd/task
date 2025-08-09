import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
function App() {
  const [count, setCount] = useState(0)

  const timer = useRef(null);
  function start(){

    if(!timer.current){
           timer.current= setInterval(()=>{
      setCount((prev)=>prev+1)
    },1000)
    }
    
   
  }
  // useEffect(()=>{
  //   return()=>clearInterval(timer.current)
  // },[])




  return (
      <div>
        <h1>counter:{count}</h1>
        <Button/>
        <button onClick={start}>start</button>

      </div>
  )
}

export default App
