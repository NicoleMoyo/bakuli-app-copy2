import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
// import { makeStyles } from "@mui/material";
import "../styles/SignUp1.css";
import { FormControl, FormHelperText, IconButton, InputLabel, MenuItem, OutlinedInput } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import PrimaryButton from "./Button";
import Slideshow from "./Slideshow";

// const useStyles = makeStyles({
//     field: {
//         display: "block"
//     }
// });

const SignUp = () => {
    // const classes = useStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");    
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [emailMsg, setEmailMsg] = useState("");
    const [usernameMsg, setUsernameMsg] = useState("");
    const [sxMsg, setSxMsg] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [sxError, setSxError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        setEmailError(false);
        setUsernameError(false);
        setSxError(false);
        setPasswordError(false);
        
        setEmailMsg("");
        setUsernameMsg("");
        setSxMsg("");
        setPasswordMsg("");


        try {
            await axios.post("http://localhost:5000/signup", {
                username: username,
                email: email,
                sex: sex,
                password: password,
            });

            navigate("/signin")

        } catch (error) {
            if (error.response) {
                // console.log(error.response.data.msg)
                if (error.response.data.msg.emailerr){
                    setEmailError(true);
                    setEmailMsg(error.response.data.msg.emailerr);
                }
                if (error.response.data.msg.usrerr) {
                    setUsernameError(true);
                    setUsernameMsg(error.response.data.msg.usrerr);
                }
                if (error.response.data.msg.serr) {
                    setSxError(true);
                    setSxMsg(error.response.data.msg.serr);
                }   
                if (error.response.data.msg.pwderr) {
                    setPasswordError(true);
                    setPasswordMsg(error.response.data.msg.pwderr);
                }   
            }
        }
    }

    return (
        <div className="signup-container">
            <div className="container">
            <div className="heading">
                <p className="headline-03-regular primary-color">Live Intentionally with Bakuli.</p>
                <p className="display-02-bold primary-color">Create Account</p>
            </div>
            <div className="sub-container">
                <form noValidate autoComplete="off" onSubmit={signup} className="input-form">
                    
                    <TextField name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    label="Email Address" 
                    variant="outlined" 
                    size="small" 
                    required
                    error={emailError}
                    helperText={emailMsg}
                    fullWidth
                    />

                    <TextField name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    label="Username" 
                    variant="outlined" 
                    size="small" 
                    required
                    error={usernameError}
                    helperText={usernameMsg}
                    fullWidth
                    />
                    
                    <TextField name="sex" value={sex} onChange={(e) => setSex(e.target.value)}
                    select
                    label="Sex" 
                    variant="outlined" 
                    size="small" 
                    required
                    error={sxError}
                    helperText={sxMsg}
                    fullWidth
                    >
                        <MenuItem value="F">Female</MenuItem>
                        <MenuItem value="M">Male</MenuItem>
                    </TextField>

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
                    {/* <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <p>{emailMsg}</p>
                    </div> */}

                    {/* <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <p>{usernameMsg}</p>
                    </div> */}

                    {/* <div className="input-field">
                        <label htmlFor="sex">Sex</label>
                        <select id="sex" name="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value="">Select a option:</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        <p>{sxMsg}</p>
                    </div>             */}
                    
                    {/* <div className="input-field">
                        <label htmlFor="password">Password (at least 6 characters)</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <p>{passwordMsg}</p>
                    </div> */}

                    {/* <button type="submit" className="primary-btn">Sign Up</button> */}
                    <PrimaryButton label="Sign Up"/>
                </form>
                <p className="body-02-regular">Already on Bakuli? <a className="body-02-semibold primary-color reset-password" href="./signin">Sign In</a></p>
            </div>
            </div>
    
            <Slideshow />
        </div>
    )
    
}

export default SignUp;