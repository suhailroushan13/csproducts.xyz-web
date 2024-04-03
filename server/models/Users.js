import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  // Add any additional fields as needed
});

const User = mongoose.model("User", userSchema, "users");

export default User;
