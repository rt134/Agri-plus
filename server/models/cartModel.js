const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user: {
        type: String, 
        required: true,
        unique : true,
    },
    products: [{
        productId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            unique : true,
            required : true,
        },
        quantity : {
            type : Number,
            required : true,
        }
    
    }],
    
},{timestamps : true});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;