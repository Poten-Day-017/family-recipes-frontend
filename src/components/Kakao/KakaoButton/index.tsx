"use client";

import React, { useEffect } from "react";
import KakaoLogo from "@/assets/kakao-logo.svg";
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
const KakaoButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", session);

  useEffect(() => {
    if (session) {
      console.log("session!!!!!! ", session);
      // router.push("/recipes");
    }
  }, [router, session]);

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
