// config.js
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGO_URL || "mongodb://localhost:27017/myapp",
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
};
