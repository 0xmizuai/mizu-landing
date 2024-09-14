import mongoose from "mongoose";

export const channelMemberSchema = new mongoose.Schema(
  {
    user_key: { type: String, unique: true },
    username: String,
    channel_id: String,
    type: String,
    update_timestamp: Number,
  },
  {
    timestamps: true,
    collection: "channel_members",
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);
