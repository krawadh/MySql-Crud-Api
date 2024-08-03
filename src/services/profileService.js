// profileService.js
const Profile = require("../models/profileModel");

class ProfileService {
  static async create(userId, fullName, bio) {
    // Simulate profile creation logic
    const newProfile = new Profile({ userId, fullName, bio });
    // Save profile to database (or any other storage)
    await newProfile.save();
    // Return profile data
    return newProfile;
  }
}

module.exports = ProfileService;
