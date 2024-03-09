"use client";

import React from "react";
import KakaoLogo from "@/assets/kakao-logo.svg";
import { signIn } from "next-auth/react";

const KakaoButton = () => {
  return (
    <button
      onClick={() => signIn("kakao")}
      className="w-full h-[50px] text-sm bg-kakao rounded-base
        flex justify-center items-center
        gap-2.5
        "
    >
      <KakaoLogo />
      카카오로 로그인
    </button>
  );
};

export default KakaoButton;
