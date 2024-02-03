"use client";

import React from "react";
import XIcon from "@/assets/icon-x.svg";
// import { usePathname } from "next/navigation";
// import { NAV_LIST } from "@/components/Layout/NavBar";

import { Abhaya_Libre } from "next/font/google";

import Link from "next/link";

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["500"],
});

interface Props {
  onSubmit: () => void;
}

const NewHeader = ({ onSubmit }: Props) => {
  return (
    <header className="w-full">
      <div
        className={`
        w-full
        max-w-screen-md
        sticky
      bg-beige-100  top-0 border-t-2 
      border-b border-[#222320]
      flex justify-center items-center 
      py-4 ${abhayaLibre.className}
      `}
      >
        <div className="flex w-full justify-between items-center cursor-pointer">
          <Link href="/">
            <XIcon />
          </Link>
          <h1 className="text-[30px] text-text-black">Family Recipe Write</h1>
          <span className="text-beige-500 cursor-pointer" onClick={onSubmit}>
            등록
          </span>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
