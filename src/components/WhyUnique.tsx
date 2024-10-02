import { boldFont, lightFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import applicationDriven from "public/images/unique/application_driven.svg";
import dataCentric from "public/images/unique/data_centric.svg";
import openSource from "public/images/unique/open_source.svg";

export const WhyUnique = () => {
  return (
    <div
      id="why-different"
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-b border-b-white"
      )}
    >
      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className=""></div>

        <div
          className={classNames(
            "md:content-wrapper",
            "border-r border-r-white"
          )}
        ></div>

        <div className=""></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className="border-t border-t-white"></div>

        <div
          className={classNames(
            "border border-white",
            "py-[55px] md:py-[65px] lg:py-[80px] xl:py-[100px] 2xl:py-[120px]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col items-center",
              "justify-start text-sm",
              "px-[0] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
              "md:content-wrapper"
            )}
          >
            <div className="mx-[20px] md:mx-0 flex flex-col items-center">
              <div
                className={classNames(
                  "text-[28px] leading-tight text-text1",
                  "text-center md:text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
                  boldFont.className
                )}
              >
                What makes MIZU unique?
              </div>
            </div>

            <div
              className={classNames(
                "self-stretch mt-[36px] md:mt-[45px] lg:mt-[56px] flex flex-col-reverse md:flex-row items-center justify-start",
                "border-t border-t-white border-b border-b-white",
                "md:border md:border-white",
                "px-[35px] md:px-[50px] xl:px-[120px] 2xl:px-[150px]",
                "py-[32px] md:py-[44px]"
              )}
            >
              <div
                className={classNames(
                  "mt-[32px] md:mt-0 ",
                  "w-full ",
                  "md:w-[300px] md:min-w-[300px] md:max-w-[300px]",
                  "lg:w-[360px] lg:min-w-[360px] lg:max-w-[360px]",
                  "2xl:w-[450px] 2xl:min-w-[450px] 2xl:max-w-[450px]",
                  "md:mr-[50px] lg:mr-[100px] 2xl:mr-[100px]"
                )}
              >
                <div
                  className={classNames(
                    "text-[28px] leading-tight text-text1",
                    "text-center md:text-start md:text-[32px] lg:text-[40px] 2xl:text-[28px]",
                    boldFont.className
                  )}
                >
                  Open Source
                </div>

                <div
                  className={classNames(
                    "mt-[16px] md:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-center md:text-start",
                    lightFont.className
                  )}
                >
                  Current blockchain systems require node synchronization at the
                  10 minutes level, while operates at the 500ms level
                </div>
              </div>

              <Image
                src={openSource}
                className={classNames(
                  "w-[80px] min-w-[80px]",
                  "md:w-[150px] md:min-w-[150px]",
                  "lg:w-[170px] lg:min-w-[170px]",
                  "xl:w-[190px] xl:min-w-[190px]"
                )}
                alt="logo"
                priority
              />
            </div>

            <div
              className={classNames(
                "self-stretch mt-[16px] md:mt-[45px] lg:mt-[56px] flex flex-col-reverse md:flex-row items-center justify-center",
                "border-t border-t-white border-b border-b-white",
                "md:border md:border-white",
                "px-[35px] md:pl-[50px] xl:pl-[120px] 2xl:pl-[150px]",
                "py-[24px] md:py-[32px]"
              )}
            >
              <div
                className={classNames(
                  "flex justify-center md:block",
                  "mt-[32px] md:mt-0 ",
                  "w-full ",
                  "md:w-[300px] md:min-w-[300px] md:max-w-[300px]",
                  "lg:w-[360px] lg:min-w-[360px] lg:max-w-[360px]",
                  "2xl:w-[450px] 2xl:min-w-[450px] 2xl:max-w-[450px]"
                )}
              >
                <Image
                  src={applicationDriven}
                  className={classNames(
                    "",
                    "w-[112px] min-w-[112px]",
                    "md:w-[150px] md:min-w-[150px]",
                    "lg:w-[200px] lg:min-w-[200px]",
                    "xl:w-[242px] xl:min-w-[242px]"
                  )}
                  alt="logo"
                  priority
                />
              </div>

              <div className="mt-[32px] md:mt-0 w-full">
                <div
                  className={classNames(
                    "text-[28px] leading-tight text-text1",
                    "text-center md:text-start md:text-[32px] lg:text-[40px] 2xl:text-[28px]",
                    boldFont.className
                  )}
                >
                  Application Driven
                </div>

                <div
                  className={classNames(
                    "mt-[16px] md:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-center md:text-start",
                    lightFont.className
                  )}
                >
                  Current blockchain systems require node synchronization at the
                  10 minutes level, while operates at the 500ms level
                </div>
              </div>
            </div>

            <div
              className={classNames(
                "self-stretch mt-[16px] md:mt-[45px] lg:mt-[56px] flex flex-col-reverse md:flex-row items-center justify-start",
                "border-t border-t-white border-b border-b-white",
                "md:border md:border-white",
                "px-[35px] md:px-[50px] xl:px-[120px] 2xl:px-[150px]",
                "py-[32px] md:py-[44px]"
              )}
            >
              <div
                className={classNames(
                  "mt-[32px] md:mt-0 ",
                  "w-full ",
                  "md:w-[300px] md:min-w-[300px] md:max-w-[300px]",
                  "lg:w-[360px] lg:min-w-[360px] lg:max-w-[360px]",
                  "2xl:w-[450px] 2xl:min-w-[450px] 2xl:max-w-[450px]",
                  "md:mr-[50px] lg:mr-[100px] 2xl:mr-[100px]"
                )}
              >
                <div
                  className={classNames(
                    "text-[28px] leading-tight text-text1",
                    "text-center md:text-start md:text-[32px] lg:text-[40px] 2xl:text-[28px]",
                    boldFont.className
                  )}
                >
                  Data Centric
                </div>

                <div
                  className={classNames(
                    "mt-[16px] md:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-center md:text-start",
                    lightFont.className
                  )}
                >
                  Current blockchain systems require node synchronization at the
                  10 minutes level, while operates at the 500ms level
                </div>
              </div>

              <Image
                src={dataCentric}
                className={classNames(
                  "w-[112px] min-w-[112px]",
                  "md:w-[180px] md:min-w-[180px]",
                  "lg:w-[200px] lg:min-w-[200px]",
                  "xl:w-[242px] xl:min-w-[242px]"
                )}
                alt="logo"
                priority
              />
            </div>
          </div>
        </div>

        <div className="border-b border-b-white"></div>
      </div>

      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-left"></div>

        <div className={classNames("md:content-wrapper")}></div>

        <div className=""></div>
      </div>
    </div>
  );
};
