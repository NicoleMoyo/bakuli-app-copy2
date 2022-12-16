import React from "react";
import "../styles/Button.css";

const PrimaryButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="primary-btn">{props.label}</button>
    )
}

export default PrimaryButton;