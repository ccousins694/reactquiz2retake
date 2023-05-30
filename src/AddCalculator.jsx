import React, {useState} from "react";

export const AddCalculator = () => {

    let [counter, setCounter] = useState(0);

    // const b1Click = () => {
    //     setCounter(counter + 1);
    // }

    // const b2Click = () => {
    //     setCounter(counter + 2);
    // }
    // const b3Click = () => {
    //     setCounter(counter + 3);
    // }

    const buttonClick = (num) =>{
        setCounter(counter + num);
    }

    return (
        <>
            <button onClick={() => buttonClick(1)}>Add 1</button>
            <button onClick={() => buttonClick(2)}>Add 2</button>
            <button onClick={() => buttonClick(3)}>Add 3</button>
            <br></br>
            Total: 
            <span id='main-text'> {counter}</span>
        </>
    )
}