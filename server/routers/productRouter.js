const router = require("express").Router();
const User = require("../models/userModel");
const Contract = require("../models/contractModel");
const Product = require("../models/productModel")
const auth = require("../middleware/auth");

// Assing a product by owner
router.post("/add", auth, async (req, res) => {
    try {
      const userId  = req.user;
      const {productName, grade,category, price, quantity, image,expiryDate} = req.body
      

      let d1 = new Date(expiryDate);

      const newProduct = Product({
        owner : userId,
        productName,
        category,
        price,
        grade,
        quantity,
        image,
        expiryDate : d1,
      })

      await newProduct.save();

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
router.get("/getall", auth, async (req, res) => {
    try {
      const email = req.user;
      const products = await Product.find({owner : email});
      return res.status(200).json({
        products
      })
    } 
    catch (err) {
      console.error(err);
      return res.status(500).send({
        message : "Error in Fetching your products"
      });
    }
});

// Get product by product Id
router.get("/getbyid/:id", auth, async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      res.status(200).json({
        product
      })
    } catch (err) {
      res.status(500).send({
        message : "Error in Fetching detail"
      });
    }
});

// Get product by product Category
router.get("/getbycat/:cat", auth, async (req, res) => {
    try {
      const productCat = req.params.cat;
      const product = await Product.find({category : productCat});
      
      res.status(200).json({
        "products" : product
      })
    } catch (err) {
      res.status(500).send({
        message : "Error in Fetching Products"
      });
    }
});

module.exports = router;
