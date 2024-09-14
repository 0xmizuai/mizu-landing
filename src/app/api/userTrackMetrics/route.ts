import { NextRequest } from "next/server";
import connectMongo from "../lib/mongoose";
import { UserLoginTrackModel, UserPointModel } from "@/models";
import dayjs from "dayjs";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  await connectMongo();

  const activeUserCount: number = await UserLoginTrackModel.find({
    login_timestamp: { $gte: dayjs().unix() - 3 * 3600 * 24 },
  }).countDocuments();

  const inactiveUserCount: number = await UserLoginTrackModel.find({
    login_timestamp: { $lt: dayjs().unix() - 3 * 3600 * 24 },
  }).countDocuments();

  return Response.json({
    code: 0,
    message: "success",
    data: { activeUserCount, inactiveUserCount },
  });
}
