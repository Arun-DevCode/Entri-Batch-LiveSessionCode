import mongoose from "mongoose";
import { config } from "dotenv";

// ENV
config();

// Credentials
const DBUSERNAME = process.env.MONGODB_USERNAME || "Guest";
const DBPASSCODE = process.env.MONGODB_PASSCODE || "Guest123";
const DBNAME = process.env.MONGODB_DATABASE_NAME || "test";

// Connect with db
async function DBCONNECTION() {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${DBUSERNAME}:${DBPASSCODE}@cluster0.ynk007h.mongodb.net/${DBNAME}?appName=Cluster0`
    );
    if (!connection) {
      throw new Error("Failed To Connect Database!");
    }
    console.log("DB CONNECTED!");
  } catch (error) {
    console.log(error);
  }
}

export default DBCONNECTION;
