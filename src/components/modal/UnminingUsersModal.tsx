"use client";

import { UsersResponse } from "@/interfaces/api";
import { batchSendBotMessages } from "@/utils/botUtils";
import { getModalStyles } from "@/utils/uiUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import classNames from "classnames";
import _ from "lodash";
import { X } from "lucide-react";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import ReactModal from "react-modal";
import { LoadingContainer } from "../LoadingContainer";

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  queryKey: string;
  fetchUsers: () => Promise<UsersResponse>;
  message: string;
}

export const UnminingUsersModal = (props: ConfirmModalProps) => {
  const { open, onClose, fetchUsers, queryKey, message } = props;
  const [loading, setLoading] = useState(false);
  const [selectedUserIdMap, setSelectedUserIdMap] = useState<{
    [key: string]: boolean;
  }>({});

  const selectedUserIdArr = _.keys(selectedUserIdMap).filter(
    (key) => selectedUserIdMap[key]
  );

  const dataResult: UseQueryResult<UsersResponse | undefined> = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return await fetchUsers();
    },
  });

  const sendMessages = async (userIds: string[] | undefined) => {
    setLoading(true);
    await batchSendBotMessages(userIds, message);
    setLoading(false);
    enqueueSnackbar(<div>Send messages successfully</div>);
  };

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={() => {}}
      style={getModalStyles()}
      contentLabel="Modal Content"
      ariaHideApp={false}
    >
      <LoadingContainer loading={loading}>
        <div className="py-5 px-10 flex flex-col items-stretch bg-color-bgModal">
          <div className="self-stretch flex items-center justify-end mx-[-0.12rem]">
            <div
              className="cursor-pointer text-color-text2 hover:text-color-text1"
              onClick={onClose}
            >
              <X size={"16px"} strokeWidth={3} />
            </div>
          </div>

          <div className="">
            <div
              className="inline-block text-link cursor-pointer"
              onClick={() => {
                sendMessages(
                  dataResult.data?.users?.map((item) => item.user_key)
                );
              }}
            >
              Send Message to All ({dataResult.data?.totalCount})
            </div>
          </div>

          <div className="h-[1px] bg-borderLight my-4" />

          <div className="">
            <div
              className="inline-block text-link cursor-pointer"
              onClick={() => {
                sendMessages(selectedUserIdArr);
              }}
            >
              Send Message to Selected ({selectedUserIdArr.length})
            </div>
          </div>

          <div className="mt-4 self-stretch h-[250px] max-h-[250px] overflow-auto">
            {dataResult.data?.users?.map((item, index) => (
              <div key={item.user_key} className={classNames("")}>
                <div
                  className="grid py-2 items-center"
                  style={{ gridTemplateColumns: "50px 150px 1fr" }}
                >
                  <div>
                    <input
                      type="checkbox"
                      checked={!!selectedUserIdMap[item.user_key]}
                      onChange={(e) => {
                        const newIds = _.clone(selectedUserIdMap);
                        newIds[item.user_key] = e.target.checked;
                        setSelectedUserIdMap(newIds);
                      }}
                    />
                  </div>

                  <div className={classNames("text-[14px]", "text-text3")}>
                    {item.user_key}
                  </div>

                  <div className={classNames("text-text2 text-[14px]")}>
                    {item.username}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LoadingContainer>
    </ReactModal>
  );
};
