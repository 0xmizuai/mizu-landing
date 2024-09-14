"use client";

import classNames from "classnames";
import { semiBoldFont } from "../utils/fontUtils";
import { DataItem } from "./DataItem";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { OverallMetricsResponse } from "@/interfaces/api";
import { formatNumber } from "@/utils/numberUtils";

export const OverallMetrics = () => {
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
    <div className="rounded-lg border border-borderLight bg-white p-5">
      <div
        className={classNames(semiBoldFont.className, "text-[20px] text-black")}
      >
        Overall Metrics
      </div>

      <DataItem
        className="mt-5"
        title="Total User With Points"
        data={formatNumber(metricsResult.data?.totalUserPointCount)}
      />

      <div className={classNames("flex items-center text-[18px] mt-5")}>
        <div className="w-[300px] text-text2">Total App Visitors</div>

        <a
          className="ml-4 text-link underline"
          href="https://analytics.mizu.global/websites/8ea71444-9dd7-43c4-bd7d-d7676d21b04d"
          target="_blank"
        >
          Umami
        </a>
      </div>

      <div className={classNames("flex items-center text-[18px] mt-5")}>
        <div className="w-[300px] text-text2">User Events</div>

        <a
          className="ml-4 text-link underline"
          href="https://analytics.mizu.global/websites/8ea71444-9dd7-43c4-bd7d-d7676d21b04d?view=event"
          target="_blank"
        >
          Umami
        </a>
      </div>
    </div>
  );
};
