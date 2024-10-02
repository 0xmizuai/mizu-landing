import { boldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import roadmapVertical from "public/images/roadmap_vertical.png";
import roadmap from "public/images/roadmap.svg";

export const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-b border-b-white"
      )}
    >
      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-right"></div>

        <div
          className={classNames(
            "md:content-wrapper",
            "border-r border-r-white"
          )}
        ></div>

        <div className=""></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className=""></div>

        <div
          className={classNames(
            "border border-white",
            "pt-[56px] md:pt-[56px] lg:pt-[56px] xl:pt-[56px] 2xl:pt-[65px]",
            "md:pb-[32px] lg:pt-[32px] xl:pt-[32px] 2xl:pt-[50px]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col items-center",
              "justify-start text-sm",
              "px-[0] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
              "md:content-wrapper"
            )}
          >
            <div className="mx-[20px] md:mx-0 flex flex-col items-center">
              <div
                className={classNames(
                  "text-[32px] leading-tight text-text1",
                  "text-center md:text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
                  boldFont.className
                )}
              >
                Roadmap
              </div>
            </div>

            <Image
              src={roadmapVertical}
              className={classNames(
                "mt-[56px] md:hidden",
                "relative self-stretch",
                "w-full"
              )}
              alt="logo"
              priority
            />

            <Image
              src={roadmap}
              className={classNames(
                "hidden md:block",
                "mt-[56px] md:mt-[64px] lg:mt-[64px] xl:mt-[64px]",
                "relative self-stretch",
                "w-full"
              )}
              alt="logo"
              priority
            />
          </div>
        </div>

        <div className=""></div>
      </div>

      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-left"></div>

        <div className={classNames("md:content-wrapper")}></div>

        <div className="crossed-right"></div>
      </div>
    </div>
  );
};
