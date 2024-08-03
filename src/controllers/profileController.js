// profileController.js
const ProfileService = require("../services/profileService");
const { handleError } = require("../utils/errorHandler");

exports.createProfile = async (req, res) => {
  const { fullName, bio } = req.body;
  const userId = req.userId; // Extracted from JWT token
  try {
    const profile = await ProfileService.create(userId, fullName, bio);
    res.status(201).json({ profile });
  } catch (error) {
    handleError(res, error);
  }
};
