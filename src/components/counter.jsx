import "./counter.css"
import { useState } from "react"
function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div className="counter">
            <h1 className={count < 0 ? "negative" : ""}>{count}</h1>
            <div className="buttons">
                <button onClick={()=>setCount(count>49?count:count+1)}>Increment</button>
                <button onClick={()=>setCount(count<0?count:count-1)}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
            <div className="buttons5">
                <button onClick={()=>setCount(count>45?count:count+5)}>Increment by 5</button>
                <button onClick={()=>setCount(count<0?count:count-5)}>Decrement by 5</button>
            </div>
        </div>
    )
}

export default Counter;