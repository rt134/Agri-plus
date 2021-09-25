const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    passwordHash: {
        type: String, 
        required: true
    },
    contact : {
        type : String,
    },
    address : {
        type : String,
    }
},{timestamps : true});

const User = mongoose.model("user", userSchema);

module.exports = User;