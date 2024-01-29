"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const KakaoButton = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <button onClick={() => signIn("kakao")}>카카오로 시작하기</button>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
};

export default KakaoButton;
