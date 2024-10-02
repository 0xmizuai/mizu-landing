"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";

export const AppFooter = () => {
  return (
    <div className="z-10 relative h-[98px] left-0 right-0 top-0 flex items-center justify-center">
      <div className="pl-12 md:pl-12 2xl:pl-14 pr-8 w-full flex justify-between items-center">
        <Image
          src={logo}
          alt="MIZU Logo"
          className="w-[83px] h-[30px]"
          priority
        />

        <div className="flex items-center">
          <Link href={"https://x.com/0xmizu_ai"} target="_blank">
            <Image
              src="/images/link_x.svg"
              alt="x"
              className="cursor-pointer "
              width={25}
              height={25}
              priority
            />
          </Link>

          <Link href={"mailto:contact@mizu.global"} target="_blank">
            <Mail size={25} className="cursor-pointer ml-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
