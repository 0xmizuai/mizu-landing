import { AppHeader } from "@/components/AppHeader";
import { regularFont } from "@/utils/fontUtils";
import classNames from "classnames";
import type { Metadata } from "next";
import "react-modern-drawer/dist/index.css";
import "./globals.css";
import AppProvider from "@/components/provider/AppProvider";
import { SnackbarInit } from "@/components/SnackbarInit";

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
      <body
        className={classNames(
          regularFont.className,
          "leading-none text-base relative"
        )}
      >
        <AppProvider>
          <SnackbarInit />

          <AppHeader />

          <div className="pt-[60px] md:pt-[80px]">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
