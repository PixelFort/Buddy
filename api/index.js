const express = require("express");
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect(
    "mongodb+srv://amayank18:<db_password>@cluster0.khlljsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log("Error connecting to MongoDB",err);
});

app.listen(port, () => {
    console.log("Server running on port 8000");
});