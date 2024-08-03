// profileRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const profileController = require("../controllers/profileController");

router.post("/", authMiddleware.verifyToken, profileController.createProfile);

module.exports = router;
