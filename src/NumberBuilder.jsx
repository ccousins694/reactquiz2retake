import React, {  useState} from 'react';

export const NumberBuilder = () => {
    let [number, setNumber] = useState(0);
    
    const handleClick = (operation) => {
        if (operation === "add") {
            setNumber(++number);
        }else{
            setNumber(0);
        }
      
    
    }

    return (
        <div className = "numberBuilder">
            <button onClick = {() => handleClick("add")}>Add Number</button>
            <button onClick = {() => handleClick("reset")}>Reset</button>
            <br/>
            Numbers: { number }.join(" ")
            <br/> ")
          
        </div>
    )
}