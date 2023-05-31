import React, {useState} from "react";
import React from "react";

export const Buttons = () => {
    let [buttonText1, setButtonText1] = useState("Push");
    let [buttonText2, setButtonText2] = useState("Push");

    const onHandleClick = (number) => {
        switch(number) {
            case 1:
                setButtonText1("Push");
                break;
    
            case 2:
                setButtonText2("Push");
                break;
            case 3:
                setButtonText1("Push");
                setButtonText2("Push")
                break;
                default;
                break;

    
    }


    return (
        <>
        <button onClick={() => onHandleClick("down")}>Down</button>
>Push</button>
        <button onClick={() => onHandleClick("down")}>Down</button>
        <button>Reset</button>
        </>
    )
}