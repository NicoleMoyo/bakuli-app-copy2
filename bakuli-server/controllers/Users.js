const DbConn = require("../config/Database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const nodemailer = require("nodemailer");

//Regular expression to check password
// ^ will start this way
// (?=.*[a-z]) at least 1 lowercase alphabetical character
// (?=.*[A-Z]) at least 1 uppercase alphabetical character
// (?=.*[0-9]) at least 1 numeric character
// (?=.*[!@#$%^&*]) at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{6,}) six characters or longer

const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");


exports.SignUp = async(req, res) => {
    // destructuring input from user 
    const { username, email, sex, password} = req.body;
    const msg = {
        usrerr: "",
        emailerr: "",
        serr: "",
        pwderr: "",
        success: ""
    }
    var err_count = 0;

    console.log(`${username}, ${email}, ${sex}, ${password}`)

    //connect to database
    db = DbConn()

    // check if email exists in database
    db.query('SELECT email FROM user where email = ?', [email], (error, response) => {
        if (error) {
            console.log(err);
        }

        if (response.length > 0) {
            console.log("That email is already in use");
            // res.json({msg: "That email is already in use"})
            msg.emailerr = "That email is already in use"
            err_count ++;
            console.log(err_count);
        }
    })

    //  check if username exists in database
    db.query('SELECT username FROM user where username = ?', [username], (err, res) => {
        if (err) {
            console.log(err);
        }

        if (res.length > 0) {
            console.log("That username is already in use")
            // res.json({msg: "That username is already in use"})
            msg.usrerr = "That username is already in use"
            err_count ++;
            console.log(err_count);
        }
    })   

    // check if user entered their gender 
    if (sex.length != 1) {
        console.log(typeof(sex))
        msg.serr = "This is a required field"
        err_count ++;
    }

    // check password strength
    if (!regex.test(password)) {
        console.log("Weak password");
        msg.pwderr = "Password should contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 special character"
        err_count ++;
        console.log(err_count);
    }    

    // hash the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    if (err_count == 0) {
        try {
            await db.query('INSERT INTO user (username, email, password, sex) VALUES (?, ?, ?, ?)', [username, email, hashPassword, sex])
            //res.json({msg: "Registration Successful"});
            msg.success = "Registration Successful";
            console.log("Registration Successful");
            res.status(200).json({msg: msg.success});
        } catch (err) {
            console.log(err);
        }
    }else {
        res.status(403).json({msg})
    }

}

exports.SignIn = async (req, res) => {
    
    try {
    const { useroremail, password} = req.body;

    const msg = {
        useroremailerr: "",
        pwderr: "",
        success: ""
    }
    
    var userData = {};

    db = DbConn();

    // check if email exists in database
    await db.query('SELECT * FROM user where email = ? OR username = ?', [useroremail, useroremail], async (error, response) => {
        if (error) {
            console.log(err);
        }
        console.log(response[0]);
        if (response.length == 0) {
            console.log("Username or email is not registered in our system");
            // res.json({msg: "That email is already in use"})
            msg.useroremailerr = "Username or email is not registered in our system"
            // err_count ++;
            return (
                res.status(403).json({msg})
            )
        } 

        userData = response[0];
        console.log(`userdata1 ${JSON.stringify(userData.password)}`);
        const match = await bcrypt.compare(password, userData.password);
        if (!match) {
            msg.pwderr = "Invalid password";
            console.log("Invalid password");
            return (
                res.status(400).json({msg})
            )
            } else {
                const username = userData.username;
                const email = userData.email;
                const hashPassword = userData.password

                const accessToken = jwt.sign({username, email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15s"});

                const refreshToken = jwt.sign({username, email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "1d"});    

                db.query('UPDATE user SET token = ? WHERE username = ?', [refreshToken, username]);
                console.log("Sign In Successful");
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000
                });
                res.json({ accessToken, username, hashPassword });
                
            }
        })
    // console.log(password);
    // console.log(`userdata1 ${JSON.stringify(user.password)}`);
    // const match = await bcrypt.compare(password, user.password);
    // if (!match) {
    //     msg.pwderr = "Invalid password"
    //     return res.status(400).json({msg})
    // }

    // const username = user.username;
    // const email = user.email;

    // const accessToken = jwt.sign({username, email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15s"});

    // const refreshToken = jwt.sign({username, email}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "1d"});    

    // await db.query('UPDATE user SET token = ? WHERE username = ?', [refreshToken, username]);

    // res.cookie('refreshToken', refreshToken, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000
    // });
    // res.json({ accessToken });
    } catch (error) {
        console.log(error);
    }
}

