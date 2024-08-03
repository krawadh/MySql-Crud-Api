// productRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

router.post("/", authMiddleware.verifyToken, productController.createProduct);

module.exports = router;
