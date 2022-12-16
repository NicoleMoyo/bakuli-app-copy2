import React from "react";

function SignUp1() {
    return (
        <div className="textfields">
            <form action="http://localhost:5000/auth/signup" method="POST">
                <div className="input-field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email"></input>
                </div>

                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"></input>
                </div>

                <div className="input-field">
                    <label htmlFor="sex">Sex</label>
                    <select id="sex" name="sex">
                        <option name="male" value="M">Male</option>
                        <option name="female" value="F">Female</option>
                    </select>
                </div>            
                
                <div className="input-field">
                    <label htmlFor="password">Password (at least 6 characters)</label>
                    <input type="password" id="password" name="password"></input>
                </div>

                <button type="submit" className="primary-btn">Sign Up</button>
            </form>
            
        </div>
    )
}

export default SignUp1;