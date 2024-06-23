import { Introduction } from "@/components/Introduction";
import { LogoVectors } from "@/components/LogoVectors";
import { Roadmap } from "@/components/Roadmap";
import { WhyDifferent } from "@/components/WhyDifferent";
import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Introduction />

      <div className="w-full py-3 md:py-3 lg:py-5 bg-[#C3F4F4] flex justify-center">
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
          <div className="w-[52px] h-[22px] lg:w-[82px] lg:h-[39px] relative">
            <Image
              src="/images/capital_icon1.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div className="w-[70px] h-[19px] lg:w-[122px] lg:h-[29px] relative">
            <Image
              src="/images/capital_icon2.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div className="w-[50px] h-[40px] lg:w-[92px] lg:h-[79px] relative">
            <Image
              src="/images/capital_icon3.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div className="w-[90px] h-[12px] lg:w-[159px] lg:h-[24px] relative">
            <Image
              src="/images/capital_icon4.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div className="w-[40px] h-[15px] lg:w-[65px] lg:h-[22px] relative">
            <Image
              src="/images/capital_icon5.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>

          <div className="w-[40px] h-[19px] lg:w-[65px] lg:h-[30px] relative">
            <Image
              src="/images/capital_icon6.png"
              layout="fill"
              alt="icon"
              priority
            />
          </div>
        </div>
      </div>

      <div
        id="what-is-MIZU"
        className={classNames(
          "relative w-full pt-[105px] pb-[50px] md:pb-[75px] xl:pb-[100px] 2xl:pb-[125px] bg-[#012626] overflow-hidden",
          "flex flex-col md:flex-row justify-between"
        )}
      >
        <div className="z-10 w-[100px] h-[110px] 2xl:w-[220px] 2xl:h-[240px] absolute left-0 top-[-0px]">
          <Image src="/images/home_bg1.svg" layout="fill" alt="icon" priority />
        </div>

        <div className="ml-5 mr-5 md:w-[450px] md:mix-w-[450px] md:ml-[90px] lg:ml-[120px] xl:ml-[175px] 2xl:ml-[225px]">
          <div
            className={classNames(
              "text-white",
              "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
              semiBoldFont.className
            )}
          >
            What Is MIZU?
          </div>

          <div
            className={classNames(
              "mt-6 md:mt-10 xl:mt-12 text-white text-[16px] md:text-[16px] xl:text-[18px] leading-normal"
            )}
          >
            MIZU is the very first synthetic open data layer. Our mission is to
            build an open, collaborative, and permissionless data ecosystem that
            empowers AI developers to create diverse AI applications and
            supports fully open Large Language Models (LLMs) by providing
            public, risk-free data recipes.
          </div>
        </div>

        <div className="flex-1 flex mt-10 md:mt-14 -mr-[60px] md:flex overflow-hidden md:pl-[50px] xl:pl-[100px] 2xl:pl-[200px]">
          <LogoVectors />

          <LogoVectors />

          <LogoVectors />
        </div>
      </div>

      <div id="why-different" className="h-[1px]" />

      <WhyDifferent />

      <Roadmap />
    </main>
  );
}
