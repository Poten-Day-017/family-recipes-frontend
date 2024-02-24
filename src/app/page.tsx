import React from "react";
import KakaoButton from "../components/Kakao/KakaoButton";
import Link from "next/link";
import OnboardingLogo from "@/assets/onbording-logo.svg";
import HandWriting from "@/assets/onboarding-text.svg";
import HandLine from "@/assets/line.svg";

import localFont from "next/font/local";
import { Metadata } from "next";

const NamnumSquareFont = localFont({
  src: "../fonts/NanumRound.ttf",
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
        <div className={NamnumSquareFont.className + " flex items-end"}>
          <span className="font-extrabold">대대</span>
          <span className="font-extralight">손손</span>
          <HandLine />
        </div>
      </h1>
      <HandWriting />
      <p className="font-pretendard">
        세상에 하나밖에 없는 <br />
        우리 가족만의 레시피북 만들기
      </p>
      <OnboardingLogo className={"absolute right-[-16px] pt-[110px]"} />
      <div className="absolute bottom-[-20px] w-full flex flex-col gap-3">
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
