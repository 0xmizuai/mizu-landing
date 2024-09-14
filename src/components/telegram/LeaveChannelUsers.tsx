"use client";

import { UsersResponse } from "@/interfaces/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import classNames from "classnames";
import { useState } from "react";
import { UnminingUsersModal } from "../modal/UnminingUsersModal";

interface Props {
  className?: string;
}

export const LeaveChannelUsers = (props: Props) => {
  const { className } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const dataResult: UseQueryResult<UsersResponse | null> = useQuery({
    queryKey: ["GetLeaveChannelUsers"],
    queryFn: async () => {
      return await fetchUsers();
    },
  });

  const fetchUsers = async () => {
    const resJson = await (await fetch("/api/channelMembers?type=leave"))
      .json()
      .catch((err) => {});

    if (resJson?.code === 0 && resJson?.data) {
      return resJson.data;
    }

    return null;
  };

  return (
    <div className={classNames(className || "")}>
      <div className={classNames("flex items-center text-[18px]")}>
        <div className="w-[300px] text-text2">New Leave Channel Users</div>

        <div className="ml-4 text-text1">{dataResult.data?.totalCount}</div>

        {!!dataResult.data?.totalCount && (
          <div
            className="text-link ml-10 cursor-pointer"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Manage
          </div>
        )}
      </div>

      <div className="text-text3 text-[12px] mt-2">
        * Users leave channel in 3 days
      </div>

      <UnminingUsersModal
        queryKey="GetLeaveChannelUsers"
        message="Please come back our channel again!"
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        fetchUsers={fetchUsers}
      />
    </div>
  );
};
