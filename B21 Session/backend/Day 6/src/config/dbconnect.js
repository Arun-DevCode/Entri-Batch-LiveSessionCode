const mongoose = require("mongoose");

async function connectwithDB() {
  try {
    await mongoose
      .connect("Mongodb Atlas URL")
      .then(() => console.log("Database connected!"))
      .catch((err) => {
        throw new Error("Failed to connect with database!", err);
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectwithDB;
