const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    time: { type: String, required: true, },
    date: { type: String, required: true, },
    destination: { type: String, required: true, },
    sl: { type: Number, required: true, },
    // schedule: { type: String, required: true, },
    // note: { type: String, required: true, },
    img: { type: Array, required: true },
    categories:String,
    
    price: { type: Number, required: true },
    // newprice: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);