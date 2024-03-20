"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import GoBackIcon from "@/assets/icons/go-back.svg";

// NOTE: 비동기?
interface Props {
  onClick?: () => boolean;
  onClickCallback?: () => void;
}
const GoBackButton: FC<Props> = ({ onClick, onClickCallback }) => {
  const router = useRouter();
  return (
    <GoBackIcon
      onClick={() => {
        let isContinue = true;
        if (onClick) {
          isContinue = onClick();
        }
        if (isContinue) {
          router.back();
        }
        if (onClickCallback) onClickCallback();
      }}
    />
  );
};

export default GoBackButton;
