import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    require: true,
  },
});
export const User = mongoose.model("User", userSchema);
