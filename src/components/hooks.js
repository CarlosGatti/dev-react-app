import React, {useEffect,useState} from "react";
import Parent from "./h_parent";

function Hooks(){
    
    const[counter, setCounter] = useState(0);

    const[user, setUser] = useState({
        name: "Carlos Gatti",
        email: "eduardo.gf@hotmail.com"
    })

    useEffect(()=>{
        document.title = counter;
    },[counter]);

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>Add</button>
            <button onClick={()=> setCounter(counter - 1)}>Remove</button>
            <hr></hr>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>

            <hr></hr>
            <Parent/>
        </div>
    ) 
}

export default Hooks;