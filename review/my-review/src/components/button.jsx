import React, { useReducer } from 'react'
function reduce(state,action){
    switch(action.type){
        case 'change':return { count:state.count + action.value}
    }
}
function Button() {
    const[state,dispatch] = useReducer(reduce,{count:0})
    function add(){
        dispatch({type : 'change' ,value : 1})
    }
        function sub(){
        dispatch({type : 'change' ,value : -1})
    }
  return (
    <div>
        <h2>{state.count}</h2>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button>reset</button>
    </div>
  )
}

export default Button