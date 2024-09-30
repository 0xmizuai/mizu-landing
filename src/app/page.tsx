import { Introduction } from "@/components/Introduction";
import { Roadmap } from "@/components/Roadmap";
import { WhyDifferent } from "@/components/WhyDifferent";
import { semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Lottie from "lottie-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MIZU Home",
  description: "The first decentralized open source data layer",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Introduction />

      <div
        id="partners"
        className="w-full py-8 lg:py-9 xl:py-12 bg-bgPage flex justify-center"
      >
        <div
          className={classNames(
            "w-full md:content-wrapper",
            "pl-[30px] pr-[30px]",
            "md:pl-[100px] md:pr-[70px]",
            "lg:pl-[130px] lg:pr-[90px]",
            "2xl:pl-[170px] 2xl:pr-[120px]",
            // "flex items-center justify-between flex-wrap"
            "grid gap-2 items-center justify-between grid-cols-auto3 md:grid-cols-auto6 lg:grid-cols-auto6 2xl:grid-cols-auto6"
          )}
        >
          <div className=" flex justify-center">
            <div className="w-[50px] h-[40px] lg:w-[92px] lg:h-[79px] relative">
              <Image
                src="/images/capital_icon3.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>

          <div className="ml-4 md:ml-0 flex justify-center">
            <div className="w-[80px] h-[18px] lg:w-[122px] lg:h-[29px] relative">
              <Image
                src="/images/capital_icon2.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="w-[40px] h-[19px] lg:w-[65px] lg:h-[30px] relative">
              <Image
                src="/images/capital_icon6.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="w-[40px] h-[15px] lg:w-[65px] lg:h-[22px] relative">
              <Image
                src="/images/capital_icon5.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>

          <div className="ml-4 md:ml-0 flex justify-center">
            <div className="w-[52px] h-[25px] lg:w-[82px] lg:h-[39px] relative">
              <Image
                src="/images/capital_icon1.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="w-[90px] h-[12px] lg:w-[159px] lg:h-[20px] relative">
              <Image
                src="/images/capital_icon4.png"
                layout="fill"
                alt="icon"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div id="what-is-MIZU" className={classNames("panel1 bg-[#012626]")}>
        <div className="panel1-content pb-16 md:pb-0 md:h-[465px]">
          <div className="z-10 panel-bg-img absolute left-0 top-[-0px]">
            <Image
              src="/images/home_bg1.svg"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div
            className={classNames(
              "pt-2 md:pt-4 xl:pt-[] w-[250px] max-w-[250px] md:w-[450px] md:max-w-[450px]",
              "mr-5 md:mr-10 lg:mr-[120px] xl:mr-[150px] 2xl:mr-[150px] "
            )}
          >
            <div
              className={classNames(
                "text-white",
                "z-10 relative mt-16 md:mt-0 panel-title text-end md:text-start",
                semiBoldFont.className
              )}
            >
              What Is MIZU?
            </div>

            <div
              className={classNames(
                "mt-14 md:mt-14 xl:mt-12 text-white text-[16px] md:text-[16px] xl:text-[18px] leading-normal"
              )}
            >
              MIZU aims to establish the world's largest decentralized
              open-source data network. We offer a platform featuring a data
              repository and decentralized processing network, promoting an
              open, collaborative and permission-less data ecosystem for both
              public and synthetic data. This setup enables AI developers to
              innovate and build various applications while supporting the
              development of fully open Large Language Models (LLMs) through
              easily accessible, low-risk data resources.
            </div>
          </div>

          {/* <div className="flex-1 flex mt-10 md:mt-14 -mr-[60px] md:flex overflow-hidden md:pl-[50px] xl:pl-[100px] 2xl:pl-[200px]">
            <LogoVectors />

            <LogoVectors />

            <LogoVectors />
          </div> */}

          <div className="mt-[48px] md:-mt-[0px] 2xl:-mt-[30px] w-[325px] h-[255px] md:min-w-[325px] lg:min-w-[350px] xl:min-w-[405px] md:w-325px] md:h-[255px] lg:w-[350px] lg:h-[280px] xl:w-[485px] xl:h-[355px] relative">
            <Image src="/images/what_is_mizu.svg" alt="icon" layout="fill" />
          </div>
        </div>
      </div>
      <div id="why-different" className="h-[1px]" />

      <WhyDifferent />

      <Roadmap />
    </main>
  );
}
