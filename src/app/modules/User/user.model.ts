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
    createdAt: { type: Date, required: [true, "Created time is required"] },
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
    password: {
      type: String,
      required: [true, "Password is required"],
      select: 0,
    },
    status: { type: String, default: "active" },
    isDeleted: { type: Boolean, default: false },
    joinedAt: { type: Date },
    passwordHistory: { type: [passwordHistorySchema], select: 0 },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  next();
});

export const User = model<IUser>("User", userSchema);
