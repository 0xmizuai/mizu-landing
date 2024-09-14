import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { regularFont } from "@/utils/fontUtils";
import classNames from "classnames";
import type { Metadata } from "next";
import Image from "next/image";
import "react-modern-drawer/dist/index.css";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MIZU Home",
  description: "The first decentralized open source data layer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://analytics.mizu.global/script.js"
        data-website-id="0fc4fc18-f011-4500-9b81-f80591cd977e"
      />

      <body
        className={classNames(
          regularFont.className,
          "leading-none text-base relative"
        )}
      >
        <AppHeader />

        <div className="pt-[60px] md:pt-[80px]">{children}</div>

        <AppFooter />

        <div className="w-full h-[400px] md:w-[768px] md:h-[700px] absolute left-0 bottom-0">
          <Image
            src="/images/roadmap_glow.svg"
            layout="fill"
            alt="icon"
            priority
          />
        </div>

        <div className="w-[180px] h-[180px] 2xl:w-[260px] 2xl:h-[260px] absolute left-0 bottom-0">
          <Image src="/images/home_bg2.svg" layout="fill" alt="icon" priority />
        </div>
      </body>
    </html>
  );
}
