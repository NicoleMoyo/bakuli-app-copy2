import React from "react";
import "../styles/Button.css";

const TextButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="text-btn">{props.label}<img src={props.icon} alt="view more icon"/></button>
    )
}

export default TextButton;