exports.ForgotPassword = async (req, res) => {

    try {    
        const {email} = req.body;
     
        const msg = {
            emailerr: ""
        }
        db = DbConn();

        await db.query('SELECT * FROM user where email = ?', [email], async (error, response) => {
            if(error) {
                console.log(error);
            }
            if (response.length == 0) {
                console.log("Email does not exist");
                msg.emailerr = "Email does not exist";
                return res.status(510).json({msg});
            }
            
            const secret = process.env.JWT_SECRET + response[0].password;
            const token = jwt.sign({email: response[0].email, username: response[0].username}, secret, {expiresIn: "10m"})
            const link = `http://localhost:5000/resetpassword/${response[0].username}/${token}`;
            console.log(link);

            const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nozziebiggz@gmail.com',
                pass: 'dniwsadvmlqzxaxv'
            }
            });

            const mailOptions = {
            from: 'youremail@gmail.com',
            to: `${response[0].email}`,
            subject: 'Bakuli App: Password Reset',
            text: `Password reset link: ${link}`
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200)
            }
            });
        })
    } catch (error) {
        console.log(error);
    }
} 

exports.ResetPassword = async (req, res) => {
    try {
        const {username, token} = req.params;
        db = DbConn();

        const msg = {
            usernameerr: "",
            tokenerr: "",
            success: ""
        }

        await db.query('SELECT * FROM user where username = ?', [username], async (error, response) => {
            if(error) {
                console.log(error);
            }
            if (response.length == 0) {
                console.log("Username does not exist");
                msg.usernameerr = "Username does not exist";
                return res.status(510).json({msg});
            }

            const secret = process.env.JWT_SECRET + response[0].password;
            try {
                const verify = jwt.verify(token, secret);
                msg.success = "Token & username verified";
                // res.status(200).json(msg).render("index", {email: verify.email});
                res.render("index", {email: verify.email,status: 0});
            } catch (error) {
                msg.tokenerr = "Token not verified";
                res.status(403).json({msg});
            }
            
        })
        
        console.log(req.params);
        // res.send("Done");
    } catch (error) {
        console.log(error);
    }
    
}

exports.NewPassword = async (req, res) => {
    try {
        const {username, token} = req.params;
        const {password} = req.body;
        db = DbConn();

        const msg = {
            usernameerr: "",
            tokenerr: "",
            pwderr: "",
            success: ""
        }

        await db.query('SELECT * FROM user where username = ?', [username], async (error, response) => {
            if(error) {
                console.log(error);
            }
            if (response.length == 0) {
                console.log("Username does not exist");
                msg.usernameerr = "Username does not exist";
                return res.status(510).json({msg});
            }

            const secret = process.env.JWT_SECRET + response[0].password;
            try {
                const verify = jwt.verify(token, secret);

                // check password strength
                if (!regex.test(password)) {
                    console.log("Weak password");
                    msg.pwderr = "Password should contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and one special character"
                    res.status(400).json({msg});
                }   

                // hashed the password
                const salt = await bcrypt.genSalt();
                const hashPassword = await bcrypt.hash(password, salt);

                await db.query('UPDATE user SET password = ? WHERE username = ?', [hashPassword, username]);

                msg.success = "Password Updated";
                res.render("index", {email: verify.email,status: 1});

            } catch (error) {
                msg.tokenerr = "Unauthorised action";
                res.status(403).json({msg});
            }
        })
        // res.send("Done");
    } catch (error) {
        console.log(error);
    }
    
}