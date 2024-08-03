// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// Create a new user
router.post("/users", userController.addUser);

// Retrieve all users
router.get("/users", userController.getAllUsers);

// Retrieve a user by ID
router.get("/users/:id", userController.getUserById);

// Update a user by ID
router.patch("/users/:id", userController.updateUserById);

// Delete a user by ID
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
