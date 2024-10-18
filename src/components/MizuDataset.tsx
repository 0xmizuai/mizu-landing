import { boldFont, lightFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import detail from "public/images/dataset/detail.svg";
import datasetExplain from "public/images/dataset/dataset_explain.svg";

export const MizuDataset = () => {
  return (
    <div
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-t border-t-white"
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

        <div className={classNames("md:content-wrapper")}></div>

        <div className=""></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className=""></div>

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
            <div className="mx-[20px] md:mx-0 flex flex-col items-start md:items-center">
              <div
                className={classNames(
                  "text-[32px] leading-tight text-text1",
                  "title-text",
                  boldFont.className
                )}
              >
                The Community-built AI Dataset
              </div>

              <div className="mt-[36px] md:mt-[45px] lg:mt-[56px] flex flex-col xl:flex-row items-center">
                <Image
                  src={datasetExplain}
                  className={classNames(
                    "relative self-center md:self-center",
                    "w-full px-3 md:px-0",
                    "max-w-[270px] md:max-w-[405px]",
                    "md:w-[360px] md:min-w-[360px]",
                    "lg:w-[360px] lg:min-w-[360px]",
                    "xl:w-[405px] xl:min-w-[405px]"
                  )}
                  alt="logo"
                  priority
                />

                <div
                  className={classNames(
                    "mt-[16px] xl:mt-0 xl:ml-[30px] 2xl:ml-[40px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                    lightFont.className
                  )}
                >
                  Data is the currency of AI, but existing datasets are
                  fragmented, outdated, and limited in scale. MIZU addresses
                  this by aggregating data from diverse sources using DePIN to
                  build a comprehensive, fresh, and large-scale open-source
                  dataset that's easily accessible and queryable by AI
                  developers.
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

        <div className="border-t border-t-white"></div>
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

        <div className=""></div>
      </div>
    </div>
  );
};
