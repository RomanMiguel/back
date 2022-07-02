import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      requided: true
    },
    avatar: {
      type: String
    }
  },
  {
    timestamps: true,
  },
);

export const UserModel = mongoose.model("Usuarios", Schema);