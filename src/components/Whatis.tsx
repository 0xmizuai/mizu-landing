"use client";

import { boldFont, lightFont } from "@/utils/fontUtils";
import classNames from "classnames";
import Lottie from "lottie-react";
import Image from "next/image";
import carouselArrow from "public/images/whatis/carousel_arrow.svg";
import mizuBot from "public/images/whatis/mizu_bot.png";
import modelProgress from "public/images/whatis/model_progress.png";
import dataHosting from "public/lotties/data-hosting/data.json";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

export const Whatis = () => {
  return (
    <div
      id="what-is-MIZU"
      className={classNames(
        "z-10 relative",
        "bg-bgPage border-t border-t-white",
        "scroll-mt-headerHeight md:scroll-mt-[100px]"
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

        <div className={classNames("md:content-wrapper", "")}></div>

        <div className=""></div>
      </div>

      {/* <div className="absolute top-0 left-0 bottom-[100px] right-[100px]"></div> */}

      <div className="grid items-stretch layout-panel">
        <div className=""></div>

        <div className="border border-white p-2 md:p-3">
          <div
            className={classNames("hidden md:block border border-white", "")}
          >
            <ContentCarousel />
          </div>

          <div className="md:hidden">
            <MobileContent />
          </div>
        </div>

        <div className="border-t border-t-white"></div>
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

const ContentCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <Image
        src={carouselArrow}
        className={classNames(
          "z-10 w-20 h-20 absolute top-0 bottom-0 left-[-46px] m-auto hover:scale-105 cursor-pointer",
          index === 0 ? "hidden" : ""
        )}
        alt="arrow"
        onClick={() => {
          setIndex(index - 1);
        }}
        style={{
          transition: "all ease-out .25s",
        }}
      />

      <Image
        src={carouselArrow}
        className={classNames(
          "z-10 w-20 h-20 absolute top-0 bottom-0 right-[-46px] m-auto hover:scale-105 cursor-pointer rotate-180",
          index === 2 ? "hidden" : ""
        )}
        alt="arrow"
        onClick={() => {
          setIndex(index + 1);
        }}
        style={{
          transition: "all ease-out .25s",
        }}
      />

      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        selectedItem={index}
      >
        <div
          className={classNames(
            "h-[500px] max-h-[500px]",
            "flex items-center",
            "text-sm",
            "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
            "md:content-wrapper"
          )}
        >
          <Image
            src={modelProgress}
            className={classNames(
              "relative",
              "w-full",
              "md:w-[300px] md:min-w-[300px]",
              "lg:w-[360px] lg:min-w-[360px]",
              "xl:w-[490px] xl:min-w-[490px]"
            )}
            alt="logo"
            priority
          />

          <div className="flex flex-col items-start mr-0 md:ml-[30px] xl:ml-[70px]">
            <div
              className={classNames(
                "leading-tight text-text1",
                "title-text",
                boldFont.className
              )}
            >
              Application-driven Dataset
            </div>

            <div
              className={classNames(
                "mt-[16px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
                lightFont.className
              )}
            >
              MIZU’s AI-ready dataset is designed to serve various AI
              applications, including foundation model training, fine-tuning and
              RAG. Our dataset is meticulously curated to ensure high-quality,
              diverse, and unbiased data.
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "h-[500px] max-h-[500px]",
            "flex items-center",
            "justify-center text-sm",
            "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
            "md:content-wrapper"
            // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]",
          )}
        >
          <div
            className={classNames(
              "relative ",
              "w-full",
              "md:w-[260px] md:min-w-[260px]",
              "lg:w-[330px] lg:min-w-[330px]",
              "xl:w-[400px] xl:min-w-[400px]",
              "2xl:w-[440px] 2xl:min-w-[440px]"
            )}
          >
            <Lottie
              animationData={dataHosting}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="mt-[24px] md:mt-0 flex flex-col items-start ml-0 md:ml-[30px] xl:ml-[70px]">
            <div
              className={classNames(
                "leading-tight text-text1",
                "title-text",
                boldFont.className
              )}
            >
              Decentralized Data Hosting
            </div>

            <div
              className={classNames(
                "mt-[16px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
                lightFont.className
              )}
            >
              MIZU is the pioneering DePIN solution for hyperscale AI datasets.
              By simply running a MIZU data node, any data holder can
              effortlessly join our ecosystem, securely sharing their valuable
              information.
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "h-[500px] max-h-[500px]",
            "flex items-start py-[80px]",
            "justify-center text-sm",
            "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
            "md:content-wrapper"
          )}
        >
          <div
            className={classNames(
              "flex flex-col items-start mr-0 md:mr-[30px] xl:mr-[70px]",
              "md:w-[350px] md:min-w-[350px]",
              "lg:w-[440px] lg:min-w-[440px]",
              "xl:w-[550px] xl:min-w-[550px]",
              "2xl:w-[690px] 2xl:min-w-[690px]"
              // "mt-0 md:mt-[80px] lg:mt-[120px] xl:mt-[120px]"
            )}
          >
            <div
              className={classNames(
                "leading-tight text-text1",
                "title-text",
                boldFont.className
              )}
            >
              MIZU Edge Network
            </div>

            <div
              className={classNames(
                "mt-[16px] lg:mt-[56px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
                lightFont.className
              )}
            >
              Our innovative network leverages edge computing for comprehensive
              data pre-processing, ensuring exceptional data quality and
              integrity.
            </div>

            <div
              className={classNames(
                "mt-[28px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
                lightFont.className
              )}
            >
              Join our edge network using your mobile device or laptop. Run the
              MIZU Telegram bot to contribute computational resources for data
              tagging and refinement. Earn MIZU points for your participation.
            </div>
          </div>

          <div
            className={classNames(
              // "relative h-[400px] w-auto",
              "relative mt-8 lg:mt-0",
              // "w-full px-10  md:px-5 lg:px-0",
              "md:w-[180px] md:min-w-[180px]",
              "lg:w-[200px] lg:min-w-[200px]",
              "xl:w-[250px] xl:min-w-[250px]"
            )}
          >
            <Image
              src={mizuBot}
              width={0}
              height={0}
              style={{ width: "auto", height: "auto" }} // optional
              alt="logo"
              priority
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

