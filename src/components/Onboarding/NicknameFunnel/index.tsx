"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { ONBOARDING_PATH } from "@/constants/routes";
import localFont from "next/font/local";

const nicknameRegex = /^[a-zA-Z0-9-_.가-힣]{1,12}$/;
const NICKNAME_ERROR_MSG = "양식에 맞춰서 닉네임을 다시 작성해주세요.";

const NickNameFunnel = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const changeButtonPosition = useCallback(() => {
    if (window.visualViewport) {
      const keyBoardHeight = window.innerHeight - window.visualViewport.height;
      console.log(keyBoardHeight);

      if (buttonRef.current) {
        buttonRef.current.style.bottom = `${keyBoardHeight}px`;
      }
    }
  }, []);

  useEffect(() => {
    if (window.visualViewport) {
      console.log(window.visualViewport);
      window.visualViewport.addEventListener("resize", changeButtonPosition);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          changeButtonPosition,
        );
      }
    };
  }, [changeButtonPosition]);

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

  return (
    <div className={"relative w-full h-full"}>
      <div>
        <div className="flex py-[18px] items-center justify-end">
          <div className="text-sm text-beige-500" onClick={goCompleted}>
            Skip
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
        <div className="absolute w-full bottom-4">
          <Button
            onClick={onSubmitNickname}
            size="full"
            color="orange-fill"
            disabled={!nickname || !!error}
            ref={buttonRef}
          >
            작성완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NickNameFunnel;
