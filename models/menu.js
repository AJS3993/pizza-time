const mongoose = require("mongoose");


const menuSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: String
  }
);


module.exports = mongoose.model("Menu", menuSchema);