import React from "react";
import "../styles/Button.css";

const AddFABButton = props => {
    return (
        <button type="submit" onClick={props.onClick} className="fab-btn-add"><img src={props.icon} alt="fab" /></button>
    )
}

export default AddFABButton;