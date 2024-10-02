import { boldFont, lightFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import mizuBot from "public/images/whatis/mizu_bot.png";
import detail from "public/images/largest/detail.svg";
import whatis from "public/images/whatis/whatis.svg";
import datasetExplain from "public/images/largest/dataset_explain.svg";

export const LargestDataset = () => {
  return (
    <div
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
        <div className="border-b border-b-white"></div>

        <div
          className={classNames(
            "border border-white",
            "py-[55px] md:py-[65px] lg:py-[80px] xl:py-[100px] 2xl:py-[120px]"
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
                World’s largest commuity-built datasets
              </div>

              <div className="mt-[36px] md:mt-[45px] lg:mt-[56px] flex flex-col md:flex-row items-center">
                <Image
                  src={datasetExplain}
                  className={classNames(
                    "relative self-start",
                    "w-full",
                    "md:w-[300px] md:min-w-[300px]",
                    "lg:w-[360px] lg:min-w-[360px]",
                    "xl:w-[405px] xl:min-w-[405px]"
                  )}
                  alt="logo"
                  priority
                />

                <div
                  className={classNames(
                    "mt-[36px] md:mt-0 md:ml-[30px] lg:ml-[40px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                    lightFont.className
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur. Amet varius sed morbi
                  et pellentesque sed sem mauris elit. Id erat augue suspendisse
                  suspendisse viverra accumsan.
                </div>
              </div>
            </div>

            <Image
              src={detail}
              className={classNames(
                "mt-[56px] md:mt-[36px] lg:mt-[40px] xl:mt-[44px]",
                "relative self-stretch",
                "w-full",
                "border-t border-t-white border-b border-b-white",
                "md:border md:border-white"
              )}
              alt="logo"
              priority
            />
          </div>
        </div>

        <div className="border-b border-b-white"></div>
      </div>

      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className=""></div>

        <div className={classNames("md:content-wrapper")}></div>

        <div className=""></div>
      </div>
    </div>
  );
};
