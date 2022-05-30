const express = require("express");
const dotenv = require("dotenv");
const logger = require('./middleware/logger')
// env config 
dotenv.config({ path: "./config/config.env" });
// route files
const bootcamps = require("./routes/bootcamps.js");
const app = express();
app.use(logger)
// mount routers
app.use("/v1/bootcamps", bootcamps);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running is ${process.env.NODE_ENV} mode on port ${port}`);
});
