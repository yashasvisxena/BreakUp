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
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    debt : {
      type : Number,
      default : 0
    },
    owed : {
      type : Number,
      default : 0
    }
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
