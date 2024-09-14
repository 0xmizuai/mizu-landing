import mongoose from "mongoose";

export const userLoginTrackSchema = new mongoose.Schema(
  {
    user_key: { type: String, unique: true },
    login_timestamp: Number,
  },
  {
    timestamps: true,
    collection: "user_login_tracks",
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
