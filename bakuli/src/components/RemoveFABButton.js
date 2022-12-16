import React from "react";
import "../styles/Button.css";

const RemoveFABButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="fab-btn-remove"><img src={props.icon} alt="fab" /></button>
    )
}

export default RemoveFABButton;