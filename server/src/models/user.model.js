import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
    },
    upi: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      countrycode: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
        unique: true,
      },
    },
    avatar: {
      type: String,
      required: false,
    },
    groups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
    //hello 
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    debts: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        amount: {
          type: Number,
          default: 0,
        },
      },
    ],
    owes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        amount: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
