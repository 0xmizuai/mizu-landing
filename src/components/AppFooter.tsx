"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";
import xIcon from "public/images/link_x.svg";

export const AppFooter = () => {
  return (
    <div className="z-10 relative h-[60px] md:h-[75px] xl:h-[98px] left-0 right-0 top-0 flex items-center justify-center">
      <div className="pl-8 md:pl-12 2xl:pl-14 pr-8 w-full flex justify-between items-center">
        <Image
          src={logo}
          alt="MIZU Logo"
          className="w-[75px] md:w-[85px] h-auto"
          priority
        />

        <div className="text-white text-[12px] lg:text-[16px] xl:text-[18px]">
          2024 MIZU INC.
        </div>

        <div className="flex items-center">
          <Link href={"https://x.com/0xmizu_ai"} target="_blank">
            <Image
              src={xIcon}
              alt="x"
              className="cursor-pointer w-[18px] md:w-[22px]"
              priority
            />
          </Link>

          <Link href={"mailto:contact@mizu.global"} target="_blank">
            <Mail className="cursor-pointer ml-5 text-white w-[18px] md:w-[22px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
