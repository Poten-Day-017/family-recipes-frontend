"use client";

import type { FC } from "react";
import HatBackground from "@/assets/onboarding/hat.svg";
import KnifeBackground from "@/assets/onboarding/knife.svg";
import RiceBackground from "@/assets/onboarding/rice.svg";
import LineBackground from "@/assets/onboarding/line.svg";
import useTimeout from "@/hooks/useTimeout";
import { useRouter, useSearchParams } from "next/navigation";
import { RECIPES_PATH } from "@/constants/routes";

interface Props {
  // nickname: string;
}
const CompleteFunnel: FC<Props> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useTimeout(() => {
    router.push(RECIPES_PATH);
  }, 5000);

  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <HatBackground className="absolute left-[-20px] top-[20%]" />
      <RiceBackground className="absolute right-[-20px] top-[45%]" />
      <KnifeBackground className="absolute left-[-20px] top-[70%]" />
      <span className="text-lg text-beige-500">로그인 완료!</span>
      <h3 className="text-2xl text-main-black mt-5">
        대대손손 님,
        <br />
        환영합니다!
      </h3>
      <LineBackground />
    </div>
  );
};

export default CompleteFunnel;
