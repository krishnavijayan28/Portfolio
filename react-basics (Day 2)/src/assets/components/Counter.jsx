import './Counter.css'
import { useState } from 'react'
function Counter(){

    const[count,setCount]=useState(0)

    const handleIncrement =()=>{
        setCount(count+1)
    }

    

    const handleDecrement =()=>{
        setCount(count-1)
    }

    return(
        <>
        
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
        
        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>

        <button onClick={handleDecrement}>Decrement</button>

        </div>
        
     </>
    )
}

export default Counter