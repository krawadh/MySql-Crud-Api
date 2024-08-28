// profileRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const profileController = require("../controllers/profileController");

// router.post(
//   "/add",
//   authMiddleware.verifyToken,
//   profileController.createProfile
// );
router.get("/get", authMiddleware.verifyToken, profileController.getProfile);
module.exports = router;
