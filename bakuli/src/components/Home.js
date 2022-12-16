import React, { useState } from "react";
import Navbar from "./Navbar";
import UploadPictureCard from "./UploadPictureCard";
import "../styles/Home.css"
import AddMealCard from "./AddMealCard";
import MealImage from "../assets/Poke-bowl-amico.svg"
import BeverageImage from "../assets/Pina-colada-amico.svg"
import TextField from "@mui/material/TextField";
import {  MenuItem } from "@mui/material";
import ProgressImage from "../assets/Progress-bar.svg"
import WaterWheelImage from "../assets/Water-Input.svg"
import TextButton from "./TextButton";
import ExportIcon from "../assets/icons/export.svg";
import AddFABButton from "./AddFABButton";
import RemoveFABButton from "./RemoveFABButton";
import AddIcon from "../assets/icons/add.svg"
import RemoveIcon from "../assets/icons/minus.svg"
import WaterWheel from "./WaterWheel";
import axios from "axios";

const Home = () => {
    const [meal, setMeal] = useState();
    const [mealError, setMealError] = useState();
    const [mealMsg, setMealMsg] = useState();

    const [waterQuantity, setWaterQuantity] = useState(0);
    const [totalWaterQuantity, setTotalWaterQuantity] = useState(0)

    const reduceWaterQuantity = (e) => {
        e.preventDefault(); 
        try {
            if (waterQuantity < totalWaterQuantity) {
                setTotalWaterQuantity(totalWaterQuantity - waterQuantity);
            } else {
                alert("Invalid water update!")
            }
            setWaterQuantity(0)
            
        } catch (error) {
            console.log(error);
        }

    }

    const addWaterQuantity = (e) => {
        e.preventDefault();
        try {

            if(totalWaterQuantity > 2000){
                setWaterQuantity(0);
                return alert("Great you've met today's target!")
            }
            const total = waterQuantity + totalWaterQuantity
            setTotalWaterQuantity(total);
            setWaterQuantity(0)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Navbar />

        <div className="home-container">
            <div className="top-section">
                <UploadPictureCard />

                <div className="progress-bar-container">
                    <p className="title-02-bold margin-btm">Track Food Intake</p>
                    <div className="progress-bar">
                        <p className="body-02-semibold">Key</p>
                        <img src={ProgressImage} alt="progress-bar" />
                    </div>
                    <TextButton label="View More Details" icon={ExportIcon} />
                </div>
            </div>

            <div className="bottom-section">
                <div className="logmeal-container">
                    <p className="title-02-bold margin-btm">Log New Meal</p>
                    <div className="meal-textfield">
                        <p className="body-02-regular">Select the meal of the day</p>
                        <TextField name="meal" value=" " onChange={(e) => setMeal(e.target.value)}
                        select
                        label="Meal of the day" 
                        variant="outlined" 
                        size="small" 
                        required
                        error={mealError}
                        helperText={mealMsg}
                        fullWidth
                        >
                            <MenuItem value="Breakfast">Breakfast</MenuItem>
                            <MenuItem value="Lunch">Lunch</MenuItem>
                            <MenuItem value="Dinner">Dinner</MenuItem>
                            <MenuItem value="Snack">Snack</MenuItem>
                        </TextField>
                    </div>
                    <div className="addmealcards">
                        <AddMealCard image={MealImage} title="Meal" />
                        <AddMealCard image={BeverageImage} title="Beverage" />
                    </div>
                </div>

                <div className="logmeal-container" >
                    <p className="title-02-bold margin-btm">Track Water Intake</p>
                    {/* <img src={WaterWheelImage} alt="water-wheel" className="water-wheel-image"/> */}
                    <WaterWheel quantity={totalWaterQuantity} />
               
                    <form className="waterinputform">
                            <AddFABButton icon={AddIcon} onClick={addWaterQuantity}/>
                            <div className="bring-together">
                            <div className="water-textfield">
                            <input
                                type="number"
                                id="water"
                                min="0"
                                max="2000" 
                                value={waterQuantity}
                                className="water-input"
                                onChange={(e) => setWaterQuantity(e.target.value)}
                                />
                            <label htmlFor="water" className="body-02-regular">ml</label>
                            </div>
                            <RemoveFABButton icon={RemoveIcon} onClick={reduceWaterQuantity}/>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Home;