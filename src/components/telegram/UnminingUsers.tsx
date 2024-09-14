"use client";

import { UsersResponse } from "@/interfaces/api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import classNames from "classnames";
import { useState } from "react";
import { UnminingUsersModal } from "../modal/UnminingUsersModal";

interface Props {
  className?: string;
}

export const UnminingUsers = (props: Props) => {
  const { className } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const dataResult: UseQueryResult<UsersResponse | undefined> = useQuery({
    queryKey: ["GetUnminingUsers"],
    queryFn: async () => {
      return await fetchUsers();
    },
  });

  const fetchUsers = async () => {
    const resJson = await (await fetch("/api/unminingUsers"))
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
        <div className="w-[300px] text-text2">Unmining Users</div>

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
        * Users not mining for 3 days
      </div>

      <UnminingUsersModal
        queryKey="GetUnminingUsers"
        message="Come and join our mining again!"
        fetchUsers={fetchUsers}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
    </div>
  );
};
