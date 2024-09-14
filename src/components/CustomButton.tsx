"use client";
import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import { CircularLoading } from "./CircularLoading";

type ButtonProps = React.PropsWithChildren<{
  disabled?: boolean;
  loading?: boolean;
  type?: "primary" | "secondary" | "stroke";
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
  isRegularFont?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}>;

export const CustomButton = (props: ButtonProps) => {
  const textColor = "#ffffff";

  return (
    <div className="relative">
      <div className="absolute rounded-[8px] left-0 right-0 top-0 bottom-0 bg-buttonBorder"></div>

      <div
        className={classNames(
          props.disabled
            ? props.type === "stroke"
              ? "text-color-text1 opacity-70 bg-white"
              : "text-color-text1 bg-bgDisabled opacity-70"
            : props.type === "primary"
            ? props.loading
              ? "text-textButton bg-lightButtonBg "
              : "text-textButton bg-lightButtonBg hover:bg-lightButtonBg/70 active:bg-lightButtonBg"
            : props.type === "stroke"
            ? props.loading
              ? "text-color-text1 bg-white"
              : "text-color-text1 active:opacity-70 hover:bg-color-bgHover bg-white"
            : "text-textButton bg-lightButtonBg hover:bg-lightButtonBg/70 active:bg-lightButtonBg",
          "border-[1px] border-buttonBorder",
          { "opacity-80": props.loading },
          props.className || "",
          props.isRegularFont ? "" : semiBoldFont.className,
          "flex items-center justify-center rounded-[8px] overflow-hidden select-none",
          "relative z-10",
          "translate-x-[-2px] translate-y-[-2px]",
          props.disabled || props.loading
            ? "cursor-default"
            : "cursor-pointer active:translate-x-[0px] active:translate-y-[0px]"
        )}
        style={{
          ...(props.width ? { width: props.width } : {}),
          // color: textColor,
          height: props.height || "36px",
          fontSize: props.fontSize || "16px",
          transition: "background-color 250ms",
          borderRadius: "8px",
        }}
        onClick={() => {
          if (!props.disabled && !props.loading) {
            props.onClick && props.onClick();
          }
        }}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {props.loading && (
          <div
            style={
              {
                // color: textColor,
              }
            }
          >
            <CircularLoading color="inherit" size={props.fontSize || "16px"} />
          </div>
        )}

        <div
          className={classNames("flex items-center", { "ml-1": props.loading })}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
