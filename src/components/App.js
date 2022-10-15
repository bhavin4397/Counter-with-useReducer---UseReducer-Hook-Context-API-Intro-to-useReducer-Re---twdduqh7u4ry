
import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialstate = 0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer, initialstate)
    const handleIncrement= () =>{
        dispatch({type: "increment"});
    }
    const handleDecrement= () =>{
        dispatch({type: "decrement"});
    }
  return (
    <div id="main">
     <span id = "counter">{state}</span>
        <button id = "increment-btn" onClick = {handleIncrement}>Increment</button>
        <button id = "decrement-btn" onClick = {handleDecrement}>Decrement</button>
    </div>
  )
}


export default App;
