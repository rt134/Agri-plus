const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const session =  require("express-session");
const mongoDBSession = require('connect-mongodb-session')(session);
// const connectStore = require("connect-mongo");
// const MongoStore = connectStore(session);

const cookieParser = require("cookie-parser");
const Secret = require("./config/database").SECRET;
const Mongo_url = require("./config/database").MONGO_DB;
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




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

app.use(session({
  name: "session",
  secret: Secret,
  saveUninitialized: false,
  resave: false,
  store: new mongoDBSession({
    mongooseConnection: Mongo_url,
    collection: 'session',
    ttl: parseInt(1000 * 60 * 60 * 2) / 1000
  }),
  cookie: {
    sameSite: true,
    secure: true,
    maxAge: parseInt(1000 * 60 * 60 * 2)
  }
}));



// Server Listening 
app.listen(PORT, (err) =>{
    if(err){
        console.log("Problem in starting server");
    }else{
        console.log("Server Listening at Port",PORT);
    }
})
