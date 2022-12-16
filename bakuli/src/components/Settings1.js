import React, { useState } from 'react';
import "../styles/Settings.css"
import ArrowRightIcon from "../assets/icons/arrow-right.svg"
import Navbar from './Navbar';
import axios from 'axios';


const Settings = () => {
    return (
    <>
    <Navbar />
    <div className='cards-container'>
        <div className='card-container'>
            <div className='card-heading-line'>
                <div className='card-heading'>
                    <h2 className='title-01-bold'>Personal Details</h2>
                </div>
                <div className='line'></div>
            </div>
            <div className='card-body1'>
                <ModifyWeightForm />
            </div>
        </div>
        <div className='card-container'>
            <div className='card-heading-line'>
                <div className='card-heading'>
                    <h2 className='title-01-bold'>Notifications</h2>
                </div>
                <div className='line'></div>
            </div>
            <div className='card-body'>
                <NotificationsToggle />
            </div>
        </div>
        <div className='card-container'>
            <div className='card-heading-line'>
                <div className='card-heading'>
                    <h2 className='title-01-bold'>Account Management</h2>
                </div>
                <div className='line'></div>
            </div>
            <div className='card-body2'>
                <LogOutButton />
                <DeleteAccountButton />
            </div>
        </div>
    </div>
    </>
    );}
    

    function LogOutButton() {
      // Handle logout by clearing the authentication cookie and session storage
      const logOut = () => {
        
          // Delete the authentication cookie
          document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          // Clear session storage 
          sessionStorage.clear();
          localStorage.clear();

          // Redirect the user to the login page 
          window.location.href = "/signin";

      }
      return ( 
        <div className='card-body'> 
          <p>Log out</p>
          <img src={ArrowRightIcon} alt="arrow-right-icon" className='arrow-btn' onClick={logOut} />     
          {/* <button className="LogOutButton" onClick={logOut}>Log Out</button> */}
        </div>
      );
      }
  


    function DeleteAccountButton() {
    // Handle deleting the user's account by calling the necessary functions
    const deleteAccount = () => {
    // Confirm delete
    var confirmDelete = window.confirm("Deleting your account will permanently delete all account information. Are you sure you want to delete your account?");
    if (confirmDelete) {
    // Logout of account
    LogOutButton();
    // Delete user data from database
    // Call deleteUserData() using an HTTP request here
    // Redirect to login page
    window.location.href = "/signup";
    }
    }
    return (
   // <button onClick={deleteAccount}>Delete Account</button>
    <div className='card-body'>
    <p>Delete Account</p>
    <img src={ArrowRightIcon} alt="arrow-right-icon" className='arrow-btn-destr' onClick={deleteAccount} />
    {/* <button className="DeleteAccountButton" onClick={deleteAccount}>Delete Account</button> */}
    </div>

    );
    }



function NotificationsToggle() {
  // Use state to track whether notifications are on or off
  const [notificationsOn, setNotificationsOn] = useState(false);

  // Handle toggling notifications on or off
  const toggleNotifications = () => {
    // Update notifications state
    setNotificationsOn(!notificationsOn);

    // Call toggleNotifications() using an HTTP request here
    // Show success message
    window.alert(`Notifications ${notificationsOn ? 'off' : 'on'}!`);
  }

  return (
    <>
      <label htmlFor="notifications">Receive alerts on daily reports</label>
      <input
        type="checkbox"
        id="notifications"
        checked={notificationsOn}
        onChange={toggleNotifications}
      />
    </>
  );
}

  
function ModifyWeightForm() {
  // Use state to track the user's new weight
  const [newWeight, setNewWeight] = useState('');
  // Use state to track the success message
  const [success, setSuccess] = useState('');
  // Handle updating the user's weight in the database
  const updateWeight = async (e) => {
    e.preventDefault();
  // Call updateUserWeight() using an HTTP request here
    try {
      const signedInUser = localStorage.getItem("user");
      const foundUser = JSON.parse(signedInUser)
      const username = foundUser.username
      console.log(username)

      await axios.post(`http://localhost:5000/dashboard/settings/updateweight/${username}`, {
        username: username,
        weight: newWeight
      })    
      // Show success message
      setSuccess("Weight updated successfully!");

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000);

    } catch (error) {
      console.log(error);
    }

  };
  return (
  <form className='weight-update' style={{display: "flex", flexDirection: "row", margin: "0"}}>
  {success && <p className='primary-color'>{success}</p>}
    <label htmlFor="new-weight">Weight: </label>
    <input
    type="number"
    id="new-weight"
    min="0"
    max="9999" 
    value={newWeight}
    className="weight-input"
    onChange={(e) => setNewWeight(e.target.value)}
    />
    <button onClick={updateWeight}>Update</button>
  </form>
  );
  }

  

export default Settings;
//<button className="ModifyWeightForm" onClick={updateWeight}>Update Weight</button>
