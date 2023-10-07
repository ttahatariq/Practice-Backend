const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  department: String,
  description: String,
});
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
