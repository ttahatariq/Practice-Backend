const ProductModel = require("./models/ProductModel");

const createProduct = async (name, price, color, department, description) => {
  console.log("Product creation");
  let product = new ProductModel();
  product.name = name;
  product.price = price;
  product.color = color;
  product.department = department;
  product.description = description;
  await product.save();
  return product;
};

const updateProduct = async (_id, title, price, tags) => {
  let product = await ProductModel.findById(_id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  let products = await ProductModel.find();
  return products;
};

const deleteProduct = async (_id) => {
  let product = await ProductModel.findByIdAndDelete(_id);
  return product;
};

module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
