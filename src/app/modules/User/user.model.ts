import { Schema, model } from "mongoose";
import { IName, IPasswordHistory, IUser } from "./user.interface";

const nameSchema = new Schema<IName>(
  {
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
  },
  { _id: false },
);

const passwordHistorySchema = new Schema<IPasswordHistory>(
  {
    password: { type: String, required: [true, "Password is required"] },
    createdAt: { tyep: Date, required: [true, "Created time is required"] },
  },
  { _id: false },
);

const userSchema = new Schema<IUser>(
  {
    name: nameSchema,
    userName: {
      type: String,
      required: [true, "User name is required"],
      unique: true,
    },
    role: { type: String, default: "user" },
    coverImg: { type: String, required: [true, "Cover Image is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    status: { type: String, default: "active" },
    isDeleted: { type: Boolean, default: false },
    joinedAt: { type: Date },
    passwordHistory: [passwordHistorySchema],
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>("User", userSchema);
