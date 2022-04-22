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
    address_a: {
      type: String,
      default: "address",
    },
    address_b: {
      type: String,
      default: "address",
    },
    address_c: {
      type: String,
      default: "address",
    },
    ref: {
      a: {
        referee_a_id: { type: String, required: true },
      },
      b: {
        referee_b_id: { type: String, required: true },
      },
    },

    nextOfKin: {
      fullName: { type: String },
      phoneNumber: { type: String },
      email: { type: String },
      address_a: { type: String },
      address_b: { type: String },
      address_c: { type: String },
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
