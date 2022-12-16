import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import PrimaryButton from "./Button";
import "../styles/SignUp1.css";

const SignIn = () => {
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // to get user details
    const [username, setUsername] = useState("");
    const [user, setUser] = useState();

    const [useroremail, setUseroremail] = useState("");
    const [password, setPassword] = useState("");

    const [useroremailMsg, setUseroremailMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    const [useroremailError, setUseroremailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        const signedInUser = localStorage.getItem("user");
        if (signedInUser) {
            const foundUser = JSON.parse(signedInUser);
            setUser(foundUser);
        }         
    }, []);
    
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    }

    const signin = async (e) => {
        e.preventDefault();
        setUseroremailError(false);
        setPasswordError(false);

        setPasswordMsg("");
        setUseroremailMsg("");

        try {
            const response = await axios.post("http://localhost:5000/signin", {
                useroremail: useroremail,
                password: password
            });

            // set the user state
            setUser(response.data);

            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data);
            console.log(JSON.stringify(response.data));

            alert("Successful Login");
            navigate("/dashboard/home");

        } catch (error) {
            if (error.response) {
                if (error.response.data.msg.useroremailerr) {
                    setUseroremailMsg(error.response.data.msg.useroremailerr);      
                    setUseroremailError(true);
                  
                }
                if (error.response.data.msg.pwderr) {
                    setPasswordMsg(error.response.data.msg.pwderr);setPasswordError(true);    
                }
                // console.log(error.response.data.msg);
                // setUseroremailMsg(error.response.data.msg.useroremailerr);
                // setPasswordMsg(error.response.data.msg.pwderr);
            }
        }
    }

    const forgotPassword = async (e) => {
        e.preventDefault();
        try {
            setEmailMsg("");
            setEmailError(false);
            await axios.post("http://localhost:5000/forgotpassword", {
                email: email
            })

            setEmailMsg("Password Reset Link Sent!")
            
            navigate("/resetlink");
            
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
                setEmailError(true);
                setEmailMsg(error.response.data.msg.emailerr)
            }    
        }
    }

    if (user) {
        navigate("/dashboard/home")
        return console.log(`${user.username} is logged in`)
    }

    return (
        <div className="signin-container">
        <p className="display-02-bold primary-color">Sign In</p>
        <div className="sub-container">
            <form onSubmit={signin} noValidate autoComplete="off" className="signin-form">
                <div className="input-form">
                    <TextField name="useroremail" value={useroremail} onChange={(e) => {
                        setUseroremail(e.target.value)
                        setUsername(e.target.value)
                    }}
                    label="Username or email address" 
                    variant="outlined" 
                    size="small" 
                    required
                    error={useroremailError}
                    helperText={useroremailMsg}
                    fullWidth 
                    />

                    <FormControl 
                    variant="outlined" 
                    fullWidth
                    size="small" 
                    required
                    error={passwordError}
                    >
                        <InputLabel htmlFor="password">Password (at least 6 characters)</InputLabel>
                        <OutlinedInput 
                        id="password"
                        name="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        />
                        <FormHelperText>{passwordMsg}</FormHelperText>
                    </FormControl>
                </div>
                {/* <div className="input-field">
                    <label htmlFor="useroremail">Email Address</label>
                    <input type="text" id="useroremail" name="useroremail" value={useroremail} onChange={(e) => setUseroremail(e.target.value)}/>
                    <p>{useroremailMsg}</p>
                </div>          */}

                {/* <div className="input-field">
                    <label htmlFor="password">Password (at least 6 characters)</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p>{passwordMsg}</p>
                </div>                      */}
                <p onClick={() => setShow(true)} className="body-02-semibold primary-color reset-password">Forgot Password?</p>   
                <PrimaryButton label="Sign In" />
            </form>                
            <ResetPassword title="Forgot Password" onClose={() => {setShow(false); setEmail(""); setEmailError(false); setEmailMsg("")}} show={show} onSubmit={forgotPassword} >
                    <form onSubmit={forgotPassword}>
                        <TextField name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        label="Email Address" 
                        variant="outlined" 
                        size="small" 
                        required
                        error={emailError}
                        helperText={emailMsg}
                        fullWidth
                        />
                        {/* <div className="input-field">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <p>{emailMsg}</p>
                        </div> */}
                    </form>      
                </ResetPassword>
            <p className="body-02-regular">New to Bakuli? <a href="./signup" className="body-02-semibold primary-color reset-password">Sign Up</a></p>
        
        </div>
        </div>
    )
}

export default SignIn