import React from "react";
import AddIcon from "../assets/icons/add.svg"
import "../styles/AddMealCard.css"
import FABButton from "./FABButton";

const AddMealCard = (props) => {

    const signedInUser = localStorage.getItem("user");
    const foundUser = JSON.parse(signedInUser);
    const username = foundUser.username;

    return (
    <div className="addmealcard-container">
        <div className="addmealcard-content">
            <p className="title-02-bold">{props.title}</p>
            <img src={props.image} alt="card-img" className="card-img"/>
        </div>            
        <div className="meal-btn"><FABButton icon={AddIcon}/></div>
    </div>
    )
} 

export default AddMealCard;