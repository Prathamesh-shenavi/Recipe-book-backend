import mongoose from "mongoose";
import dotenv from "dotenv";
import {DB_NAME} from "../constants.js";
dotenv.config();
export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      "MongoDB Connected !!"
    );
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};
