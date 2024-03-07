"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const ProfileSettingButtonList = () => {
  const logout = () => {
    signOut();
  };

  return (
    <div className="flex flex-col">
      <button className="text-start py-5 border-b border-beige-300">
        <Link href={"/nickname/change"}>닉네임 수정</Link>
      </button>
      <button className="text-start py-5 text-main-error" onClick={logout}>
        로그아웃
      </button>
    </div>
  );
};

export default ProfileSettingButtonList;
