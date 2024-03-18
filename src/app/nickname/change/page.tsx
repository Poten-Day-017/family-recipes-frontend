"use client";

import React from "react";
import NicknameFunnel from "@/components/Onboarding/NicknameFunnel";
import { useRouter } from "next/navigation";
import { PROFILE_PATH } from "@/constants/routes";
import useChangeNickname from "@/queries/mutation/useNickName";

const NicknameChangePage = () => {
  const router = useRouter();
  const mutation = useChangeNickname();
  return (
    <NicknameFunnel
      buttonText={"저장"}
      onBack={() => {
        router.back();
      }}
      onNext={(nickname) => {
        mutation.mutate(
          {
            userId: 1,
            userNickname: nickname ?? "대대손손",
          },
          {
            onSuccess: (data) => {
              console.log("성공");
              console.log(data);
            },
            onError: (error) => {
              console.log(error);
            },
          },
        );
        router.push(PROFILE_PATH);
      }}
    />
  );
};

export default NicknameChangePage;
