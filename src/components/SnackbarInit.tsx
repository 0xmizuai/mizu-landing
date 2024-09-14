"use client";
import { SnackbarProvider } from "notistack";

export const SnackbarInit = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      autoHideDuration={10000}
      classes={{
        // root: "bg-[#ff0000]",
        containerAnchorOriginTopRight: "mt-headerHeight",
      }}
    />
  );
};
