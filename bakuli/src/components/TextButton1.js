import React from "react";
import "../styles/Button.css";

const TextButton1 = props => {
    return (
        <button type="submit" onClick={props.onClick} className="text-btn"><img src={props.icon} alt="view more icon"/>{props.label}</button>
    )
}

export default TextButton1;