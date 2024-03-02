"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import GoBackIcon from "@/assets/icons/go-back.svg";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { ONBOARDING_PATH } from "@/constants/routes";

const nicknameRegex = /^[a-zA-Z0-9-_.가-힣]{1,12}$/;
const NICKNAME_ERROR_MSG = "양식에 맞춰서 닉네임을 다시 작성해주세요.";

const NickNameFunnel = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 상위 state로 관리하는게 편할려나?
  const goCompleted = () => {
    router.push(ONBOARDING_PATH + `?nickname=${nickname}&complete=true`);
  };

  const onSubmitNickname = () => {
    // Nickname API
    goCompleted();
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(nicknameRegex.test(value));
    if (!nicknameRegex.test(value)) {
      setError(NICKNAME_ERROR_MSG);
    } else {
      setNickname(e.target.value);
      setError(null);
    }
  };

  // 닉네임은 공백없이 12자 이하,
  // 기호는 -_ . 만 사용 가능합니다.

  return (
    <div>
      <div className="flex py-[18px] items-center justify-end">
        <div className="text-sm text-beige-500" onClick={goCompleted}>
          skip
        </div>
      </div>
      <h1 className="text-xl font-bold mt-[5px]">
        대대손손에서 사용할 <br />
        닉네임을 입력해주세요.
      </h1>
      <p className="text-xs text-beige-500 mt-[15px]">
        닉네임은 공백없이 12자 이하, <br /> 기호는 -_ . 만 사용 가능합니다.
      </p>
      <div className="pt-[15px]">
        <Input
          placeholder="닉네임을 작성해주세요."
          onChange={onChangeNickname}
          error={error}
        />
      </div>
      <Button
        onClick={onSubmitNickname}
        size="full"
        color="orange-fill"
        disabled={!nickname || !!error}
      >
        작성완료
      </Button>
    </div>
  );
};

export default NickNameFunnel;
