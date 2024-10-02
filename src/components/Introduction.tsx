import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import introduction from "public/images/introduction.svg";
import introductionSmall from "public/images/introduction_small.svg";

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

        <div
          className={classNames(
            "flex flex-col md:flex-row md:items-start",
            "justify-start text-sm",
            "px-[20px] md:px-[30px] lg:px-[40px] 2xl:px-[50px]",
            "py-[30px] md:py-[30px] lg:py-[40px] xl:py-[50px] 2xl:py-[65px]",
            "md:content-wrapper",
            // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]",
            "border border-white"
          )}
        >
          <div className="mt-0 md:mt-5 flex flex-col items-start mr-0 md:mr-[10px] xl:mr-[70px]">
            <div
              className={classNames(
                "text-[32px] leading-tight text-text1",
                "text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]"
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
                "mt-[20px] lg:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text1 text-start"
              )}
            >
              Shape the future of AI with us
            </div>

            <div className="mt-[45px] lg:mt-[55px] flex flex-col md:flex-row items-start md:items-center">
              {/* <Link href={"https://docs.mizu.global/overview"} target="_blank">
                <div
                  className={classNames(
                    "bg-lightButtonBg rounded-lg w-[210px] lg:w-[210px] py-[14px] cursor-pointer text-[16px] lg:text-xl text-black leading-tight flex justify-center",
                    boldFont.className
                  )}
                >
                  Developer Resources
                </div>
              </Link> */}

              <Link href="https://docs.mizu.global/overview" target="_blank">
                <div
                  className={classNames(
                    "primary-button text-textBlack text-[16px] md:text-[20px] lg:text-[24px] px-[12px] lg:px-[24px] xl:px-[33px] h-[44px] md:h-[50px] lg:h-[80px]",
                    semiBoldFont.className
                  )}
                >
                  Developer Resources
                </div>
              </Link>

              <Link href={"https://t.me/mizuai_bot"} target="_blank">
                <div
                  className={classNames(
                    "mt-6 md:mt-0 md:ml-8 stroke-button text-textBlack text-[16px] md:text-[20px] lg:text-[24px] px-[12px]  lg:px-[24px] xl:px-[33px] h-[44px] md:h-[50px] lg:h-[80px]"
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
              "relative self-start mt-8 lg:mt-0",
              "w-[150px] min-w-[150px]",
              "md:w-[160px] md:min-w-[160px]",
              "lg:w-[190px] lg:min-w-[190px]",
              "xl:w-[238px] xl:min-w-[238px]"
            )}
            alt="logo"
            priority
          />

          <Image
            src={introductionSmall}
            className={classNames(
              "md:hidden",
              "relative self-center mt-8 lg:mt-0",
              "w-[150px] min-w-[150px]"
            )}
            alt="logo"
            priority
          />
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
