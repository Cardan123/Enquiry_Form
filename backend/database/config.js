const mongoose = require("mongoose"); //import mongoose

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN); //establish connection to Database with MongoCDN

    console.log("Database Online");
  } catch (error) {
    console.log(error);
    throw new Error("Database connection fail");
  }
};

module.exports = dbConnection;
