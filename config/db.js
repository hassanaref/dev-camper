const mongoose = require("mongoose");
const connection = async () => {
  const connect = await mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true
  });
  console.log(`MongoDB Connected: ${connect.connection.host}`);
};
module.exports = connection;
