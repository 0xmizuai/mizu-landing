import { semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";

export const WhyDifferent = () => {
  return (
    <div>
      <div className="flex flex-col items-center relative">
        <div className="w-full h-[400px] md:w-[768px] md:h-[700px] absolute right-0 top-0">
          <Image src="/images/glow2.svg" layout="fill" alt="icon" />
        </div>

        <div className="z-10 panel-bg-img absolute right-0 -top-[10px]">
          <Image src="/images/panel_bg2.svg" layout="fill" alt="icon" />
        </div>

        <div
          className={classNames(
            "text-text2",
            "z-10 pt-[45px] md:pt-[65px] 2xl:mt-[85px]",
            "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[40px]",
            semiBoldFont.className
          )}
        >
          Why Is MIZU Different?
        </div>

        <div
          className={classNames(
            " mt-[40px] md:pt-[55px] 2xl:mt-[70px]  relative",
            "ml-[10px] 2xl:ml-[300px]",
            "w-[400px] h-[250px] md:w-[550px] md:h-[380px] xl:w-[750px] xl:h-[480px] 2xl:w-[860px] 2xl:h-[580px]"
          )}
        >
          <Image
            src="/images/why_different.svg"
            layout="fill"
            alt="icon"
            priority
          />
        </div>
      </div>

      <div className="bg-[#D7F8FF] panel mt-20">
        <div className="panel-content content-wrapper">
          <div className="-z-1 panel-bg-img absolute left-0 -top-[20px] md:-top-[25px] lg:-top-[35px] 2xl:-top-[40px]">
            <Image src="/images/panel_bg3.svg" layout="fill" alt="icon" />
          </div>

          <div className="mr-5 md:mr-10 lg:mr-[120px] xl:mr-[150px] 2xl:mr-[150px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black z-10 relative mt-16 md:mt-10",
                "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[40px]",
                semiBoldFont.className
              )}
            >
              Open Source
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[16px] md:text-[16px] xl:text-[18px] leading-normal"
              )}
            >
              Current blockchain systems require node synchronization at the 10
              minutes level, while operates at the 500ms level
            </div>
          </div>

          <div className="mt-[20px] md:-mt-[0px] 2xl:-mt-[30px] w-[120px] h-[140px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[210px] md:w-[140px] md:h-[170px] lg:w-[160px] lg:h-[200px] xl:w-[210px] xl:h-[260px] relative">
            <Image src="/images/open_source.svg" alt="icon" layout="fill" />
          </div>
        </div>
      </div>

      <div className="bg-[#FAF3B8] panel">
        <div className="panel-content content-wrapper items-end md:items-center">
          <div className="mt-[20px] md:mt-0 w-[120px] h-[110px] md:min-w-[140px] lg:min-w-[160px] xl:min-w-[235px] md:w-[140px] md:h-[130px] lg:w-[160px] lg:h-[150px] xl:w-[235px] xl:h-[215px] relative">
            <Image
              src="/images/application_driven.svg"
              alt="icon"
              layout="fill"
            />
          </div>

          <div className="mt-5 md:mt-5 ml-0 md:ml-10 lg:ml-[120px] xl:ml-[150px] 2xl:ml-[150px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black text-end",
                "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[40px]",
                semiBoldFont.className
              )}
            >
              Application Driven
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[16px] md:text-[16px] xl:text-[18px] leading-normal text-end"
              )}
            >
              Current blockchain systems require node synchronization at the 10
              minutes level, while operates at the 500ms level
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E6FEC7] panel">
        <div className="panel-content content-wrapper">
          <div className="mr-5 md:mr-10 lg:mr-14 xl:mr-[100px] 2xl:mr-[120px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black z-20 relative mt-5 md:mt-6",
                "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[40px]",
                semiBoldFont.className
              )}
            >
              Data Centric
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[16px] md:text-[16px] xl:text-[18px] leading-normal"
              )}
            >
              Current blockchain systems require node synchronization at the 10
              minutes level, while operates at the 500ms level
            </div>
          </div>

          <div className="mt-[20px] md:-mt-[0px] 2xl:-mt-[30px] w-[150px] h-[100px] md:min-w-[180px] lg:min-w-[200px] xl:min-w-[230px] md:w-[180px] md:h-[160px] lg:w-[200px] lg:h-[150px] xl:w-[230px] xl:h-[170px] relative">
            <Image src="/images/data_centric.svg" alt="icon" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};
