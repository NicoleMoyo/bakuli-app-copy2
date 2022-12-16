// import React, { useState } from 'react';

// function LogOutButton() {
//   // Handle logout by clearing the authentication cookie and session storage
//   const logOut = () => {
//     // Delete the authentication cookie
//     document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//     // Clear session storage
//     sessionStorage.clear();

//     // Redirect the user to the login page
//     window.location.href = "http://localhost:3000/login";
//   }

//   return (
//     <button onClick={logOut}>Log Out</button>
//   );
// }

// function DeleteAccountButton() {
//   // Handle deleting the user's account by calling the necessary functions
//   const deleteAccount = () => {
//     // Confirm delete
//     var confirmDelete = window.confirm("Are you sure you want to delete your account?");
//     if (confirmDelete) {
//       // Logout of account
//       logout();
//       // Delete user data from database
//       deleteUserData();
//       // Redirect to login page
//       window.location.href = "login.html";
//     }
//   }

//   return (
//     <button onClick={deleteAccount}>Delete Account</button>
//   );
// }

// function NotificationsToggle() {
//   // Use state to track whether notifications are on or off
//   const [notificationsOn, setNotificationsOn] = useState(false);

//   // Handle toggling notifications on or off
//   const toggleNotifications = () => {
//     // Update notifications state
//     setNotificationsOn(!notificationsOn);

//     // Show success message
//     window.alert(`Notifications ${notificationsOn ? 'off' : 'on'}!`);
//   }

//   return (
//     <input
//       type="checkbox"
//       id="notifications"
//       checked={notificationsOn}
//       onChange={toggleNotifications}
//     />
//   );
// }

// function ModifyWeightForm() {
//   // Use state to track the user's new weight
//   const [newWeight, setNewWeight] = useState('');

//   // Handle updating the user's weight in the database
//   const updateWeight = () => {
//     // Update user's weight in database
//     updateUserWeight(newWeight);

//     // Show success message
//     showSuccess("Weight updated successfully!");
//   }

//   return (
//     <form>
//       <label htmlFor="new-weight">Enter new weight:</label>
//       <input
//         type="number"
//         id="new-weight"
//         value={newWeight}
//         onChange={e => setNewWeight(e.target.value)}
//       />
//       <button onClick={updateWeight}>Update Weight</button>
//     </form>
//   );
// }
