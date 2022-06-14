const bootcamp = require("../models/bootcamp");
getAllBootcamps = (req, res, next) => {
  res.status(200).send("all bootcamps");
};

getOneBootcamp = (req, res, next) => {
  res.status(200).send(`bootcamp of id:${req.params.id}`);
};

createBootcamp = async (req, res, next) => {
  const newBootcamp = await bootcamp.create(req.body);
  res.status(201).json({ success: true ,
  data: newBootcamp});
};

updateBootcamp = (req, res, next) => {
  res.status(200).send(`update bootcamp of id:${req.params.id}`);
};

deleteBootcamp = (req, res, next) => {
  res.status(200).send(`delete bootcamp of id:${req.params.id}`);
};

module.exports = {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
