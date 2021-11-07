const mongoose = require("mongoose")
const contractSchema = new mongoose.Schema({
    seller: {
        type: String,
        required : true,
    },
    buyer: {
        type: String,
    },
    productName : {
        type : String,
        required : true,
    },
    grade : {
        type : Number,
        required : true,
    },
    totalPrice : {
        type : Number,
        required : true,
    },
    premium : {
        type : Number,
        required : true,
    },
    defaultFine : {
        type : Number,
        required : true,
    },
    quantity : {
        type : String,
        required : true,
    },
    status : {
        type : Boolean,
        default : false,
    },
    deliveryDate : {
        type : Date,
        required : true,
    },
    description : {
        type : String,
    }
},{timestamps : true});

const Contract = mongoose.model("contract", contractSchema);

module.exports = Contract;