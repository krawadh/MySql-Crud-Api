// errorHandler.js
exports.handleError = (res, error) => {
  console.error(error);
  return res.status(500).json({ error: "Something went wrong" });
};
