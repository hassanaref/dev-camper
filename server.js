const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan')
const connectDB = require('./config/db')
// env config 
dotenv.config({ path: "./config/config.env" });
// connect to DataBase
connectDB();
// route files
const bootcamps = require("./routes/bootcamps.js");
const app = express();
//body parser
app.use(express.json())
// dev logger tool
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// mount routers
app.use("/v1/bootcamps", bootcamps);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running is ${process.env.NODE_ENV} mode on port ${port}`);
});
