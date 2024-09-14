import { UserItem } from "@/interfaces/api";
import { UserPointModel } from "@/models";
import { getTelegramDisplayName } from "@/utils/commonUtils";
import dayjs from "dayjs";
import { NextRequest } from "next/server";
import connectMongo from "../lib/mongoose";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  await connectMongo();

  // Find users whose points not update for 3 days
  const userPoints = await UserPointModel.aggregate([
    {
      $match: {
        updatedAt: {
          $lt: dayjs.unix(dayjs().unix() - 3 * 24 * 3600).toDate(),
        },
      },
    },
    {
      $lookup: {
        from: "user_maps",
        localField: "user_key",
        foreignField: "user_key",
        as: "telegramUserInfo",
        pipeline: [
          { $limit: 1 },
          {
            $sort: {
              createdAt: -1,
            },
          },
        ],
      },
    },
    // {
    //   $unwind: {
    //     path: "$userMap",
    //   },
    // },
    {
      $set: {
        telegramUserInfo: {
          $arrayElemAt: ["$telegramUserInfo.telegram_user_info", 0],
        },
      },
    },
  ]);

  console.log({ userPoints });

  const users: UserItem[] = userPoints.map((item) => {
    return {
      username: getTelegramDisplayName(item.telegramUserInfo),
      user_key: item.user_key,
    };
  });

  return Response.json({
    code: 0,
    message: "success",
    data: {
      totalCount: users.length,
      users: users,
    },
  });
}
