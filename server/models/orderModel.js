const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  price: {
    type:Number, 
    required: true,
  },
  status : {
    type : Boolean,
    default : false,
  }

}, {timestamps : true});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
