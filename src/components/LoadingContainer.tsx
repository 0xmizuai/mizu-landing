"use client";

import classNames from "classnames";
import Image from "next/image";
import { CircularLoading } from "./CircularLoading";

type ThemedTextProps = React.PropsWithChildren<{
  loading?: boolean;
  showEmpty?: boolean;
  className?: string;
  spinnerSize?: string;
  emptySize?: string;
  emptyPlaceholder?: string;
}>;

export const LoadingContainer = (props: ThemedTextProps) => {
  const {
    loading,
    className,
    spinnerSize,
    emptySize,
    showEmpty,
    emptyPlaceholder,
  } = props;

  return (
    <div className={classNames("relative", className || "")}>
      {props.children}

      <div
        className={classNames(
          "absolute left-0 right-0 top-0 bottom-0  items-center justify-center",
          showEmpty ? "flex" : "hidden"
        )}
      >
        <div className="flex flex-col items-center">
          {/* <Icomoon
            icon="empty-content"
            color={darkMode ? "#FFFFFF80" : "#898989"}
            size={emptySize || ".65rem"}
          /> */}

          <div className="mt-[.12rem] text-text3 text-[14px]">
            {emptyPlaceholder || "No results found yet"}
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "absolute left-0 top-0 right-0 bottom-0 bg-white items-center justify-center opacity-70",
          loading ? "flex" : "hidden"
        )}
      >
        <CircularLoading color="#37D8FA" size={props.spinnerSize || "30px"} />
      </div>
    </div>
  );
};
