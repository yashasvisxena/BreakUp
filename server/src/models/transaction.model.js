import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paidBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    splitType: {
      type: String,
      enum: ["amount", "proportion"],
      required: true,
    },
    splitDetails: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        share: {
          type: Number,
          required: true,
        },
      },
    ],
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


transactionSchema.index({ group: 1, date: -1 });
transactionSchema.index({ paidBy: 1, date: -1 });

export const Transaction = mongoose.model("Transaction", transactionSchema);
