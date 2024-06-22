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
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
});

const savedSplitOptionSchema = new Schema({
  name: {
    type: String,
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
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        default: 1,
        min: 0,
      },
      included: {
        type: Boolean,
        default: true,
      },
    },
  ],
});

// Index for user in splitDetails for faster querying
savedSplitOptionSchema.index({ "splitDetails.user": 1 });

const groupStatsSchema = new Schema({
  totalExpenses: {
    type: mongoose.Schema.Types.Decimal128,
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
        type: mongoose.Schema.Types.Decimal128,
        default: 0, // Positve means owed to the group, Negative means the group owes
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
    savedSplitOptions: [savedSplitOptionSchema],
  },
  {
    timestamps: true,
  }
);

// Add compound indexes
groupSchema.index({ createdBy: 1, category: 1 });
groupSchema.index({ createdBy: 1, name: 1 });

// Ensure efficient querying for members
groupSchema.index({ members: 1 });

// Index for createdAt and updatedAt for sorting and filtering
groupSchema.index({ createdAt: 1 });
groupSchema.index({ updatedAt: 1 });

export const Group = mongoose.model("Group", groupSchema);
