import mongoose from "mongoose";

export interface IUserPoint {
  user_key: string;
  claimed_point: number;
  latest_claim_timestamp: number;
}

export const userPointSchema = new mongoose.Schema<IUserPoint>(
  {
    user_key: { type: String, unique: true },
    claimed_point: Number,
    latest_claim_timestamp: Number,
  },
  {
    timestamps: true,
    collection: "user_reward_points",
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
