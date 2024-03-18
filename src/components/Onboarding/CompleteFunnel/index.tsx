"use client";

import type { FC } from "react";
import HatBackground from "@/assets/onboarding/hat.svg";
import KnifeBackground from "@/assets/onboarding/knife.svg";
import RiceBackground from "@/assets/onboarding/rice.svg";
import LineBackground from "@/assets/onboarding/line.svg";
import useTimeout from "@/hooks/useTimeout";
import { useRouter, useSearchParams } from "next/navigation";
import { RECIPES_PATH } from "@/constants/routes";
import Button from "@/components/common/Button";
import useCompleteOnboard from "@/queries/mutation/useCompleteOnboard";

interface Props {
  // nickname: string;
}
const CompleteFunnel: FC<Props> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nickname = searchParams.get("nickname");

  const goToRecipeList = () => {
    router.push(RECIPES_PATH);
  };

  useTimeout(goToRecipeList, 3000);

  return (
    <div
      className="relative h-full flex flex-col items-center justify-center"
      onClick={goToRecipeList}
    >
      <HatBackground className="absolute left-[-20px] top-[20%]" />
      <RiceBackground className="absolute right-[-20px] top-[45%]" />
      <KnifeBackground className="absolute left-[-20px] top-[70%]" />
      <span className="text-lg text-beige-500">로그인 완료!</span>
      <h3 className="text-2xl text-main-black mt-5 text-center font-bold">
        {nickname ?? "대대손손"} 님,
        <br />
        환영합니다!
      </h3>
      <LineBackground />
      <div className="absolute w-full bottom-[15px]">
        <Button size="full" onClick={goToRecipeList}>
          대대손손 시작하기
        </Button>
      </div>
    </div>
  );
};

export default CompleteFunnel;
