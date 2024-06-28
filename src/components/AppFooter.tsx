"use client";

import Image from "next/image";
import Link from "next/link";

export const AppFooter = () => {
  return (
    <div className="z-10 relative h-[60px] md:h-[80px] left-0 right-0 top-0 flex items-center justify-center">
      <div className="pl-12 md:pl-12 2xl:pl-14 pr-8 w-full flex justify-between items-center">
        <Image
          src="/images/logo.svg"
          alt="MIZU Logo"
          className="cursor-pointer hidden lg:block"
          width={83}
          height={35}
          priority
        />

        <Image
          src="/images/logo.svg"
          alt="MIZU Logo"
          className="cursor-pointer block lg:hidden"
          width={83}
          height={35}
          priority
        />

        <div className="flex items-center">
          <Link href={"https://x.com/0xmizu_ai"} target="_blank">
            <Image
              src="/images/link_x.png"
              alt="x"
              className="cursor-pointer "
              width={25}
              height={25}
              priority
            />
          </Link>

          <Link href={"https://docs.mizu.global"} target="_blank">
            <Image
              src="/images/link_mirror.png"
              alt="x"
              className="ml-5 cursor-pointer"
              width={25}
              height={25}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
