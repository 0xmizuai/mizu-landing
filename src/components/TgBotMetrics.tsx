"use client";

import classNames from "classnames";
import { semiBoldFont } from "../utils/fontUtils";
import { DataItem } from "./DataItem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { OverallMetricsResponse } from "@/interfaces/api";
import { formatNumber } from "@/utils/numberUtils";
import { NewLeaderboardUsers } from "./telegram/NewLeaderboardUsers";
import { FalloutLeaderboardUsers } from "./telegram/FalloutLeaderboardUsers";
import { UnminingUsers } from "./telegram/UnminingUsers";
import { JoinChannelUsers } from "./telegram/JoinChannelUsers";
import { LeaveChannelUsers } from "./telegram/LeaveChannelUsers";

export const TgBotMetrics = () => {
  const metricsResult: UseQueryResult<OverallMetricsResponse | undefined> =
    useQuery({
      queryKey: ["GetOverallMetrics"],
      queryFn: async () => {
        const resJson = await (await fetch("/api/overallMetrics"))
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
        Telegram Bot Metrics
      </div>

      <NewLeaderboardUsers className="mt-5" />

      <FalloutLeaderboardUsers className="mt-5" />

      <UnminingUsers className="mt-5" />

      <JoinChannelUsers className="mt-5" />

      <LeaveChannelUsers className="mt-5" />
    </div>
  );
};
