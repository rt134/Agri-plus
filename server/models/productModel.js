const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required : true,
    },
    productName : {
        type : String,
        required : true,
    },
    expiryDate : {
        type : Date,
        required : true,
    },
    category : {
        type : String,
        enum : ["PEST","FRUT","VEGI","GRAN"],
    },
    price : {
        type : Number,
        required : true,
    },
    grade : {
        type : Number,
        required : true,
    },
    quantity : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;