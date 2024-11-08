"use client";

import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import introduction from "public/images/introduction.gif";

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
            <div className="flex flex-col items-start mr-0 max-w-[635px]">
              <div
                className={classNames(
                  "leading-tight text-text1",
                  "text-start text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[48px]"
                )}
              >
                The DePIN for
                <span className={classNames("", boldFont.className)}>
                  {" "}
                  Hyperscale
                </span>
                <div className="md:hidden" />
                <span className="md:ml-2">AI Dataset.</span>
              </div>

              <div
                className={classNames(
                  "mt-[20px] lg:mt-[28px] text-[16px] md:text-[18px] lg:text-[24px] 2xl:text-[32px] leading-normal text-text1 text-start"
                )}
              >
                Shape the future of AI with us.
              </div>

              <div className="hidden md:flex mt-[24px] lg:mt-[40px] flex-col lg:flex-row items-start lg:items-center">
                <Link href="https://docs.mizu.global/overview" target="_blank">
                  <div
                    className={classNames(
                      "stroke-button text-[16px] md:text-[17px] xl:text-[18px] px-[12px] lg:px-[24px] xl:px-[30px] h-[32px] lg:h-[36px] 2xl:h-[48px]",
                      "hover:primary-button hover:text-textBlack",
                      semiBoldFont.className
                    )}
                  >
                    Developer Resources
                  </div>
                </Link>

                <Link href={"https://t.me/mizuai_bot"} target="_blank">
                  <div
                    className={classNames(
                      "mt-4 lg:mt-0 lg:ml-6 stroke-button text-textBlack text-[16px] md:text-[17px] xl:text-[18px] px-[12px] lg:px-[24px] xl:px-[30px] h-[32px] lg:h-[36px] 2xl:h-[48px]",
                      "hover:primary-button hover:text-textBlack"
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
                // "md:ml-[-10px] lg:ml-[-10px] xl:ml-[-10px] 2xl:ml-[-100px]",
                "w-[200px] min-w-[200px]",
                "md:w-[300px] md:min-w-[300px]",
                "lg:w-[380px] lg:min-w-[380px]",
                "xl:w-[450px] xl:min-w-[450px]",
                "2xl:w-[550px] 2xl:min-w-[550px]",
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

            <div className="flex md:hidden mt-[24px] lg:mt-[40px] flex-col lg:flex-row items-start lg:items-center">
              <Link href="https://docs.mizu.global/overview" target="_blank">
                <div
                  className={classNames(
                    "primary-button text-textBlack text-[16px] md:text-[17px] xl:text-[18px] px-[12px] lg:px-[24px] xl:px-[30px] h-[32px] lg:h-[36px] 2xl:h-[48px]",
                    semiBoldFont.className
                  )}
                >
                  Developer Resources
                </div>
              </Link>

              <Link href={"https://t.me/mizuai_bot"} target="_blank">
                <div
                  className={classNames(
                    "mt-4 lg:mt-0 lg:ml-6 stroke-button text-textBlack text-[16px] md:text-[17px] xl:text-[18px] px-[12px] lg:px-[24px] xl:px-[30px] h-[32px] lg:h-[36px] 2xl:h-[48px]",
                    "hover:primary-button hover:text-textBlack"
                  )}
                >
                  Telegram Bot
                </div>
              </Link>
            </div>
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
