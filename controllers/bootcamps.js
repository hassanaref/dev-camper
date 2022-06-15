const bootcamp = require("../models/bootcamp");
getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await bootcamp.find();
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

getOneBootcamp = async (req, res, next) => {
  try {
    const TargetBootcamp = await bootcamp.findById(req.params.id);
    if (!TargetBootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).send(TargetBootcamp);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

createBootcamp = async (req, res, next) => {
  try {
    const newBootcamp = await bootcamp.create(req.body);
    res.status(201).json({ success: true, data: newBootcamp });
  } catch {
    res.status(400).json({ success: false });
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
      return res.status(400).json({ success: false });
    }
    res.status(200).json(updatedBootcamp);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

deleteBootcamp =async (req, res, next) => {
  try {
    const deletedBootcamp = await bootcamp.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedBootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ success: false });
  }};

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
