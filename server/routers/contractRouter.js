const router = require("express").Router();
const User = require("../models/userModel");
const Contract = require("../models/contractModel");
const auth = require("../middleware/auth");

// Add a contract
router.post("/add", auth, async (req, res) => {
    try {
      const email  = req.email;
      const {productName, grade, totalPrice, premium, defaultFine, deliveryDate, quantity, description} = req.body
      
      let d0 = new Date();
      let d1 = new Date(deliveryDate);
      
      if(d0.getTime() < d1.getTime()){
        return res.status(400).json({
          message : "Please enter a future date"
        })
      }
      const newContract = Contract({
        seller : email,
        productName,
        grade,
        totalPrice,
        premium,
        defaultFine,
        quantity,
        description,
        deliveryDate : d1,
      })

      await newContract.save();

      return res.status(200).json({
        message : "Contract created Successfully"
      })
    } catch (err) {
      console.error(err);
      return res.status(500).send({
        message : "Error in Creating Contract"
      });
    }
});

// Get all contracts 
router.get("/getall", auth, async (req, res) => {
    try {
      const contracts = await Contract.find();
      return res.status(200).json({
        contracts
      })
    } catch (err) {
      console.error(err);
      return res.status(500).send({
        message : "Error in Fetching your contracts"
      });
    }
});

// Get contract by ID
router.get("/getbyid/:id", auth, async (req, res) => {
    try {
      const contractId = req.params.id;
      const contract = await Contract.findById(contractId);
      res.status(200).json({
        contract
      })
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message : "Error in Fetching detail"
      });
    }
});

// Accepting or Buying a contract
router.post("/accept/:id", auth, async (req, res) => {
  try {
    const email = req.email;
    const contractId = req.params.id;
    const contract = await Contract.findById(contractId);
    
    if(email === contract.seller){
      return res.status(301).json({
        message : "Can't buy own contracts"
      })
    }

    contract.buyer = email;
    contract.status = true;
    await contract.save();
    
    res.status(200).json({
      message : "Bought successfully"
    })
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message : "Error in buying contract"
    });
  }
});


module.exports = router;
