const express = require('express');
const connect = require("./configs/db");
const app = express();
app.use(express.json());

app.listen(4444, async() => {
    await connect();
    console.log("Listening to port 4444");
})