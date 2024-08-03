// productController.js
const ProductService = require("../services`/productService");
const { handleError } = require("../utils/errorHandler");

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await ProductService.create(name, description, price);
    res.status(201).json({ product });
  } catch (error) {
    handleError(res, error);
  }
};
