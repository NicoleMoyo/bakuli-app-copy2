import React from "react";
import Navbar from "./Navbar";
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import styled from 'styled-components';
import "../styles/FoodLog.css"


// import ".//App.css";
const FoodLog = () => {
    const [mealOfTheDay, setMealOfTheDay] = useState("");
    const [category, setCategory] = useState("");
    const [foodName, setFoodName] = useState([""]); // initialize foodName state with an array containing one empty string
    const [quantity, setQuantity] = useState(0); // initialize quantity state with 0
    const [success, setSuccess] = useState(false);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const removeFoodName = (index) => {
    setFoodNameList(foodNameList.filter((foodName, i) => i !== index));
    };
    
    const [inputList, setInputList] = useState([]); // initialize inputList state as an empty array
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [foodNameList, setFoodNameList] = useState([]);

    const handleFoodNameChange = (e) => {
    const newFoodName = e.target.value;
    setFoodName(newFoodName); // set the foodName state to the new food name
    setFoodNameList([...foodNameList, newFoodName]); // add the new food name to the foodNameList state
    };
    
    const filterInputsByCategory = (category) => {
        return inputList.filter((input) => {
        return input.category === category;
        });
        };
        
        const filterInputsByFoodName = (foodName) => {
        return inputList.filter((input) => {
        return input.foodName === foodName;
        });
        };  
    
    // Function to filter inputList by selected date
    const filterInputsByDate = (date) => {
    return inputList.filter((input) => {
    return input.date.toLocaleDateString() === date.toLocaleDateString();
    });
    };
    

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedFoodName, setSelectedFoodName] = useState("");

    const filteredInputList = filterInputsByDate(selectedDate)
    .filter((input) => {
    return input.category === selectedCategory || selectedCategory === "";
    })
    .filter((input) => {
    return input.foodName === selectedFoodName || selectedFoodName === "";
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    
    // Clear success state after 4 seconds
    setTimeout(() => setSuccess(false), 4000);
    
    // Clear input fields
    setMealOfTheDay("");
    setCategory("");
    setFoodName([""]); // reset foodName state to an array containing one empty string
    setQuantity(0); // reset quantity to 0
    
    // store details in inputList state
    setInputList([...inputList, {mealOfTheDay, category, foodName, quantity, date: selectedDate}]);
    };
    
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    
    return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit}>
        <div className="table-container">
            {inputList.length > 0 && (
                <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Meal of the Day</th>
                    <th>Category</th>
                    <th>Food Name</th>
                    </tr>
                </thead>
        <tbody>
            {filterInputsByDate(selectedDate).map((input) => (
                <tr key={input.date.toString()}>
                <td>{input.date.toLocaleDateString()}</td>
                <td>{input.mealOfTheDay}</td>
                <td>{input.category}</td>
                <td>{input.foodName}</td>
                </tr>
            ))}
            </tbody>
                </table>
            )}</div>

        <CalendarContainer>
            <Calendar
            className="calendar-hide"
            value={selectedDate}
            onChange={setSelectedDate}
            />
        </CalendarContainer>
        
        <div className="add-meal-form">
        <p className="title-02-bold">Enter meal data</p>
        <div className="meal-textfield">
        <label>Meal of the Day:</label>
        <select value={mealOfTheDay} onChange={(e) => setMealOfTheDay(e.target.value)} className="meal-input">
        <option value="">Select</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
        </select>
        </div>

        <div className="meal-textfield">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} disabled={mealOfTheDay === ''} className="meal-input">
        <option value="">Select</option>
        <option value="beverage">Beverage</option>
        <option value="meal">Meal</option>
        </select>
        </div>
        
        <div className="meal-textfield">
        <label>Food Name:</label>
        <input type="text" value={foodName} onChange={(e) =>
        setFoodName(e.target.value)} disabled={mealOfTheDay === '' || category === ''} list="meal-options" autoComplete="on" className="meal-input"/>
        </div>

        <datalist id="meal-options">
        <option value="Banana"></option>
        <option value="Apple"></option>
        <option value="Orange"></option>
        <option value="Pineapple"></option>
        <option value="Grapes"></option>
        <option value="Watermelon"></option>
        </datalist>

        <datalist id="beverage-options">
        <option value="Pineapple Juice"></option>
        <option value="Milk Tea"></option>
        </datalist>

        <div className="food-name-list">
        {foodNameList.map((foodName, index) => (
            <div className="filter-chip" key={index}>
            {foodName}
            <button onClick={() => removeFoodName(index)}>X</button>
            </div>
        ))}
        </div>

        <div className="meal-textfield">
        <label style={{display: category === 'meal' ? 'none' : 'block'}}>Quantity:</label>
        {category !== 'meal' && <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} disabled={mealOfTheDay === '' || category === ''} className="meal-input-short"/>}
        </div>

        <div className="meal-textfield">
        <label>Time:</label>
        <input type="text" value={formattedTime} className="meal-input-short" />
        </div>

        <div className="meal-textfield">
        <label>Date:</label>
        <input type="text" value={formattedDate} className="meal-input-short" />
        </div>
        <hr className="line"/>
        <div className="meal-textfield">
        <label>Your Plate:</label>
        <input type="text" value={foodName} onChange={handleFoodNameChange} disabled={mealOfTheDay === '' || category === ''} list="meal-options" autoComplete="on" className="meal-input" />
        </div>

        {/* <input type="text" list="beverage-options" className="meal-input-short" /> */}

        <button type="submit" disabled={mealOfTheDay === '' || category === '' || foodName === '' }>
        {category === 'beverage' && !foodName? 'Add to Bottle' : 'Add to Plate'}
        </button>

        {success && <div>Successfully submitted!</div>}
        <div>
        <form onSubmit={handleSubmit}>
        </form>
        </div>
        </div>  
        </form>
        </>
    ); 
};
export default FoodLog;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 620px;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  background-color: #FAFEF6;
  padding: 0.5em;
  border-radius: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);

    .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      color: #16161d;
    }
  }

    .react-calendar__month-view__weekdays {
    text-align: center;
    
  }

  button {
    margin: 0.4em;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 0.5em 0;
    width: 3em
  }

  }
`;