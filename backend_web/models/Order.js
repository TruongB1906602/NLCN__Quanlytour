
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
  
     quantity: {
       type: Number,
       default: 1,
    },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    title: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  
     
     status: { type: String, default: "Đang xử lý..." },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);