import { useQuery, UseQueryResult } from "@tanstack/react-query";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const NewLeaderboardUsers = (props: Props) => {
  const { className } = props;

  const dataResult: UseQueryResult<string | undefined> = useQuery({
    queryKey: ["GetNewLeaderboardUsers"],
    queryFn: async () => {
      const resJson = await (await fetch("/api/newLeaderboardUsers"))
        .json()
        .catch((err) => {});

      if (resJson?.code === 0 && resJson?.data) {
        return resJson.data.totalCount;
      }

      return "--";
    },
  });

  return (
    <div
      className={classNames("flex items-center text-[18px]", className || "")}
    >
      <div className="w-[300px] text-text2">New Leaderboard Users</div>

      <div className="ml-4 text-text1">{dataResult.data}</div>
    </div>
  );
};
