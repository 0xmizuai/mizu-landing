import {
  MONGODB_NAME_ANALYTICS,
  MONGODB_NAME_REWARD,
} from "@/app/api/lib/mongoose";
import { userPointSchema } from "./userPoint";
import mongoose from "mongoose";
import { userLoginTrackSchema } from "./userLoginTrack";
import { userPointSnapshotSchema } from "./userPointSnapshot";
import { leaderboardSnapshotSchema } from "./userLeaderboardSnapshot";
import { channelMemberSchema } from "./channelMember";

export const MONGO_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZ";

export const UserPointModel =
  mongoose.connection.useDb(MONGODB_NAME_REWARD).models.UserPointModel ||
  mongoose.connection
    .useDb(MONGODB_NAME_REWARD)
    .model("UserPointModel", userPointSchema);

export const UserLoginTrackModel =
  mongoose.connection.useDb(MONGODB_NAME_ANALYTICS).models
    .UserLoginTrackModel ||
  mongoose.connection
    .useDb(MONGODB_NAME_ANALYTICS)
    .model("UserLoginTrackModel", userLoginTrackSchema);

export const UserPointSnapshotModel =
  mongoose.connection.useDb(MONGODB_NAME_ANALYTICS).models
    .UserPointSnapshotModel ||
  mongoose.connection
    .useDb(MONGODB_NAME_ANALYTICS)
    .model("UserPointSnapshotModel", userPointSnapshotSchema);

export const LeaderboardSnapshotModel =
  mongoose.connection.useDb(MONGODB_NAME_ANALYTICS).models
    .LeaderboardSnapshotModel ||
  mongoose.connection
    .useDb(MONGODB_NAME_ANALYTICS)
    .model("LeaderboardSnapshotModel", leaderboardSnapshotSchema);

export const ChannelMemberModel =
  mongoose.connection.useDb(MONGODB_NAME_ANALYTICS).models.ChannelMemberModel ||
  mongoose.connection
    .useDb(MONGODB_NAME_ANALYTICS)
    .model("ChannelMemberModel", channelMemberSchema);
