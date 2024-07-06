import app from "./app.js";
import { connectDB } from "./DataBase/DB.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Server error: ", err);
    });
    app.listen(port, () => {
      console.log("Server running on:", port);
    });
  })
  .catch((err) => {
    console.log("Mongo connection error:", err);
  });