import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";

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
          "pb-6 md:pb-10 items-stretch justify-between text-sm ",
          "w-full px-5 pt-[30px] flex flex-col lg:flex-row lg:items-center",
          "md:content-wrapper md:pl-[70px] md:pr-[50px] md:pt-[50px] md:pb-[70px]",
          "lg:pl-[100px] lg:pr-[70px] lg:pt-[70px] xl:pb-[100px]",
          "2xl:pl-[170px] 2xl:pr-[120px] 2xl:pt-[90px] 2xl:pb-[127px]"
        )}
      >
        <div>
          <div
            className={classNames(
              "text-[28px] leading-tight text-black",
              "md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
              semiBoldFont.className
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
            the first
            <br />
            <span className="text-primary">synthetic open data</span> layer.
          </div>

          <div
            className={classNames(
              "mt-[20px] lg:mt-[40px] text-[18px] leading-snug text-text2"
            )}
          >
            Mizu is here to build an open, collaborative, and permissionless
            data ecosystem that <br />
            empowers futureAI developers to create diverse AI applications
          </div>

          <div className="mt-[20px] lg:mt-[40px] flex flex-col md:flex-row items-start md:items-center">
            <div
              className={classNames(
                "bg-lightButtonBg rounded-lg px-6 py-4 cursor-pointer text-[12px] lg:text-xl text-black leading-tight",
                boldFont.className
              )}
            >
              Developer Resources
            </div>

            <div
              className={classNames(
                "mt-4 md:mt-0 md:ml-7 bg-lightButtonBg rounded-lg px-6 py-4 cursor-pointer text-[12px] lg:text-xl text-black leading-tight",
                boldFont.className
              )}
            >
              Read Our White Paper
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "relative self-start mt-8 lg:mt-0",
            "w-[150px] h-[175px]",
            "md:w-[200px] md:h-[235px]",
            "lg:w-[250px] lg:h-[275px]",
            "xl:w-[300px] xl:h-[345px]"
          )}
          id="partners"
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
