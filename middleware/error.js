const errorResponse = require("../utils/errorResponse");
function errorHandler(err, req, res, next) {
  let error = { ...err };
  error.message = err.message;
  console.log(err.stack.red);
  if (err.name === "CastError") {
    const message = `bootcamp not found with id of ${err.value}`;
    error = new errorResponse(message, 404);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error",
  });
}

module.exports = errorHandler;
