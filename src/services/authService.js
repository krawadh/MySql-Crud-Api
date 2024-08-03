// authService.js
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

class AuthService {
  static async register(firstName, lastName, email, password, phone, gender) {
    // Simulate registration logic
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
    });
    // Save user to database (or any other storage)
    await newUser.save();
    // Return user data without password
    return {
      username: `${newUser.firstName} ${newUser.lastName}`,
      email: newUser.email,
      phone: newUser.phone,
      gender: newUser.gender,
    };
  }

  static async login(email, password) {
    // Simulate login logic
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    return { token };
  }

  static async verifyToken(token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, "your-secret-key");
      return decoded.userId;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}

module.exports = AuthService;
