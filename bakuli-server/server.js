const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env"});

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
        console.log("MySQL connected...");
    }
})

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/pages"))
app.use("/auth/", require("./routes/auth"))

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
