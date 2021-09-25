const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        enum : ["PEST","WEED","VEGI","GRAIN"],
    },
    price : {
        type : Number,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;