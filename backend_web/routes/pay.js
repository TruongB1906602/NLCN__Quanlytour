const Pay= require("../models/Pay");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",verifyToken,async (req, res) => {
  const newPay = new Pay(req.body);
  try {
      const savedPay = await newPay.save();
      res.status(200).json(savedPay);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedPay = await Pay.findByIdAndUpdate(
      req.params.id,
       {
         $set: req.body,
       },
      { new: true }
    );
    res.status(200).json(updatedPay);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Pay.findByIdAndDelete(req.params.id);
    res.status(200).json("Pay has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART

router.get("/find/:id", async (req, res) => {
  try {
    const pay = await Pay.find({id:  req.params.id });
    res.status(200).json(pay);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Đang phát triển
// //GET ALL
router.get("/",async (req, res) => {
  try {
    const pays = await Pay.find();
    res.status(200).json(pays);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;