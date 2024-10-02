"use client";

import { boldFont, semiBoldFont } from "@/utils/fontUtils";
import classNames from "classnames";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import logo from "public/images/logo.svg";

export const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="z-20 h-headerHeight md:h-headerHeightLarge fixed left-0 right-0 top-0 bg-bgPage flex items-center justify-center">
      <div
        className={classNames(
          "px-5 w-full flex justify-between items-center flex-row-reverse lg:flex-row",
          "md:pl-10 md:pr-6 lg:pl-16 lg:pr-8"
        )}
      >
        <Link href="/" className="">
          <Image
            src={logo}
            alt="MIZU Logo"
            className="cursor-pointer w-[83px] h-[30px]"
            priority
          />
        </Link>

        <div className="flex lg:hidden items-center">
          <div
            className="text-black cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size="25px" className="" />
          </div>

          <Link href={"https://app.mizu.global"} target="_blank">
            <div
              className={classNames(
                "ml-5 bg-lightButtonBg rounded-lg px-6 py-2 cursor-pointer text-[12px] lg:text-[16px] text-black leading-tight flex justify-center",
                semiBoldFont.className
              )}
            >
              Launch App
            </div>
          </Link>
        </div>

        <div className="hidden items-center lg:flex">
          <Link href="#what-is-MIZU">
            <div
              className={classNames(
                "primary-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              What Is MIZU
            </div>
          </Link>

          <Link href="#why-different">
            <div
              className={classNames(
                "ml-8 stroke-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              Why We Are Different
            </div>
          </Link>

          <Link href="#roadmap">
            <div
              className={classNames(
                "ml-8 stroke-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              Roadmap
            </div>
          </Link>

          <Link href={"https://docs.mizu.global/overview"} target="_blank">
            <div
              className={classNames(
                "ml-8 stroke-button text-[16px] px-[14px] py-[6px]"
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Docs
            </div>
          </Link>

          {/* <Link href={"https://app.mizu.global"} target="_blank">
            <div
              className={classNames(
                "ml-16 bg-lightButtonBg rounded-lg px-6 py-2 cursor-pointer text-[12px] lg:text-[16px] text-black leading-tight flex justify-center",
                semiBoldFont.className
              )}
            >
              Launch App
            </div>
          </Link> */}
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
        size="100%"
        style={{
          background: "#ffffff",
          overflow: "auto",
        }}
      >
        <div className="p-5 flex flex-col h-[100vh]">
          <div className="flex justify-between items-center">
            <X
              size="30px"
              className="cursor-pointer"
              onClick={() => {
                setDrawerOpen(false);
              }}
            />

            <Image
              src="/images/logo.svg"
              alt="MIZU Logo"
              width={83}
              height={30}
              priority
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center pb-[100px]">
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

            <Link href="#why-different">
              <div
                className={classNames(
                  "mt-14 text-[16px] text-black cursor-pointer",
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
                  "mt-14 text-[16px] text-black cursor-pointer",
                  semiBoldFont.className
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Roadmap
              </div>
            </Link>

            <Link href={"https://docs.mizu.global/overview"} target="_blank">
              <div
                className={classNames(
                  "mt-14 text-[16px] text-black cursor-pointer",
                  semiBoldFont.className
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Docs
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
