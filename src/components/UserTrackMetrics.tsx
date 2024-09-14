"use client";

import { UserTrackMetricsResponse } from "@/interfaces/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import classNames from "classnames";
import { semiBoldFont } from "../utils/fontUtils";
import { DataItem } from "./DataItem";
import { formatNumber } from "@/utils/numberUtils";

export const UserTrackMetrics = () => {
  const userTrackResult: UseQueryResult<UserTrackMetricsResponse | undefined> =
    useQuery({
      queryKey: ["GetUserTrackMetrics"],
      queryFn: async () => {
        const resJson = await (await fetch("/api/userTrackMetrics"))
          .json()
          .catch((err) => {});

        if (resJson && resJson.code === 0) {
          return resJson.data;
        }

        return "--";
      },
    });

  return (
    <div className="rounded-lg border border-borderLight bg-white p-5 mt-5">
      <div
        className={classNames(semiBoldFont.className, "text-[20px] text-black")}
      >
        User Track
      </div>

      <DataItem
        className="mt-5"
        title="Active Users"
        data={formatNumber(userTrackResult.data?.activeUserCount)}
      />

      <DataItem
        className="mt-5"
        title="Inactive Users"
        data={formatNumber(userTrackResult.data?.inactiveUserCount)}
      />

      <DataItem
        className="mt-5"
        title="Former Leaderboard Users"
        data={formatNumber(userTrackResult.data?.inactiveUserCount)}
      />
    </div>
  );
};
