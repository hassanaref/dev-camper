const errorResponse = require("../utils/errorResponse");
function errorHandler(err, req, res, next) {
  let error = { ...err };
  error.message = err.message;
  //mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `bootcamp not found with id of ${err.value}`;
    error = new errorResponse(message, 404);
  }
  //mongoose duplicate key
  if (err.code===11000) {
    const message = 'duplicate key value entered';
    error = new errorResponse(message,400)
  }
  //mongoose validation error
  if(err.name==='ValidationError') {
    const message = Object.values(err.errors).map(val=>val.message)
    error = new errorResponse(message,400)
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error",
  });
}

module.exports = errorHandler;
