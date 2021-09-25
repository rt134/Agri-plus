const mongoose = require("mongoose")
const contractSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required : true,
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required : true,
    },
    productName : {
        type : String,
        required : true,
    },
    grade : {
        type : String,
        enum : ["A","B","C","D","E","F"],
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
        type : Number,
        required : true,
    },
    status : {
        type : Boolean,
    },
    deliveryDate : {
        type : Date,
        required : true,
    }



})

const Contract = mongoose.model("contract", contractSchema);

module.exports = Contract;