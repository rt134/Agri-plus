const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const shortid = require("shortid");
dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

const Razorpay = require("razorpay");
var razorpay = new Razorpay({
    key_id: "rzp_test_AwGXBFJdSSKBsJ",
    key_secret: "1G4uQrystyd4HLEoKfcplK6y",
  });

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

app.post("/razorpay", async (req, res) => {
    const {a} = req.body;
    const payment_capture = 1;
    const amount = a;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    const response = await razorpay.orders.create(options);
    
    res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    });
  });

app.use("/auth",require("./routers/userRouter"))
app.use("/cart", require("./routers/cartRouter"))
app.use("/order", require("./routers/orderRouter"))
app.use("/product", require("./routers/productRouter"))
app.use("/contract",require("./routers/contractRouter"))
app.use("/conversation",require("./routers/conversationRouter"))