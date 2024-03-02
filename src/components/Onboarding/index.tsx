import { useSearchParams } from "next/navigation";
import React from "react";
import NickNameFunnel from "@/components/Onboarding/NicknameFunnel";
import CompleteFunnel from "@/components/Onboarding/CompleteFunnel";

const COMPLETED_PARAM = "complete";
const NICKNAME_PARAM = "nickname";
const Onboarding = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get(COMPLETED_PARAM);

  console.log(completed);

  return <>{!completed ? <NickNameFunnel /> : <CompleteFunnel />}</>;
};

export default Onboarding;
