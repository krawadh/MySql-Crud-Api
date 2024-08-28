// profileService.js
//const Profile = require("../models/profileModel");
const db = require("../db");

class ProfileService {
  static async create(userId, fullName, bio) {
    // Simulate profile creation logic
    const newProfile = new Profile({ userId, fullName, bio });
    // Save profile to database (or any other storage)
    await newProfile.save();
    // Return profile data
    return newProfile;
  }

  static async getProfile(userId, fullName, bio) {
    // Simulate profile creation logic
    const query =
      "SELECT fname, lname, email, phone FROM users WHERE email = ?";

    // Save profile to database (or any other storage)
    const [rows] = await db.execute(query, [email]);
    const user = rows[0];
    // Return profile data
    return user;
  }
}

module.exports = ProfileService;
