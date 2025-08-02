import { useState } from "react";

function Button(){
    const[color,setColor]= useState(true)

    return(
        <div style={{backgroundColor:color?'white':'black', width:'100vw',height:'100vh'}}>
         <button onClick={()=>setColor(!color)}>color</button>
       

        </div>
    )
}

export default Button