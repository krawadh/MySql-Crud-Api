// authMiddleware.js
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err.message);
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId;
    console.log(req.userId);
    next();
  });
};
