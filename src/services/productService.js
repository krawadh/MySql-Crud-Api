// productService.js
const Product = require("../models/productModel");

class ProductService {
  static async create(name, description, price) {
    // Simulate product creation logic
    const newProduct = new Product({ name, description, price });
    // Save product to database (or any other storage)
    await newProduct.save();
    // Return product data
    return newProduct;
  }
}

module.exports = ProductService;
