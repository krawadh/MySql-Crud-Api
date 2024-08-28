// authController.js
const AuthService = require("../services/authService");

exports.register = async (req, res) => {
  const { firstName, lastName, email, password, phone, gender } = req.body;
  try {
    const user = await AuthService.register(
      firstName,
      lastName,
      email,
      password,
      phone,
      gender
    );
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await AuthService.login(email, password);
    console.log(user);
    res.status(200).json({ message: "success", token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  // No need to handle logout with JWT
  //res.status(204).end();
};
