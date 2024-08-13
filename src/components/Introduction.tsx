import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
  return (
    <div
      className={classNames(
        "z-10 flex flex-col items-center",
        "bg-gradient-to-b from-white to-[#ECFFFF]"
      )}
    >
      <div
        className={classNames(
          "pb-16 md:pb-10 items-stretch justify-between text-sm ",
          "w-full px-5 pt-[35px] flex flex-col lg:flex-row lg:items-center",
          "md:content-wrapper md:pl-[70px] md:pr-[50px] md:pt-[50px] md:pb-[70px]",
          "lg:pl-[100px] lg:pr-[70px] lg:pt-[70px] xl:pb-[100px]",
          "2xl:pl-[170px] 2xl:pr-[120px] 2xl:pt-[90px] 2xl:pb-[127px]"
        )}
      >
        <div className="flex flex-col items-center md:items-start mr-0 md:mr-[10px] xl:mr-[70px] 2xl:mr-[100px]">
          <div
            className={classNames(
              "relative block md:hidden",
              "w-[225px] h-[225px] mb-[20px]"
            )}
          >
            <Image
              src="/videos/home_header.gif"
              layout="fill"
              alt="logo"
              priority
            />
          </div>

          <div
            className={classNames(
              "text-[32px] leading-tight text-black",
              "text-center md:text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
              boldFont.className
            )}
          >
            We build the largest{" "}
            <span className="text-primary">open source datasets</span>
            <div className="md:hidden" />
            <span className="md:ml-2">in the world</span>
          </div>

          <div
            className={classNames(
              "mt-[20px] lg:mt-[40px] text-[18px] leading-snug text-text2 text-center md:text-start"
            )}
          >
            Shape the future of AI with us
          </div>

          <div className="mt-[65px] lg:mt-[40px] flex flex-col md:flex-row items-start md:items-center">
            <Link href={"https://docs.mizu.global/overview"} target="_blank">
              <div
                className={classNames(
                  "bg-lightButtonBg rounded-lg w-[210px] lg:w-[210px] py-[14px] cursor-pointer text-[16px] lg:text-xl text-black leading-tight flex justify-center",
                  boldFont.className
                )}
              >
                Developer Resources
              </div>
            </Link>

            <Link href={"https://t.me/mizuai_bot"} target="_blank">
              <div
                className={classNames(
                  "mt-4 md:mt-0 md:ml-7 bg-lightButtonBg rounded-lg w-[210px] lg:w-[210px] py-[14px] cursor-pointer text-[16px] lg:text-xl text-black leading-tight flex justify-center",
                  boldFont.className
                )}
              >
                Telegram Bot
              </div>
            </Link>
          </div>
        </div>

        <div
          className={classNames(
            "relative self-start mt-8 lg:mt-0",
            "hidden md:block",
            "md:w-[265px] md:h-[265px] md:min-w-[265px]",
            "lg:w-[335px] lg:h-[335px] lg:min-w-[335px]",
            "xl:w-[405px] xl:h-[405px] xl:min-w-[405px]"
          )}
        >
          <Image
            src="/videos/home_header.gif"
            layout="fill"
            alt="logo"
            priority
          />
        </div>
      </div>
    </div>
  );
};
