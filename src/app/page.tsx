import React from "react";
import KakaoButton from "../components/Kakao/KakaoButton";
import Link from "next/link";
import BookBackground from "@/assets/onboarding/book-background.svg";
import HandWriting from "@/assets/onboarding-text.svg";
import HandLine from "@/assets/line.svg";

import localFont from "next/font/local";
import { Metadata } from "next";

const NamnumSquareExtraBoldFont = localFont({
  src: [
    {
      path: "../fonts/NanumSquareRoundOTFEB.otf",
      weight: "700",
      style: "extrabold",
    },
    {
      path: "../fonts/NanumSquareRoundOTFL.otf",
      weight: "300",
      style: "light",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "대대손손",
  description: "가족 레시피북을 만들어보세요!",
};

export default function Home() {
  return (
    <div className="relative flex flex-col gap-3 h-full">
      <h1 className="text-[40px] mt-10">
        <div
          className={NamnumSquareExtraBoldFont.className + " flex items-end"}
        >
          <span className="font-extrabold">대대</span>
          <span className="font-light">손손</span>
          <HandLine />
        </div>
      </h1>
      <HandWriting />
      <p className="font-pretendard">
        세상에 하나밖에 없는 <br />
        우리 가족만의 레시피북 만들기
      </p>
      <BookBackground className={"absolute right-[-16px] top-[15%]"} />
      <div className="absolute bottom-0 pb-[15px] w-full flex flex-col gap-3">
        <KakaoButton />
        <Link
          href={"/recipes"}
          className=" w-full h-[50px] text-sm rounded-base
        border
         border-main-orange
         text-main-orange
        flex justify-center items-center
        gap-2.5
        "
        >
          서비스 둘러보기
        </Link>
      </div>
    </div>
  );
}
