"use client";

import React, { ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import { NAV_LIST } from "@/components/Layout/NavBar";

import { Abhaya_Libre } from "next/font/google";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["700"],
});

interface Props {
  left?: ReactNode;
  right?: ReactNode;
  text: string;
}

const Header = ({ text, left, right }: Props) => {
  return (
    <div>
      <div
        className="fixed pt-1
      max-w-[calc(768px)]
      bg-beige-100
      w-full
      z-10
      px-4
      "
      >
        <div
          className={`
      top-0 border-t-2 
      border-b border-[#222320]
      flex items-center justify-between
      font-bold py-4 ${abhayaLibre.className}`}
        >
          <div>{left}</div>
          <h1 className="text-xl text-main-black">{text}</h1>
          <div>{right}</div>
        </div>
      </div>
      <div className="h-[68px]" />
    </div>
  );
};

export default Header;
