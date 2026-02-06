import mongoose from "mongoose"; // ODM : Object Data Modeling

async function DBConnection() {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/LocalDB",
    );

    return connection;
  } catch (error) {
    return process.exit(1);
  }
}

export default DBConnection;
