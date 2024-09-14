import mongoose from "mongoose";

export const userPointSnapshotSchema = new mongoose.Schema(
  {
    user_key: { type: String },
    claimed_point: Number,
    referral_reward_point: Number,
    latest_claim_timestamp: Number,
    snapshot_timestamp: Number,
  },
  {
    timestamps: false,
    collection: "user_reward_points_snapshot",
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
