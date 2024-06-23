import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

export const User = mongoose.model("User", userSchema);
