"use client";

import { semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";

export const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="z-20 h-[60px] md:h-[80px] fixed left-0 right-0 top-0 bg-white flex items-center justify-center">
      <div
        className={classNames(
          "px-5 w-full flex justify-between items-center",
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
            src="/images/logo_icon.svg"
            alt="MIZU Logo"
            className="cursor-pointer "
            width={35}
            height={35}
            priority
          />
        </Link>

        <div
          className="text-black block md:hidden cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu size="25px" className="" />
        </div>

        <div className="hidden items-center md:flex">
          <Link href="#what-is-MIZU">
            <div
              className={classNames(
                "text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
            >
              What is MIZU
            </div>
          </Link>

          <a href="#partners">
            <div
              className={classNames(
                "ml-16 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
            >
              Partners
            </div>
          </a>

          <Link href="#why-different">
            <div
              className={classNames(
                "ml-16 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
            >
              Why We Are Different
            </div>
          </Link>

          <Link href="#roadmap">
            <div
              className={classNames(
                "ml-16 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
            >
              Roadmap
            </div>
          </Link>
        </div>
      </div>

      <Drawer
        customIdSuffix="introduction"
        direction="right"
        open={drawerOpen}
        lockBackgroundScroll
        duration={300}
        onClose={() => {
          setDrawerOpen(false);
        }}
        size="250px"
        style={{
          background: "#ffffff",
          overflow: "auto",
        }}
      >
        <div className="p-5">
          <Image
            src="/images/logo.svg"
            alt="MIZU Logo"
            width={83}
            height={30}
            priority
          />

          <Link href="#what-is-MIZU">
            <div
              className={classNames(
                "mt-16 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              What is MIZU
            </div>
          </Link>

          <a href="#partners">
            <div
              className={classNames(
                "mt-8 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Partners
            </div>
          </a>

          <Link href="#why-different">
            <div
              className={classNames(
                "mt-8 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Why We Are Different
            </div>
          </Link>

          <Link href="#roadmap">
            <div
              className={classNames(
                "mt-8 text-[16px] text-black cursor-pointer",
                semiBoldFont.className
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Roadmap
            </div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};
