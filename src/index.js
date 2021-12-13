const express = require('express');
const connect = require("./configs/db");

const register = require("./controllers/user.controller")

const app = express();  
app.use(express.json());

app.use("/register", register);

app.listen(4444, async() => {
    await connect();
    console.log("Listening to port 4444");
})