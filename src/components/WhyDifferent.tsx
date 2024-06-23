import { semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";

export const WhyDifferent = () => {
  return (
    <div className="flex flex-col items-center h-[300px]">
      <div
        className={classNames(
          "text-text2",
          "pt-[45px] md:pt-[75px] 2xl:mt-[105px]",
          "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
          semiBoldFont.className
        )}
      >
        Why Is MIZU Different?
      </div>
    </div>
  );
};
