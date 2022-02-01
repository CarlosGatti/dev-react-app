import React, {useState} from "react";
import Child from "./h_child";


export default function Parent(){

    const [data, setData] = useState('');
  
    const parentToChild = () => {
      setData("Yep. Working!");
    }

    return(
        <div>
            <Child parentToChild={data}/>

            <div>
                <button onClick={() => parentToChild()}>Click Parent</button>
            </div>
        </div>
    )
}
