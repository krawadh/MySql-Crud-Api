// authService.js
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const db = require("../db");

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
    try {
      //const user = await User.findOne({ email });
      const query = "SELECT * FROM users WHERE email = ?";
      const [rows] = await db.execute(query, [email]);
      const user = rows[0];

      // Generate JWT token
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            userId: user.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 60 * 60 * 60, //in sec
          }
        );
        return { token, user };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      throw new Error(err.message);
    }

    // const token = jwt.sign({ userId: user._id }, "your-secret-key", {
    //   expiresIn: "1h",
    // });
    // return { token };
  }

  static async verifyToken(token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded.userId;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}

module.exports = AuthService;
