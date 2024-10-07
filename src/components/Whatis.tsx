import { boldFont, lightFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Image from "next/image";
import mizuBot from "public/images/whatis/mizu_bot.png";
import modelProgress from "public/images/whatis/model_progress.png";
import whatis from "public/images/whatis/whatis.svg";

export const Whatis = () => {
  return (
    <div
      id="what-is-MIZU"
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-t border-t-white border-b border-b-white"
      )}
    >
      <div
        className={classNames(
          "h-[43px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[78px]",
          "grid items-stretch",
          "layout-panel"
        )}
      >
        <div className="crossed-right"></div>

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
        <div className=""></div>

        <div
          className={classNames(
            "border border-white",
            "py-[55px] md:py-[65px] lg:py-[80px] xl:py-[100px] 2xl:py-[120px]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col md:flex-row md:items-start",
              "justify-start text-sm",
              "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
              "md:content-wrapper"
            )}
          >
            <div className="flex flex-col items-start mr-0 md:mr-[30px] xl:mr-[70px]">
              <div
                className={classNames(
                  "text-[32px] leading-tight text-text1",
                  "text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
                  boldFont.className
                )}
              >
                Foundational Model Training
              </div>

              <div
                className={classNames(
                  "mt-[36px] lg:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                  lightFont.className
                )}
              >
                Lorem ipsum dolor sit amet consectetur. Amet varius sed morbi et
                pellentesque sed sem mauris elit. Id erat augue suspendisse
                suspendisse viverra accumsan id facilisi pretium. Quam in turpis
                porttitor varius egestas. In urna ornare quis felis in egestas.
              </div>
            </div>

            <Image
              src={modelProgress}
              className={classNames(
                "mt-[56px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px]",
                "relative self-start",
                "w-full",
                "md:w-[300px] md:min-w-[300px]",
                "lg:w-[360px] lg:min-w-[360px]",
                "xl:w-[416px] xl:min-w-[416px]"
              )}
              alt="logo"
              priority
            />
          </div>

          <div
            className={classNames(
              "flex flex-col-reverse md:flex-row md:items-start",
              "justify-start text-sm",
              "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
              "mt-[100px] md:mt-[160px] lg:mt-[160px] xl:mt-[160px] 2xl:mt-[160px]",
              "md:content-wrapper"
              // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]",
            )}
          >
            <Image
              src={whatis}
              className={classNames(
                "relative self-start mt-[56px] md:mt-0",
                "w-full",
                "md:w-[300px] md:min-w-[300px]",
                "lg:w-[360px] lg:min-w-[360px]",
                "xl:w-[490px] xl:min-w-[490px]"
              )}
              alt="logo"
              priority
            />

            <div className="mt-[24px] md:mt-0 flex flex-col items-start ml-0 md:ml-[30px] xl:ml-[70px]">
              <div
                className={classNames(
                  "text-[32px] leading-tight text-text1",
                  "text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
                  boldFont.className
                )}
              >
                What is MIZU?
              </div>

              <div
                className={classNames(
                  "mt-[36px] lg:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                  lightFont.className
                )}
              >
                MIZU is the pioneering DePIN solution for hyperscale AI
                datasets. By simply running a MIZU data node, any data holder
                can effortlessly join our ecosystem, securely sharing their
                valuable information. Our innovative network leverages edge
                computing for comprehensive data pre-processing, ensuring
                exceptional data quality and integrity. Combined with our
                standardized query interface, MIZU offers easily accessible and
                low-risk data resources to the AI community, empowering
                developers to innovate and build a wide range of AI solutions.
              </div>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col md:flex-row md:items-start",
              "justify-start text-sm",
              "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
              "mt-[100px] md:mt-[65px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]",
              "md:content-wrapper"
            )}
          >
            <div
              className={classNames(
                "flex flex-col items-start mr-0 md:mr-[30px] xl:mr-[70px]",
                "md:max-w-[380px] lg:max-w-[450px] xl:max-w-[543px]",
                "mt-0 md:mt-[80px] lg:mt-[120px] xl:mt-[120px]"
              )}
            >
              <div
                className={classNames(
                  "text-[32px] leading-tight text-text1",
                  "text-start md:text-[35px] lg:text-[40px] 2xl:text-[60px]",
                  boldFont.className
                )}
              >
                Meet Mizu Bot
              </div>

              <div
                className={classNames(
                  "mt-[36px] lg:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                  lightFont.className
                )}
              >
                Lorem ipsum dolor sit amet consectetur. Venenatis mauris orci
                tellus adipiscing odio luctus nunc rhoncus morbi. Commodo sit
                tempus aenean viverra tortor libero magna nullam tortor.
              </div>

              <div
                className={classNames(
                  "mt-[28px] lg:mt-[28px] text-[16px] md:text-[18px] leading-snug text-text2 text-start",
                  lightFont.className
                )}
              >
                Lorem ipsum dolor sit amet consectetur. Amet varius sed morbi et
                pellentesque sed sem mauris elit. Id erat augue suspendisse
                suspendisse viverra accumsan id facilisi pretium. Quam in turpis
                porttitor varius egestas.
              </div>
            </div>

            <Image
              src={mizuBot}
              className={classNames(
                "mt-[56px] md:mt-0",
                "relative self-start mt-8 lg:mt-0",
                "w-full",
                "md:w-[250px] md:min-w-[250px]",
                "lg:w-[280px] lg:min-w-[280px]",
                "xl:w-[334px] xl:min-w-[334px]"
              )}
              alt="logo"
              priority
            />
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