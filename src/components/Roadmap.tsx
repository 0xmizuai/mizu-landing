import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="flex flex-col items-stretch relative pb-[150px] md:pb-[200px] lg:pb-[250px] xl:pb-[250px] 2xl:pb-[300px]"
    >
      <div className="-z-1 panel-bg-img absolute right-0 -top-[35px] md:-top-[35px] lg:-top-[50px] 2xl:-top-[80px]">
        <Image src="/images/panel_bg4.png" layout="fill" alt="icon" />
      </div>

      <div
        className={classNames(
          "self-center text-text2 mt-[105px]",
          "mt-[45px] md:mt-[75px] 2xl:mt-[105px]",
          "panel-title",

          semiBoldFont.className
        )}
      >
        Roadmap
      </div>

      <div
        className="mt-10 mx-5 items-stretch justify-center h-[650px] md:hidden grid"
        style={{
          gridTemplateColumns: "1fr 2px 1fr",
        }}
      >
        <div className="pt-5 flex flex-col items-end">
          <div className="flex-1 flex justify-end">
            <div className="w-[70px] h-[25px] relative rotate-180">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>

          <div className="mr-3 flex-1 flex flex-col items-end">
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
                August 2024
              </div>
            </div>

            <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug text-end">
              Release the testnet for the MIZU data network, featuring
              capabilities for data hosting and data pre-processing
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="w-[70px] h-[25px] relative rotate-180">
              <Image
                src="/images/roadmap_indicator_h.svg"
                layout="fill"
                alt="icon"
              />
            </div>
          </div>

          <div className="mr-3 flex-1 flex flex-col items-end">
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
                Q1 2025
              </div>
            </div>

            <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug text-end">
              Focus on ecosystem development, fostering the creation of AI
              applications from the tailored datasets created from MIZU AI
              data network and supporting developers in utilizing the
              platform effectively
            </div>
          </div>
        </div>

        <div className="w-[2px] bg-[#898989]" />

        <div className="pt-5 flex flex-col">
          <div className="ml-3 flex-1 flex flex-col items-start">
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
                July 2024
              </div>
            </div>

            <div className="mt-2 max-w-[200px] text-[#898989] text-[12px] leading-snug">
              Launch the MIZU edge network and import initial open-source
              datasets into the MIZU data network
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

          <div className="ml-3 flex-1 ">
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
                Q4 2024
              </div>
            </div>

            <div className="mt-2 text-[#898989] text-[12px] leading-snug">
              Official launch of the mainnet
              <br /> and Token Generation Event (TGE), <br />
              marking the full deployment and <br />
              operational launch of the MIZU data network
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
        <div className="mt-[110px] pl-[100px] 2xl:pl-[300px] md:content-wrapper grid grid-cols-4 justify-between items-end">
          <div className="w-[32px] h-[96px] relative">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>

          <div className="mb-3">
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
                August 2024
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug  pr-5">
              Release the testnet for the MIZU data network, featuring
              capabilities for data hosting and data pre-processing
            </div>
          </div>

          <div className="w-[32px] h-[96px] relative">
            <Image
              src="/images/roadmap_indicator.svg"
              layout="fill"
              alt="icon"
            />
          </div>

          <div className="mb-3 ">
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
                Q1 2025
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug   pr-5">
              Focus on ecosystem development, fostering the creation of AI
              applications directly from the data repository and supporting
              developers in utilizing the platform effectively
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
                July 2024
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug   pr-5">
              Launch the MIZU data repository
              <br /> and import initial open-source datasets into the MIZU data
              network
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
                Q4 2024
              </div>
            </div>

            <div className="mt-4 text-[#898989] text-[14px] leading-snug   pr-5">
              Official launch of the mainnet and Token Generation Event (TGE),
              marking the full deployment and operational launch of the MIZU
              data network
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
