"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import NickNameFunnel from "@/components/Onboarding/NicknameFunnel";
import CompleteFunnel from "@/components/Onboarding/CompleteFunnel";
import { ONBOARDING_PATH } from "@/constants/routes";

const COMPLETED_PARAM = "complete";
const NICKNAME_PARAM = "nickname";
const Onboarding = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get(COMPLETED_PARAM);

  const router = useRouter();

  console.log(completed);

  const onSubmitNickname = (nickname: string | null) => {
    // Nickname API
    router.push(ONBOARDING_PATH + `?nickname=${nickname}&complete=true`);
  };

  return (
    <>
      {!completed ? (
        <NickNameFunnel
          buttonText={"작성완료"}
          onNext={onSubmitNickname}
          onSkip={() => onSubmitNickname("대대손손")}
        />
      ) : (
        <CompleteFunnel />
      )}
    </>
  );
};

export default Onboarding;
