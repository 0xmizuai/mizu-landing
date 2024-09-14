import { NextRequest } from "next/server";
import connectMongo from "../lib/mongoose";
import {
  LeaderboardSnapshotModel,
  UserLoginTrackModel,
  UserPointModel,
} from "@/models";
import dayjs from "dayjs";
import { apiHost } from "@/config";
import { LeaderboardResponseItem, UserItem } from "@/interfaces/api";
import { getUsername } from "@/utils/commonUtils";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  await connectMongo();

  const latestSnapshot = await LeaderboardSnapshotModel.findOne({}, "", {
    sort: {
      snapshot_timestamp: -1,
    },
  });

  const resJson = await (await fetch(`${apiHost}/api/leaderboard`))
    .json()
    .catch((err) => {
      console.log(err);
    });

  const currentLeaderboard = resJson?.data
    ?.userPoints as LeaderboardResponseItem[];
  const snapshotLeaderboard =
    latestSnapshot?.leaderboard as LeaderboardResponseItem[];

  if (!currentLeaderboard || !snapshotLeaderboard) {
    return Response.json({
      code: -1,
      message: "missing data",
      data: {},
    });
  }

  const falloutUsers: UserItem[] = [];

  snapshotLeaderboard.forEach((current) => {
    const matchedSnapshot = currentLeaderboard.find(
      (snapshot) => snapshot.user_key === current.user_key
    );
    if (!matchedSnapshot) {
      falloutUsers.push({
        user_key: current.user_key,
        username: getUsername(current),
      });
    }
  });

  return Response.json({
    code: 0,
    message: "success",
    data: { totalCount: falloutUsers.length, users: falloutUsers },
  });
}
