import React from "react";
import KakaoButton from "@/components/KakaoButton";
import Link from "next/link";
import OnboardingLogo from "@/assets/onbording-logo.svg";
import HandWriting from "@/assets/onboarding-text.svg";
import HandLine from "@/assets/line.svg";

import localFont from "next/font/local";

const NamnumSquareFont = localFont({
  src: "../fonts/NanumRound.ttf",
  display: "swap",
});

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
          href={"/search"}
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
