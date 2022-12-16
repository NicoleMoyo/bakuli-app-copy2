import React from "react";
import "../styles/Button.css";

const SecondaryButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="secondary-btn">{props.label}</button>
    )
}

export default SecondaryButton;