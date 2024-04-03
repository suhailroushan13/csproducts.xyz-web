import mongoose from "mongoose";
const { Schema } = mongoose;

const adminSchema = new Schema({
  adminname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

const admin = mongoose.model("admin", adminSchema, "admins");

export default admin;
