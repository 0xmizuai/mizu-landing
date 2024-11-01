import { Introduction } from "@/components/Introduction";
import { MizuDataset } from "@/components/MizuDataset";
import { Partnership } from "@/components/Partnership";
import { Roadmap } from "@/components/RoadmapV2";
import { Whatis } from "@/components/Whatis";
import { WhyUnique } from "@/components/WhyUnique";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MIZU Home",
  description: "The DePIN for Hyperscale AI Dataset",
};

export default function Home() {
  return (
    <main className="relative min-h-screen snap-mandatory snap-y">
      <Introduction />

      <Partnership />

      <Whatis />

      <MizuDataset />

      <WhyUnique />

      <Roadmap />

      {/* <div className={classNames("panel1 bg-[#012626]")}>
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
              What is MIZU?
            </div>

            <div
              className={classNames(
                "mt-14 md:mt-14 xl:mt-12 text-white text-[16px] md:text-[16px] xl:text-[18px] leading-normal"
              )}
            >
              MIZU is the pioneering DePIN solution for hyperscale AI datasets.
              By simply running a MIZU data node, any data holder can
              effortlessly join our ecosystem, securely sharing their valuable
              information. Our innovative network leverages edge computing for
              comprehensive data pre-processing, ensuring exceptional data
              quality and integrity. Combined with our standardized query
              interface, MIZU offers easily accessible and low-risk data
              resources to the AI community, empowering developers to innovate
              and build a wide range of AI solutions.
            </div>
          </div>


          <div className="mt-[48px] md:-mt-[0px] 2xl:-mt-[30px] w-[325px] h-[255px] md:min-w-[325px] lg:min-w-[350px] xl:min-w-[405px] md:w-325px] md:h-[255px] lg:w-[350px] lg:h-[280px] xl:w-[485px] xl:h-[355px] relative">
            <Image src="/images/what_is_mizu.svg" alt="icon" layout="fill" />
          </div>
        </div>
      </div>
      <div id="why-different" className="h-[1px]" /> */}

      {/* <WhyDifferent /> */}
    </main>
  );
}
