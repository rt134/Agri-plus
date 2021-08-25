const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
})

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(express.json())
app.use(cookieParser());

mongoose.connect(process.env.MDB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err) => {
    if(err) return console.error(err);
    console.log('Connected to MongoDB')
});

app.use("/auth",require("./routers/userRouter"))
app.use("/order", require("./routers/orderRouter"))