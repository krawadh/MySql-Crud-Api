// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const { verifyToken } = require("../middlewares/authMiddleware");

// Create a new user
router.post("/users", verifyToken, userController.addUser);

// Retrieve all users
router.get("/users", verifyToken, userController.getAllUsers);

// Retrieve a user by ID
router.get("/users/:id", verifyToken, userController.getUserById);

// Update a user by ID
router.patch("/users/:id", verifyToken, userController.updateUserById);

// Delete a user by ID
router.delete("/users/:id", verifyToken, userController.deleteUserById);

module.exports = router;
