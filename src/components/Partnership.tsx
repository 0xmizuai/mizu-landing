import classNames from "classnames";
import Image from "next/image";
import symbolic from "public/images/partnership/symbolic.svg";
import sentient from "public/images/partnership/sentient.svg";
import near from "public/images/partnership/near.png";
import og from "public/images/partnership/og.svg";
import ora from "public/images/partnership/ora.svg";
import fraction from "public/images/partnership/fraction.svg";

export const Partnership = () => {
  return (
    <div
      id="partners"
      className="w-full py-8 lg:py-9 xl:py-12 bg-bgPage flex justify-center"
    >
      <div
        className={classNames(
          "w-full md:content-wrapper",
          "px-[30px]",
          "md:px-[100px]",
          "lg:px-[130px]",
          "xl:px-[150px]",
          "2xl:px-[170px]",
          // "flex items-center justify-between flex-wrap"
          "grid gap-2 items-center justify-between grid-cols-auto3 md:grid-cols-auto6 lg:grid-cols-auto6 2xl:grid-cols-auto6"
        )}
      >
        <div className=" flex justify-center">
          <Image
            src={symbolic}
            alt="icon"
            className="w-[50px] md:w-[60px] xl:w-[80px] h-auto"
            priority
          />
        </div>

        <div className="ml-4 md:ml-0 flex justify-center">
          <Image
            src={sentient}
            alt="icon"
            className="w-[70px] md:w-[90px] xl:w-[120px] h-auto"
            priority
          />
        </div>

        <div className=" flex justify-center">
          <Image
            src={near}
            alt="icon"
            className="w-[60px] md:w-[80px] xl:w-[100px] h-auto"
            priority
          />
        </div>

        <div className=" flex justify-center">
          <Image
            src={og}
            alt="icon"
            className="w-[36px] md:w-[45px] xl:w-[55px] h-auto"
            priority
          />
        </div>

        <div className="ml-4 md:ml-0 flex justify-center">
          <Image
            src={ora}
            alt="icon"
            className="w-[40px] md:w-[50px] xl:w-[65px] h-auto"
            priority
          />
        </div>

        <div className=" flex justify-center">
          <Image
            src={fraction}
            alt="icon"
            className="w-[100px] md:w-[120px] xl:w-[160px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};
