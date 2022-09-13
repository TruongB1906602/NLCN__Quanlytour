const mongoose = require("mongoose");

const PaySchema = new mongoose.Schema(
  {
   
    address: { type: String, required: true},
    others: { type: String},
     userId: { type: String},
   
    phone: { type: Number, required: true},
    name: { type: String, required: true},
   
    
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pay", PaySchema);