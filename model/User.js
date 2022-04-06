import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 28,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 28,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      validate: validator.isEmail,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    confPassword: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    address: {
      type: String,
      default: "address",
    },
    ref: {
      a: {
        referee_a_id: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
      },
      b: {
        referee_b_id: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
      },
    },

    nextOfKin: {
      firstName: { type: String },
      lastName: { type: String },
      relationship: { type: String },
    },
    age: { type: Number },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
