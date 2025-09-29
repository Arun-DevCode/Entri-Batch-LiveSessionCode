const mongoose = require("mongoose");

// Connector
async function DBConnector() {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/Entri-session"
    );

    if (!connection) {
      throw new Error("Failed to connect database");
    }

    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = DBConnector;
