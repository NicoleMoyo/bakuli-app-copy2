import React from "react";
import "../styles/Button.css";

const RoundedFABButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="fab-btn"><img src={props.icon} alt="fab" /></button>
    )
}

export default RoundedFABButton;