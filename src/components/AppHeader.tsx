"use client";

import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";

export const AppHeader = () => {
  return (
    <div className="z-20 h-[60px] md:h-[80px] fixed left-0 right-0 top-0 bg-white flex items-center justify-center">
      <div
        className={classNames(
          "px-5 w-full flex justify-between items-center flex-row-reverse lg:flex-row",
          "md:pl-10 md:pr-6 lg:pl-16 lg:pr-8"
        )}
      >
        <Link href="/" className="hidden lg:block">
          <Image
            src="/images/logo.svg"
            alt="MIZU Logo"
            className="cursor-pointer"
            width={83}
            height={30}
            priority
          />
        </Link>

        <Link href="/" className="block lg:hidden">
          <Image
            src="/images/logo.svg"
            alt="MIZU Logo"
            className="cursor-pointer "
            width={83}
            height={30}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
