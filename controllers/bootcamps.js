const errorResponse = require("../utils/errorResponse");
const bootcamp = require("../models/bootcamp");
getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await bootcamp.find();
    res.status(200).json(bootcamps);
  } catch (error) {
    next(err);
  }
};

getOneBootcamp = async (req, res, next) => {
  try {
    const TargetBootcamp = await bootcamp.findById(req.params.id);
    if (!TargetBootcamp) {
      return next(
        new errorResponse(`bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).send(TargetBootcamp);
  } catch (err) {
    next(err);
  }
};

createBootcamp = async (req, res, next) => {
  try {
    const newBootcamp = await bootcamp.create(req.body);
    res.status(201).json({ success: true, data: newBootcamp });
  } catch (err) {
    next(err);
  }
};

updateBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

deleteBootcamp = async (req, res, next) => {
  try {
    const deletedBootcamp = await bootcamp.findByIdAndDelete(req.params.id);
    if (!deletedBootcamp) {
      next(
        new errorResponse(`bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
