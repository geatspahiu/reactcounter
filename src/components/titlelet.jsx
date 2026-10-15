import "./title.css"
import { useState } from "react"

//UseState i ka dy pjese: pjesa e pare e kemi shenuar title,
//title- i bjen pjesa e vleres a eshte string, number, object.
//setTitle - funksioni qe na e mundeson te ja nderrojme vleren
function Title(){
    const[title,setTitle]=useState("Random Title")
    
    return(
        <div className="title">
            <button onClick={()=>setTitle("Title Changed")}>
                Change Title
            </button>
            <input value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        </div>
    )
}

export default Title;
