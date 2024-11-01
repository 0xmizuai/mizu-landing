import classNames from "classnames";
import Image from "next/image";
import symbolic from "public/images/partnership/symbolic.svg";
import sentient from "public/images/partnership/sentient.svg";
import near from "public/images/partnership/near.png";
import og from "public/images/partnership/og.svg";
import ora from "public/images/partnership/ora.svg";
import fraction from "public/images/partnership/fraction.svg";
import Marquee from "react-fast-marquee";

export const Partnership = () => {
  return (
    <div
      id="partners"
      className="w-full h-[100px] lg:h-[120px] xl:h-[140px] bg-bgPage flex items-center justify-center"
    >
      <Marquee
        className=""
        gradient
        gradientColor="#121212"
        pauseOnHover
        autoFill
      >
        <div
          className={classNames(
            "w-full md:content-wrapper",
            "px-[30px]",
            // "md:px-[100px]",
            // "lg:px-[130px]",
            // "xl:px-[150px]",
            // "2xl:px-[100px]",
            "flex items-center"
            // "grid gap-2 items-center justify-between grid-cols-auto3 md:grid-cols-auto6 lg:grid-cols-auto6 2xl:grid-cols-auto6"
          )}
        >
          <div className="flex justify-center">
            <Image
              src={symbolic}
              alt="icon"
              className="w-[60px] md:w-[75px] xl:w-[96px] h-auto"
              priority
            />
          </div>

          <div className="ml-8 md:ml-10 xl:ml-20 flex justify-center">
            <Image
              src={sentient}
              alt="icon"
              className="w-[80px] md:w-[100px] xl:w-[140px] h-auto"
              priority
            />
          </div>

          <div className="ml-8 md:ml-10 xl:ml-20 flex justify-center">
            <Image
              src={near}
              alt="icon"
              className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
              priority
            />
          </div>

          <div className="ml-8 md:ml-10 xl:ml-20 flex justify-center">
            <Image
              src={og}
              alt="icon"
              className="w-[50px] md:w-[60px] xl:w-[75px] h-auto"
              priority
            />
          </div>

          <div className="ml-8 md:ml-10 xl:ml-20 flex justify-center">
            <Image
              src={ora}
              alt="icon"
              className="w-[50px] md:w-[60px] xl:w-[76px] h-auto"
              priority
            />
          </div>

          <div className="ml-8 md:ml-10 xl:ml-20 flex justify-center">
            <Image
              src={fraction}
              alt="icon"
              className="w-[180px] md:w-[200px] xl:w-[250px] h-auto"
              priority
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};