const MobileContent = () => {
  return (
    <div
      className={classNames(
        "border border-white",
        "pt-[24px] pb-[56px] md:py-[65px] lg:py-[80px] xl:py-[100px] 2xl:py-[120px]"
      )}
    >
      <div
        className={classNames(
          "flex flex-col-reverse md:flex-row md:items-center",
          "justify-start text-sm",
          "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
          "md:content-wrapper"
          // "mx-[32px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[128px]",
        )}
      >
        <div
          className={classNames(
            "relative self-start mt-[56px] md:mt-0",
            "w-full",
            "md:w-[300px] md:min-w-[300px]",
            "lg:w-[360px] lg:min-w-[360px]",
            "xl:w-[490px] xl:min-w-[490px]"
          )}
        >
          <Lottie
            animationData={dataHosting}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="mt-[24px] md:mt-0 flex flex-col items-start ml-0 md:ml-[30px] xl:ml-[70px]">
          <div
            className={classNames(
              "leading-tight text-text1",
              "title-text",
              boldFont.className
            )}
          >
            Decentralized Data Hosting
          </div>

          <div
            className={classNames(
              "mt-[16px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
              lightFont.className
            )}
          >
            MIZU is the pioneering DePIN solution for hyperscale AI datasets. By
            simply running a MIZU data node, any data holder can effortlessly
            join our ecosystem, securely sharing their valuable information.
          </div>
        </div>
      </div>

      <div className="mt-[50px] h-[1px] bg-white" />

      <div
        className={classNames(
          "flex flex-col md:flex-row md:items-center",
          "justify-start text-sm",
          "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
          "mt-[50px] md:mt-[65px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]",
          "md:content-wrapper"
        )}
      >
        <div
          className={classNames(
            "flex flex-col items-start md:items-start mr-0 md:mr-[30px] xl:mr-[70px]",
            "md:w-[300px] md:min-w-[350]",
            "lg:w-[360px] lg:min-w-[440px]",
            "xl:w-[490px] xl:min-w-[550px]"
            // "mt-0 md:mt-[80px] lg:mt-[120px] xl:mt-[120px]"
          )}
        >
          <div
            className={classNames(
              "leading-tight text-text1",
              "title-text",
              boldFont.className
            )}
          >
            MIZU Edge Network
          </div>

          <div
            className={classNames(
              "mt-[16px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
              lightFont.className
            )}
          >
            Our innovative network leverages edge computing for comprehensive
            data pre-processing, ensuring exceptional data quality and
            integrity.
          </div>

          <div
            className={classNames(
              "mt-[28px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
              lightFont.className
            )}
          >
            Join our edge network using your mobile device or laptop. Run the
            MIZU Telegram bot to contribute computational resources for data
            tagging and refinement. Earn MIZU points for your participation.
          </div>
        </div>

        <Image
          src={mizuBot}
          className={classNames(
            "mt-[56px] md:mt-0",
            "relative self-start mt-8 lg:mt-0",
            "w-full px-10  md:px-5 lg:px-0",
            "md:w-[250px] md:min-w-[250px]",
            "lg:w-[280px] lg:min-w-[280px]",
            "xl:w-[334px] xl:min-w-[334px]"
          )}
          alt="logo"
          priority
        />
      </div>

      <div className="mt-[50px] h-[1px] bg-white" />

      <div
        className={classNames(
          "mt-[50px] md:mt-[65px] lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px]",
          "flex flex-col-reverse md:flex-row md:items-center",
          "justify-start text-sm",
          "px-[20px] md:px-[50px] lg:px-[80px] 2xl:px-[100px]",
          "md:content-wrapper"
        )}
      >
        <Image
          src={modelProgress}
          className={classNames(
            "mt-[56px] md:mt-[30px] lg:mt-[40px] xl:mt-[60px]",
            "relative self-start",
            "w-full",
            "md:w-[300px] md:min-w-[300px]",
            "lg:w-[360px] lg:min-w-[360px]",
            "xl:w-[490px] xl:min-w-[490px]"
          )}
          alt="logo"
          priority
        />

        <div className="flex flex-col items-start mr-0 md:ml-[30px] xl:ml-[70px]">
          <div
            className={classNames(
              "leading-tight text-text1",
              "title-text",
              boldFont.className
            )}
          >
            Application-driven Dataset
          </div>

          <div
            className={classNames(
              "mt-[16px] lg:mt-[28px] text-[16px] md:text-[18px] leading-normal text-text2 text-start",
              lightFont.className
            )}
          >
            MIZU’s AI-ready dataset is designed to serve various AI
            applications, including foundation model training, fine-tuning and
            RAG. Our dataset is meticulously curated to ensure high-quality,
            diverse, and unbiased data.
          </div>
        </div>
      </div>
    </div>
  );
};
