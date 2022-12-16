import React from "react";
import Avatar from "../assets/icons/User.svg"
import "../styles/UploadPictureCard.css"
import AddIcon from "../assets/icons/add.svg"
import RoundedFABButton from "./RoundedFABButton";
const UploadPictureCard = () => {

    const signedInUser = localStorage.getItem("user");
    const foundUser = JSON.parse(signedInUser);
    const username = foundUser.username;

    return (
    <div className="uploadcard-container">
        <div className="uploadcard-content">
            <img src={Avatar} alt="avatar" className="avatar"/>
            <p className="body-01-semibold">Hi, @{username}!</p>
            <div className="floating-btn"><RoundedFABButton icon={AddIcon}/></div>
        </div>
    </div>
    )
} 

export default UploadPictureCard;