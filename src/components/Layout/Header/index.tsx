"use client";

import React from "react";
// import { usePathname } from "next/navigation";
// import { NAV_LIST } from "@/components/Layout/NavBar";

import { Abhaya_Libre } from "next/font/google";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["500"],
});

const Header = ({ text }: { text: string }) => {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <div
      className={`
      mt-1
      bg-beige-100 
      sticky top-0 border-t-2 
      border-b border-[#222320]
      flex justify-center items-center 
      z-10
      py-4 ${abhayaLibre.className}`}
    >
      <h1 className="text-[22px] text-text-black">{text}</h1>
    </div>
  );
};

export default Header;
