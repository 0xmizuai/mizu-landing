"use client";

import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import introduction from "public/images/introduction.gif";
import introductionSmall from "public/images/introduction_small.svg";
import heroSection from "public/lotties/hero-section/data.json";

export const Introduction = () => {
  return (
    <div
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-t border-t-white border-b border-b-white"
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
            "md:content-wrapper"
            // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]"
          )}
        ></div>

        <div className="crossed-left"></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className=""></div>

        <div className="p-2 md:p-3 border border-white">
          <div
            className={classNames(
              "flex flex-col md:flex-row md:items-center",
              "justify-center text-sm",
              "px-[20px] md:px-[30px] lg:px-[40px] 2xl:px-[50px]",
              "py-[30px] md:py-[30px] lg:py-[40px] xl:py-[50px] 2xl:py-[65px]",
              "md:content-wrapper",
              // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]",
              "border border-white"
            )}
          >
            <div className="flex flex-col items-start mr-0 ">
              <div
                className={classNames(
                  "leading-tight text-text1",
                  "text-start text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[55px]"
                )}
              >
                The DePIN for
                <span className={classNames("", boldFont.className)}>
                  {" "}
                  Hyperscale
                </span>
                <div className="md:hidden" />
                <span className="md:ml-2">AI Dataset</span>
              </div>

              <div
                className={classNames(
                  "mt-[20px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text1 text-start"
                )}
              >
                Shape the future of AI with us
              </div>

              <div className="mt-[36px] lg:mt-[55px] flex flex-col lg:flex-row items-start lg:items-center">
                <Link href="https://docs.mizu.global/overview" target="_blank">
                  <div
                    className={classNames(
                      "primary-button text-textBlack text-[16px] md:text-[18px] xl:text-[24px] px-[12px] lg:px-[24px] xl:px-[33px] h-[36px] md:h-[40px] lg:h-[50px] xl:h-[60px] 2xl:h-[70px]",
                      semiBoldFont.className
                    )}
                  >
                    Developer Resources
                  </div>
                </Link>

                <Link href={"https://t.me/mizuai_bot"} target="_blank">
                  <div
                    className={classNames(
                      "mt-6 lg:mt-0 lg:ml-8 stroke-button text-textBlack text-[16px] md:text-[18px] xl:text-[24px] px-[12px]  lg:px-[24px] xl:px-[33px] h-[36px] md:h-[40px] lg:h-[50px] xl:h-[60px] 2xl:h-[70px]"
                    )}
                  >
                    Telegram Bot
                  </div>
                </Link>
              </div>
            </div>

            <Image
              src={introduction}
              className={classNames(
                "hidden md:block",
                "relative self-start mt-8 lg:mt-4",
                "md:ml-[-10px] lg:ml-[-10px] xl:ml-[-10px] 2xl:ml-[-100px]",
                "w-[200px] min-w-[200px]",
                "md:w-[260px] md:min-w-[260px]",
                "lg:w-[320px] lg:min-w-[320px]",
                "xl:w-[400px] xl:min-w-[400px]",
                "2xl:w-[490px] 2xl:min-w-[490px]",
                "-z-10"
              )}
              alt="logo"
              priority
            />

            <Image
              src={introduction}
              className={classNames(
                "md:hidden",
                "relative self-center mt-8 lg:mt-0",
                "w-full max-w-[300px]",
                "-z-10"
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

        <div
          className={classNames(
            "md:content-wrapper"
            // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]"
          )}
        ></div>

        <div className="crossed-right"></div>
      </div>
    </div>
  );
};
