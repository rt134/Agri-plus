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
    category : {
        type : String,
        enum : ["PEST","FRUT","VEGI","GRAN"],
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
        default : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;