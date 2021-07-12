const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: Number,
        required: true
    },
    // expires in 15 minutes (60 * 15)
    expire_at: {type: Date, default: Date.now, expires: 900}
});

const otpData = mongoose.model('otpData', otpSchema);
module.exports = otpData;
