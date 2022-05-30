const express = require("express");
const router = express.Router();
const {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getAllBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getOneBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
