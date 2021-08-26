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
        type : String.apply,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },


})

const User = mongoose.model("product", productSchema);

module.exports = User;