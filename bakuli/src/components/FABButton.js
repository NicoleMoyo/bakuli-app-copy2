import React from "react";
import "../styles/Button.css";

const FABButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="fab-btn-sq"><img src={props.icon} alt="fab" /></button>
    )
}

export default FABButton;