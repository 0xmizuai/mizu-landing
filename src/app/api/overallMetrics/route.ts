import { NextRequest } from "next/server";
import connectMongo from "../lib/mongoose";
import { UserPointModel } from "@/models";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  await connectMongo();

  const totalUserPointCount: number = await UserPointModel.find(
    {}
  ).countDocuments();

  return Response.json({
    code: 0,
    message: "success",
    data: { totalUserPointCount },
  });
}
