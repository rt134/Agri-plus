const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required : true,
  },
  price: {
    type:Number, 
    required: true
  },
  status : {
    type : Boolean,
  }

}, {timestamps : true});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
