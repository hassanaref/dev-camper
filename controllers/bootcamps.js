getAllBootcamps = (req, res, next) => {
  res.status(200).send("all bootcamps");
};

getOneBootcamp = (req, res, next) => {
  res.status(200).send(`bootcamp of id:${req.params.id}`);
};

createBootcamp = (req, res, next) => {
  res.status(200).send("create a bootcamp");
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
