import { mongoose, Schema } from "mongoose";

const debtSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const groupStatsSchema = new Schema({
  totalExpenses: {
    type: Number,
    default: 0,
  },
  balances: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      amount: {
        type: Number,
        default: 0, // Positive means owed to the group, negative means the group owes
      },
    },
  ],
  debts: [debtSchema],
});

const groupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    icon: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        index: true,
      },
    ],
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    statistics: groupStatsSchema,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add compound indexes
groupSchema.index({ createdBy: 1, category: 1 });
groupSchema.index({ createdBy: 1, name: 1 });

// Ensure efficient querying for members
groupSchema.index({ "members": 1 });

export const Group = mongoose.model("Group", groupSchema);
