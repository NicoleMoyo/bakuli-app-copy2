const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mysql = require("mysql");
const routes = require("./routes/routes");
const dbConn = require("./config/Database");


dotenv.config({ path: "./.env"});

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const port = 5000;

app.use(cors({ credentials: true, origin:"http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

//establish connection to database
dbConn();

app.listen(5000, ()=> console.log(`Server running on port ${port}`));