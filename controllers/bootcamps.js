const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const bootcamp = require("../models/bootcamp");

getAllBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await bootcamp.find();
  res.status(200).json(bootcamps);
});

getOneBootcamp = asyncHandler(async (req, res, next) => {
  const TargetBootcamp = await bootcamp.findById(req.params.id);
  if (!TargetBootcamp) {
    return next(
      new errorResponse(`bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).send(TargetBootcamp);
});

createBootcamp = asyncHandler(async (req, res, next) => {
  const newBootcamp = await bootcamp.create(req.body);
  res.status(201).json({ success: true, data: newBootcamp });
});

updateBootcamp = asyncHandler(async (req, res, next) => {
  const updatedBootcamp = await bootcamp.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedBootcamp) {
    next(
      new errorResponse(`bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json(updatedBootcamp);
});

deleteBootcamp = asyncHandler(async (req, res, next) => {
  const deletedBootcamp = await bootcamp.findByIdAndDelete(req.params.id);
  if (!deletedBootcamp) {
    next(
      new errorResponse(`bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({});
});

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
