import React, {useState} from "react";
import React from "react";

export const UpDownCounter = (props) => {
    let [counter, setCounter] = useState(props.value)

    const onHandleClick = (directon) => {
        if (directon === "up") {
            setCounter(++counter)
        } else {
            setCounter(--counter)
        }
    }

    return (
        <div className ="Main">
            <button onClick={() => onHandleClick("down")}>Down</button>
            {counter}
            <button onClick={() => onHandleClick("up")}>Up</button>
        </div>
           
    )
}