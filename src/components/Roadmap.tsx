import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="flex flex-col items-stretch relative pb-[100px] md:pb-[120px] lg:pb-[150px] xl:pb-[200px] 2xl:pb-[300px]"
    >
      <div
        className={classNames(
          "self-center text-text2 mt-[105px]",
          "mt-[45px] md:mt-[75px] 2xl:mt-[105px]",
          "text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[60px]",

          semiBoldFont.className
        )}
      >
        Roadmap
      </div>

      <div className="mt-10 mx-5 flex items-stretch justify-center h-[500px] md:hidden">
        <div className="pt-5 mr-2 flex flex-col items-end">
          <div className="flex-1 flex justify-end">
            <div className="w-[70px] h-[25px] relative rotate-180">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>

          <div className="flex-1  flex flex-col items-end">
            <div className="flex items-center">
              <div className="w-[14px] h-[14px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[16px] text-black",
                  boldFont.className
                )}
              >
                2025 Q1
              </div>
            </div>

            <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug text-end">
              Decentralized prover network with all the node clients
            </div>
          </div>

          <div className="flex-1  flex justify-end">
            <div className="w-[70px] h-[25px] relative rotate-180">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>

          <div className="flex-1  flex flex-col items-end">
            <div className="flex items-center">
              <div className="w-[14px] h-[14px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[16px] text-black",
                  boldFont.className
                )}
              >
                2025 Q4
              </div>
            </div>

            <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug">
              Browse zkWASM prover
              <br /> by jusr opening
            </div>
          </div>
        </div>

        <div className="w-[4px] bg-[#898989]" />

        <div className="ml-2 pt-5 flex flex-col">
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-center">
              <div className="w-[14px] h-[14px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[16px] text-black",
                  boldFont.className
                )}
              >
                2024 Q3
              </div>
            </div>

            <div className="mt-2 max-w-[200px] text-[#898989] text-[12px] leading-snug">
              zkIndexing Demo for Uniswap V2 on Ethereum
            </div>
          </div>

          <div className="flex-1 flex justify-start">
            <div className="w-[70px] h-[25px] relative">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>

          <div className="flex-1 ">
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[18px] text-black",
                  boldFont.className
                )}
              >
                2025 Q3
              </div>
            </div>

            <div className="mt-2 text-[#898989] text-[12px] leading-snug">
              Specialized circuits further <br />
              accelerate 90% of <br />
              zkIndexing usage
            </div>
          </div>

          <div className="flex-1 ">
            <div className="w-[70px] h-[25px] relative">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mt-[110px] pl-[100px] 2xl:pl-[300px] md:content-wrapper grid grid-cols-4 justify-between">
          <div className="w-[32px] h-[96px] relative">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>

          <div>
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[18px] text-black",
                  boldFont.className
                )}
              >
                2025 Q1
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug">
              Decentralized prover network
              <br />
              with all the node clients
            </div>
          </div>

          <div className="w-[32px] h-[96px] relative">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>

          <div>
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[18px] text-black",
                  boldFont.className
                )}
              >
                2025 Q4
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug">
              Browse zkWASM prover
              <br />
              by jusr opening
            </div>
          </div>
        </div>

        <div className="self-stretch h-[4px] bg-[#898989]" />

        <div className="pl-[100px] 2xl:pl-[300px] md:content-wrapper grid grid-cols-4 justify-between">
          <div className="mt-6">
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[18px] text-black",
                  boldFont.className
                )}
              >
                2024 Q3
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug">
              zkIndexing Demo for
              <br />
              Uniswap V2 on Ethereum
            </div>
          </div>

          <div className="w-[32px] h-[96px] relative rotate-180">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <div className="w-[17px] h-[17px] relative">
                <Image src="/images/logo_blue.svg" layout="fill" alt="icon" />
              </div>

              <div
                className={classNames(
                  "ml-2 text-[18px] text-black",
                  boldFont.className
                )}
              >
                2025 Q3
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug">
              Specialized circuits further
              <br /> accelerate 90% of
              <br /> zkIndexing usage
            </div>
          </div>

          <div className="w-[32px] h-[96px] relative  rotate-180">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
