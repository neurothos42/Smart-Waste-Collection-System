import mongoose from "mongoose";
import { ENV } from "./ENV.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    const connect = await mongoose.connect(ENV.DB_URL, {
      dbName: ENV.DB_NAME,
    });
    console.log("Mongodb is connected at", connect.connection.host);
  } catch (error) {
    console.error("Mongodb is not connected", error);
    process.exit(1);
  }
};
