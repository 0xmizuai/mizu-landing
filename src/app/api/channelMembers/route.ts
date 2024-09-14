import { ChannelMemberUpdateRequestData, UserItem } from "@/interfaces/api";
import { NextRequest } from "next/server";
import connectMongo from "../lib/mongoose";
import dayjs from "dayjs";
import { ChannelMemberModel } from "@/models";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const type = params.get("type");

  await connectMongo();

  // Find users leave/join channel in 3 days
  const members = await ChannelMemberModel.find(
    {
      update_timestamp: {
        $gt: dayjs().unix() - 3 * 3600 * 24,
      },
      type: type || "join",
    },
    "username user_key",
    {}
  );

  const users: UserItem[] = members.map((item) => {
    return {
      username: item.username,
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

export async function POST(request: NextRequest) {
  const requestData: ChannelMemberUpdateRequestData = await request.json();
  const { userKey, channelId, type, username } = requestData;

  if (!userKey || !channelId || !type) {
    return Response.json({
      code: -1,
      message: "request data invalid",
    });
  }

  await connectMongo();

  const newRecord = {
    channel_id: channelId,
    user_key: userKey,
    username: username,
    type: type,
    update_timestamp: dayjs().unix(),
  };

  await ChannelMemberModel.findOneAndUpdate(
    {
      user_key: userKey,
    },
    newRecord,
    { upsert: true }
  ).exec();

  return Response.json({
    code: 0,
    data: { newRecord: newRecord },
  });
}
