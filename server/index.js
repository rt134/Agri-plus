const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const session =  require("express-session");
const mongoDBSession = require('connect-mongodb-session')(session);
const Secret = require("./config/database").SECRET;
const Mongo_url = require("./config/database").MONGO_DB;
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());




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


// Connecting to database
mongoose.set("useFindAndModify",false);
mongoose.connect(Mongo_url,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connected to Database");
});


// Session
const store = new mongoDBSession({
    uri : Mongo_url,
    collection : "Sessions",
})

app.use(session({
    secret : Secret,
    resave : false,
    saveUninitialized : false,
    store : store,
}))


// Server Listening 
app.listen(PORT, (err) =>{
    if(err){
        console.log("Problem in starting server");
    }else{
        console.log("Server Listening at Port",PORT);
    }
})
