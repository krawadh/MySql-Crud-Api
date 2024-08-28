// userController.js
const db = require("../db");
const bcrypt = require("bcrypt");
const { handleError } = require("../utils/errorHandler");
// Create a new user
exports.addUser = async (req, res) => {
  // Implement user creation logic here
  // 1. Extract user data from the request body (req.body)
  const { fname, lname, email, phone } = req.body;
  const password = "password";
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const insertQuery =
      "INSERT INTO users (fname, lname, email, password, phone) VALUES (?,?,?,?,?)";
    const values = [fname, lname, email, hashedPassword, phone];
    const [results] = await db.execute(insertQuery, values);
    const userRs = results[0];
    res.status(201).json({ message: "success", results });
  } catch (error) {
    console.log(error.message);
    //res.status(500).json("Internal server error");
    handleError(res, error.message);
  }

  // 3. Handle success: Respond with a 201 status code and the created user
  // 4. Handle errors: Respond with appropriate error messages and status codes
};

// Retrieve a user by ID
exports.getUserById = async (req, res) => {
  // Implement user retrieval logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const id = req.params.id;
    const query = "SELECT * FROM users WHERE id = ?";
    const [rows] = await db.execute(query, [id]);
    const userRs = rows[0];
    if (userRs) {
      res.status(200).json({ message: "success", userRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    //return res.status(500).json("Internal server error");
    handleError(res, error);
  }
};

// Retrieve all users
exports.getAllUsers = async (req, res) => {
  // 3. Handle success: Respond with a 200 status code and the user data
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const [usersRs] = await db.execute("SELECT * FROM users");
    res.status(200).json({ message: "success", usersRs });
  } catch (error) {
    //return res.status(500).json("Internal server error");
    handleError(res, error);
  }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  // Implement user update logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Extract updated user data from the request body (req.body)
  // 3. Use User.findByIdAndUpdate() to update the user
  // 4. Handle success: Respond with a 200 status code and the updated user data
  // 5. Handle errors: Respond with appropriate error messages and status codes
  const id = req.params.id;
  const { fname, lname, email, phone } = req.body;
  try {
    const updateQuery =
      "UPDATE users SET fname=?, lname=?, email=?, phone=? WHERE id = ?";
    const updates = [fname, lname, email, phone, id];
    const [userUpdatedRs] = await db.execute(updateQuery, updates);
    if (userUpdatedRs.affectedRows > 0) {
      res.status(200).json({ message: "User updated", userUpdatedRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.log(error);
    // res.status(500).json("Internal server error");
    handleError(res, error);
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  // Implement user deletion logic here
  // 1. Extract the user ID from the request parameters (req.params.id)
  // 2. Use User.findByIdAndDelete() to delete the user
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes
  try {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM users WHERE id = ?";
    const [userDeletedRs] = await db.execute(deleteQuery, [id]);
    if (userDeletedRs.affectedRows > 0) {
      res.status(200).json({ message: "User deleted", userDeletedRs });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    // res.status(500).json("Internal server error");
    handleError(res, error);
  }
};
