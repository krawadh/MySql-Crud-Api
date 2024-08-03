// profileModel.js
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  bio: { type: String },
});

module.exports = mongoose.model("Profile", profileSchema);
