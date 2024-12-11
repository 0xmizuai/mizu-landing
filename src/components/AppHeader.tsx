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
          "px-5 w-full flex justify-between items-center flex-row lg:flex-row",
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
            className="text-white cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size="25px" className="" />
          </div>

          {/* <Link href={"https://app.mizu.global"} target="_blank">
            <div
              className={classNames(
                "ml-5 bg-lightButtonBg rounded-lg px-6 py-2 cursor-pointer text-[12px] lg:text-[16px] text-black leading-tight flex justify-center",
                semiBoldFont.className
              )}
            >
              Launch App
            </div>
          </Link> */}
        </div>

        <div className="hidden items-center lg:flex">
          <Link href="#what-is-MIZU">
            <div
              className={classNames(
                "stroke-button active:primary-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              What Is MIZU
            </div>
          </Link>

          <Link href="#why-different">
            <div
              className={classNames(
                "ml-8 stroke-button active:primary-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              Why We Are Different
            </div>
          </Link>

          <Link href="#roadmap">
            <div
              className={classNames(
                "ml-8 stroke-button active:primary-button text-[16px] px-[14px] py-[6px]"
              )}
            >
              Roadmap
            </div>
          </Link>

          <Link href={"https://docs.mizu.technology/overview"} target="_blank">
            <div
              className={classNames(
                "ml-8 stroke-button active:primary-button text-[16px] px-[14px] py-[6px]"
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Docs
            </div>
          </Link>

          <Link href={"https://medium.com/@0xmizu_ai"} target="_blank">
            <div
              className={classNames(
                "ml-8 stroke-button text-[16px] px-[14px] py-[6px]"
              )}
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              Blogs
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
          background: "#131313",
          overflow: "auto",
        }}
      >
        <div className="flex flex-col h-[100vh]">
          <div className="px-5 flex justify-between items-center h-[90px] border-b border-b-white">
            <Image
              src="/images/logo.svg"
              alt="MIZU Logo"
              width={83}
              height={30}
              priority
            />

            <X
              size="30px"
              className="cursor-pointer text-white"
              onClick={() => {
                setDrawerOpen(false);
              }}
            />
          </div>

          <div className="px-8 flex-1 flex flex-col  items-stretch pb-[100px]">
            <Link href="#what-is-MIZU">
              <div
                className={classNames(
                  "stroke-button mt-16 text-[16px] w-full h-[44px] active:primary-button"
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                What Is MIZU
              </div>
            </Link>

            <Link href="#why-different">
              <div
                className={classNames(
                  "mt-12 stroke-button active:primary-button text-[16px] w-full h-[44px]"
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
                  "mt-12 stroke-button active:primary-button text-[16px] w-full h-[44px]"
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Roadmap
              </div>
            </Link>

            <Link href={"https://docs.mizu.technology/overview"} target="_blank">
              <div
                className={classNames(
                  "mt-12 stroke-button active:primary-button text-[16px] w-full h-[44px]"
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Docs
              </div>
            </Link>

            <Link href={"https://medium.com/@0xmizu_ai"} target="_blank">
              <div
                className={classNames(
                  "mt-12 stroke-button active:primary-button text-[16px] w-full h-[44px]"
                )}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                Blogs
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
