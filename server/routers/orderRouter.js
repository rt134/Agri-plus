const router = require("express").Router();
const Order = require("../models/orderModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const { name, price } = req.body;
    const newOrder = new Order({
      name,
      price,
    });
    const savedOrder = await newOrder.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders); 
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
})
module.exports = router;
