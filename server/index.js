const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;



// Linking Routes
app.use("/", require("./routes/index"));


// Cors
app.use(
    cors({
      origin: [ "http://localhost:3000" ],
      credentials: true,
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    })
);
app.use(bodyParser.json());


// Server Listening 
app.listen(PORT, (err) =>{
    if(err){
        console.log("Problem in starting server");
    }else{
        console.log("Server Listening at Port",PORT);
    }
})
