const mongoose = require('mongoose')

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/KickStartMumbai");
    console.log("Mongo connected for KickstartMumbai");
  } catch (error) {
    console.error("Unexpected error in DB: ", error);
  }
}

module.exports = { connectToDatabase };