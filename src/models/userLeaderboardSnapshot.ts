import mongoose from "mongoose";

export const leaderboardSnapshotSchema = new mongoose.Schema(
  {
    leaderboard: Object,
    snapshot_timestamp: Number,
  },
  {
    timestamps: false,
    collection: "leaderboard_snapshot",
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
