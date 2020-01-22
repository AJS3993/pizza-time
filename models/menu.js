const mongoose = require('mongoose')
const Schema = mongoose.Schema

var menuSchema = new Schema(
  {
    name: { type: String},
    description: { type: String},
    price: { type: String}
  }
);


module.exports = mongoose.model('Menu', menuSchema);