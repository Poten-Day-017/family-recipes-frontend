"use client";

import React from "react";
import NicknameFunnel from "@/components/Onboarding/NicknameFunnel";
import { useRouter } from "next/navigation";
import { PROFILE_PATH } from "@/constants/routes";
import useChangeNickname from "@/queries/mutation/useNickName";
import useGetUserId from "@/queries/query/useGetUserId";
import { GET_USER_ID } from "@/queries/keys";

const NicknameChangePage = () => {
  const router = useRouter();
  const mutation = useChangeNickname();
  const { data } = useGetUserId();
  console.log(data?.userId);

  return (
    <NicknameFunnel
      buttonText={"저장"}
      onBack={() => {
        router.back();
      }}
      onNext={(nickname) => {
        if (!data || !data.userId) {
          console.log("none id");
          return;
        }

        mutation.mutate(
          {
            // TODO : 수정 필요
            userId: data.userId,
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
