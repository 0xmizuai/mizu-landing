"use client";

import { semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Lottie from "lottie-react";
import Image from "next/image";
import applicationDrivenData from "public/lotties/application_driven.json";
import dataCentricData from "public/lotties/data_centric.json";
import openSourceData from "public/lotties/open_source.json";

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
            "z-10 pt-[125px] md:pt-[65px] 2xl:mt-[85px]",
            "panel-title",
            semiBoldFont.className
          )}
        >
          Why is MIZU Different?
        </div>

        <div
          className={classNames(
            " mt-[40px] md:pt-[55px] 2xl:mt-[70px] relative",
            "ml-[10px] 2xl:ml-[300px]",
            "w-[350px] h-[220px] md:w-[550px] md:h-[380px] xl:w-[750px] xl:h-[480px] 2xl:w-[860px] 2xl:h-[580px]"
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

          <div className="ml-10 md:ml-0 mr-5 md:mr-10 lg:mr-[120px] xl:mr-[150px] 2xl:mr-[150px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black z-10 relative  ",
                "panel-title",
                semiBoldFont.className
              )}
            >
              Hyperscale
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[12px] md:text-[14px] xl:text-[18px] leading-tight"
              )}
            >
              While traditional cloud services offer scalability, MIZU's Data
              Decentralized Physical Infrastructure Network (DePIN) delivers
              true hyperscale capabilities. By leveraging our innovative data
              DePIN, we can seamlessly merge and host vast amounts of data at an
              exceptionally low cost. This groundbreaking approach empowers any
              data provider to effortlessly contribute to the MIZU data network.
              Simply by running a MIZU data node and importing their data,
              providers can become part of this expansive ecosystem, pushing the
              boundaries of data scale and accessibility.
            </div>
          </div>

          <div className="mt-[0px] md:-mt-[0px] 2xl:-mt-[30px] w-[110px] h-[110px] min-w-[110px] md:min-w-[170px] lg:min-w-[200px] xl:min-w-[260px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] relative">
            {/* <Image src="/images/open_source.svg" alt="icon" layout="fill" /> */}
            <Lottie
              animationData={openSourceData}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FAF3B8] panel">
        <div className="panel-content content-wrapper items-end md:items-center">
          <div
            className={classNames(
              "mt-[20px] md:mt-0 relative",
              "w-[110px] h-[110px] min-w-[110px] md:min-w-[170px] lg:min-w-[200px] xl:min-w-[260px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] "
            )}
          >
            {/* <Image
              src="/images/application_driven.svg"
              alt="icon"
              layout="fill"
            /> */}

            <Lottie
              animationData={applicationDrivenData}
              loop={true}
              style={{ width: "100%", height: "100" }}
            />
          </div>

          <div className="mt-5 md:mt-5 ml-6 md:ml-10 lg:ml-[120px] xl:ml-[150px] 2xl:ml-[150px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black md:text-end",
                "panel-title",
                semiBoldFont.className
              )}
            >
              Incentivized
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[12px] md:text-[14px] xl:text-[18px] leading-tight md:text-end"
              )}
            >
              Data providers are incentivized through a comprehensive
              three-metric system. The first metric, new data imported,
              encourages continuous data growth and fresh inputs. The second,
              total data hosted, rewards the scale and breadth of data
              maintained. The third, data query frequency, prioritizes
              high-quality, relevant data that meets user needs. This balanced
              approach optimizes for data growth, scale, and quality
              simultaneously, ensuring a robust and valuable data ecosystem.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E6FEC7] panel">
        <div className="panel-content content-wrapper">
          <div className="mr-5 md:mr-10 lg:mr-14 xl:mr-[100px] 2xl:mr-[120px] lg:w-[420px] lg:max-w-[420px] xl:w-[620px] xl:max-w-[620px]">
            <div
              className={classNames(
                "text-black relative mt-5 md:mt-6",
                "panel-title",
                semiBoldFont.className
              )}
            >
              AI-ready
            </div>

            <div
              className={classNames(
                "mt-4 xl:mt-6 text-[#012626] text-[12px] md:text-[14px] xl:text-[18px] leading-tight"
              )}
            >
              All data integrated into the MIZU data network undergoes
              comprehensive pre-processing, including precise data tagging and
              quality refinement. This processed data is then stored using a
              standardized schema and made accessible through a unified query
              interface. This streamlined approach empowers AI developers to
              effortlessly build customized datasets tailored to their specific
              needs.
            </div>
          </div>

          <div
            className={classNames(
              "mt-[20px] md:-mt-[0px] 2xl:-mt-[30px] relative",
              "w-[110px] h-[110px] min-w-[110px] md:min-w-[170px] lg:min-w-[200px] xl:min-w-[260px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] "
            )}
          >
            {/* <Image src="/images/data_centric.svg" alt="icon" layout="fill" /> */}
            <Lottie
              animationData={dataCentricData}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
