import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Modal.css";
import CloseIcon from "../assets/icons/close-square.svg"
import PrimaryButton from "./Button";
import SecondaryButton from "./SecButton";

const ResetPassword = props => {
    if (!props.show) {
        return null;
    } 

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header-body">
                    <div className="modal-header">
                        <h4 className="modal-title title-01-bold">{props.title}</h4>
                        <img className="close-icon" src={ CloseIcon } alt="close screen icon" onClick={props.onClose} />
                    </div>
                    <div className="modal-body">{props.children}</div>
                </div>
                <div className="modal-footer">
                    <SecondaryButton label="Cancel" onClick={props.onClose}/>                    
                    <PrimaryButton label="Submit" onClick={props.onSubmit}/>
                    {/* <button onClick={props.onClose}className="button">Cancel</button> */}
                    {/* <button onClick={props.onSubmit}className="button">Submit</button> */}
                </div>
            </div>
        </div>
        
    )
}

export default ResetPassword;