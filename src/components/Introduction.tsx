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
        <div className="flex flex-col items-center md:items-start mr-0 md:mr-[20px] xl:mr-[100px] 2xl:mr-[150px]">
          <div
            className={classNames(
              "relative block md:hidden",
              "w-[150px] h-[175px] mb-[60px]"
            )}
          >
            <Image
              src="/images/logo_large.png"
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
            Introducing{" "}
            <span className="md:hidden">
              <span className="text-primary">MIZU</span>
              ,
              <br />
            </span>
            <span className="hidden md:inline mr-2">
              <span className="text-primary">MIZU</span>,
            </span>
            the first <br className="hidden md:inline" />
            <span className="text-primary">
              synthetic
              <br className="md:hidden" /> open data
            </span>{" "}
            layer.
          </div>

          <div
            className={classNames(
              "mt-[20px] lg:mt-[40px] text-[18px] leading-snug text-text2 text-center md:text-start"
            )}
          >
            We are pioneering the creation of the world's largest decentralized
            open-source data network to foster a vibrant future for open-source
            AI.
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

            <Link
              href={
                "https://docs.mizu.global/data-network/architecture#architecture"
              }
              target="_blank"
            >
              <div
                className={classNames(
                  "mt-4 md:mt-0 md:ml-7 bg-lightButtonBg rounded-lg w-[210px] lg:w-[210px] py-[14px] cursor-pointer text-[16px] lg:text-xl text-black leading-tight flex justify-center",
                  boldFont.className
                )}
              >
                System Deep Dive
              </div>
            </Link>
          </div>
        </div>

        <div
          className={classNames(
            "relative self-start mt-8 lg:mt-0",
            "hidden md:block",
            "md:w-[200px] md:h-[235px] md:min-w-[200px]",
            "lg:w-[250px] lg:h-[275px] lg:min-w-[250px]",
            "xl:w-[300px] xl:h-[345px] xl:min-w-[300px]"
          )}
        >
          <Image
            src="/images/logo_large.png"
            layout="fill"
            alt="logo"
            priority
          />
        </div>
      </div>
    </div>
  );
};
