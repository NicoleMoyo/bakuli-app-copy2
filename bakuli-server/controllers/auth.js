const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL connected controller...");
    }
})

exports.signup = (req, res) => {

    const { name, email, sex, password} = req.body;

    db.query('SELECT email FROM users where email = ?', [email], (error, result) => {
        if (error) {
            console.log(error);
        }

        if (result.length > 0) {
            return (
                res.json({message: "That email is already in use"})
            )
        }
    });
    
    res.send("form submitted");
}

