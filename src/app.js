// app.js
const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: true }));

// Routes
//const authRoutes = require("../src/routes/authRoutes");
//const profileRoutes = require("../src/routes/profileRoutes");
//const productRoutes = require("../src/routes/productRoutes");
const userRoutes = require("./routes/userRoutes.js");

//app.use("/api/auth", authRoutes);
//app.use("/api/profile", profileRoutes);
//app.use("/api/product", productRoutes);
app.use("/api", userRoutes);

// Example query

//const [usersRs] = db.execute("SELECT * FROM users");
//console.log(usersRs);
// db.query("SELECT * FROM users")
//   .then(([rows, fields]) => {
//     console.log("Query results:", rows);
//   })
//   .catch((err) => {
//     console.error("Error executing query:", err);
//   });

module.exports = app;
