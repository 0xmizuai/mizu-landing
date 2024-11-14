import { boldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import roadmapVertical from "public/images/roadmap_vertical.png";
import roadmap from "public/images/roadmap.svg";

export const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-b border-b-white"
      )}
    >
      <div
        className={classNames(
          "h-[43px] xl:h-[50px] xl:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-right"></div>

        <div
          className={classNames(
            "xl:content-wrapper",
            "border-r border-r-white"
          )}
        ></div>

        <div className=""></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className=""></div>

        <div
          className={classNames(
            "border border-white",
            "pt-[56px] xl:pt-[56px] xl:pt-[56px] xl:pt-[56px] 2xl:pt-[65px]",
            "xl:pb-[32px] xl:pt-[32px] xl:pt-[32px] 2xl:pt-[50px]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col items-center",
              "justify-start text-sm",
              "px-[0] xl:px-[50px] xl:px-[80px] 2xl:px-[100px]",
              "xl:content-wrapper"
            )}
          >
            <div className="mx-[20px] xl:mx-0 flex flex-col items-center">
              <div
                className={classNames(
                  "leading-tight text-text1",
                  "text-center title-text",
                  boldFont.className
                )}
              >
                Roadmap
              </div>
            </div>

            <div
              className="mt-10 mx-5 items-stretch justify-center xl:hidden grid"
              style={{
                gridTemplateColumns: "1fr 2px 1fr",
              }}
            >
              <div className="pt-10 flex flex-col items-end">
                <div className="flex-1 flex justify-end">
                  <div className="w-[70px] h-[25px] relative rotate-180">
                    <Image
                      src="/images/roadmap_indicator_h.svg"
                      layout="fill"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[2px] bg-[#898989]" />

              <div className="pt-10 flex flex-col">
                <div className="mt-1 ml-3 flex-1 flex flex-col items-start">
                  <div className="flex items-center">
                    <div className="w-[14px] h-[14px] relative">
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[16px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage1
                    </div>
                  </div>

                  <div className="mt-2 max-w-[200px] text-[#898989] text-[12px] leading-snug">
                    Launch the MIZU edge network and import initial open-source
                    datasets into the MIZU data network
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mx-5 items-stretch justify-center xl:hidden grid"
              style={{
                gridTemplateColumns: "1fr 2px 1fr",
              }}
            >
              <div className="pt-10 mr-3 flex-1 flex flex-col items-end">
                <div className="mt-1 flex items-center">
                  <div className="w-[14px] h-[14px] relative">
                    <Image
                      src="/images/logo_icon.svg"
                      layout="fill"
                      alt="icon"
                    />
                  </div>

                  <div
                    className={classNames(
                      "ml-2 text-[16px] text-text1",
                      boldFont.className
                    )}
                  >
                    Stage2
                  </div>
                </div>

                <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug text-end">
                  Release the testnet for the MIZU data network, featuring
                  capabilities for data hosting and data pre-processing
                </div>
              </div>

              <div className="w-[2px] bg-[#898989]" />

              <div className="pt-10 flex flex-col">
                <div className="w-[70px] h-[25px] relative">
                  <Image
                    src="/images/roadmap_indicator_h.svg"
                    layout="fill"
                    alt="icon"
                  />
                </div>
              </div>
            </div>

            <div
              className="mx-5 items-stretch justify-center xl:hidden grid"
              style={{
                gridTemplateColumns: "1fr 2px 1fr",
              }}
            >
              <div className="pt-10 flex flex-col items-end">
                <div className="flex-1 flex justify-end">
                  <div className="w-[70px] h-[25px] relative rotate-180">
                    <Image
                      src="/images/roadmap_indicator_h.svg"
                      layout="fill"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[2px] bg-[#898989]" />

              <div className="pt-10 flex flex-col">
                <div className="mt-1 ml-3 flex-1 ">
                  <div className="flex items-center">
                    <div className="w-[17px] h-[17px] relative">
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[18px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage3
                    </div>
                  </div>

                  <div className="mt-2 text-[#898989] text-[12px] leading-snug">
                    Official launch of the mainnet
                    <br /> and Token Generation Event (TGE), <br />
                    marking the full deployment and <br />
                    operational launch of the MIZU data network
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mb-10 mx-5 items-stretch justify-center xl:hidden grid"
              style={{
                gridTemplateColumns: "1fr 2px 1fr",
              }}
            >
              <div className="pt-10 mr-3 flex-1 flex flex-col items-end">
                <div className="mt-1 flex items-center">
                  <div className="w-[14px] h-[14px] relative">
                    <Image
                      src="/images/logo_icon.svg"
                      layout="fill"
                      alt="icon"
                    />
                  </div>

                  <div
                    className={classNames(
                      "ml-2 text-[16px] text-text1",
                      boldFont.className
                    )}
                  >
                    Stage4
                  </div>
                </div>

                <div className="max-w-[200px] mt-2 text-[#898989] text-[12px] leading-snug text-end">
                  Focus on ecosystem development, fostering the creation of AI
                  applications from the tailored datasets created from MIZU AI
                  data network and supporting developers in utilizing the
                  platform effectively
                </div>
              </div>

              <div className="w-[2px] bg-[#898989]" />

              <div className="pt-10 flex flex-col">
                <div className="w-[70px] h-[25px] relative">
                  <Image
                    src="/images/roadmap_indicator_h.svg"
                    layout="fill"
                    alt="icon"
                  />
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <div className="mt-[56px] pl-[100px] 2xl:pl-[120px] xl:content-wrapper grid grid-cols-4 justify-between items-end">
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
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[18px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage2
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
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[18px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage4
                    </div>
                  </div>

                  <div className="mt-4 text-[#898989] text-[14px] leading-snug pr-5">
                    Focus on ecosystem development, fostering the creation of AI
                    applications directly from the data repository and
                    supporting developers in utilizing the platform effectively
                  </div>
                </div>
              </div>

              <div className="self-stretch h-[4px] bg-[#898989]" />

              <div className="pl-[100px] 2xl:pl-[120px] xl:content-wrapper grid grid-cols-4 justify-between">
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="w-[17px] h-[17px] relative">
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[18px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage1
                    </div>
                  </div>

                  <div className="mt-4 text-[#898989] text-[14px] leading-snug   pr-5">
                    Launch the MIZU data repository
                    <br /> and import initial open-source datasets into the MIZU
                    data network
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
                      <Image
                        src="/images/logo_icon.svg"
                        layout="fill"
                        alt="icon"
                      />
                    </div>

                    <div
                      className={classNames(
                        "ml-2 text-[18px] text-text1",
                        boldFont.className
                      )}
                    >
                      Stage3
                    </div>
                  </div>

                  <div className="mt-4 text-[#898989] text-[14px] leading-snug pr-5">
                    Official launch of the mainnet and Token Generation Event
                    (TGE), marking the full deployment and operational launch of
                    the MIZU data network
                  </div>
                </div>

                <div className="w-[32px] h-[96px] relative rotate-180">
                  <Image
                    src="/images/roadmap_indicator.svg"
                    layout="fill"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>

      <div
        className={classNames(
          "h-[43px] xl:h-[50px] xl:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-left"></div>

        <div className={classNames("xl:content-wrapper")}></div>

        <div className="crossed-right"></div>
      </div>
    </div>
  );
};
