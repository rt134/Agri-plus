const router = require("express").Router();
const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel")
const auth = require("../middleware/auth");

// Assing a product by owner
router.post("/add", auth, async (req, res) => {
    try {
      const userId  = req.email;
      const {productId} = req.body
      const cart = await Cart.findOne({user : userId});

      if(cart){
          let flg=true;
          for(let i=0;i<cart.products.length;i++){
            if(String(cart.products[i].productId) === productId){
                cart.products[i].quantity = cart.products[i].quantity + 1;
                flg = false;
            }
          }

          await cart.save();

          if(flg){
              await Cart.findOneAndUpdate({user : userId},{$push : {'products' : {'productId' : productId, 'quantity' :1}}})
          }

      }else{
        const newCart = Cart({
            user : userId,
            products : [{
                'productId' : productId,
                'quantity' : 1,
            }]
        })
        await newCart.save()
      }

      return res.status(200).json({
        message : "Product added Successfully"
      })
    }
    catch (err) {
      return res.status(500).send({
        message : "Error in adding Product"
      });
    }
});

// Get all products of a particular owner
router.get("/get", auth, async (req, res) => {
    try {
      const email = req.email;
      const cart = await Cart.find({user : email}).populate('products.productId');
      
      return res.status(200).json({
        cart
      })
    } 
    catch (err) {
      console.error(err);
      return res.status(500).send({
        message : "Error in Fetching your cart"
      });
    }
});

// Delete product by product Id
router.post("/del", auth, async (req, res) => {
    try {
      const userId  = req.email;
      const {productId} = req.body;

      const cart = await Cart.findOne({user : userId});

      if(cart){
          let flag = true;
          for(let i=0;i<cart.products.length;i++){
            if(String(cart.products[i].productId) === productId){
                if(cart.products[i].quantity >= 2){
                  cart.products[i].quantity = cart.products[i].quantity - 1;
                  flag = false;
              }
                
            }

            if(flag){
              await cart.updateOne({$pull : {products : {productId : productId}}});
            }
          }

          await cart.save();

      }else{

        res.status(401).json({
          message : "Un-authorized"
        })

      }

      res.status(200).json({
        message : "Removed successfully"
      })
    } catch (err) {
      res.status(500).send({
        message : "Error in Fetching detail"
      });
    }
});

// Delete cart
router.get("/delcart", auth, async (req, res) => {
    try {
      const email = req.email;
      await Cart.findOneAndUpdate({user : email},{$set : {products : []}});
      res.status(200).json({
        message : "Removed successfully"
      })
    } catch (err) {
      res.status(500).send({
        message : "Error in Fetching detail"
      });
    }
});



module.exports = router;
