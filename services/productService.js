const Product = require("../models/Product");

const getAllProducts = async () => {
  return await Product.find();
};

const getProductsByCategory = async (category) => {
  return await Product.find({ categoria: category });
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
