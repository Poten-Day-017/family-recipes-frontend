"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GoBackIcon from "@/assets/icons/go-back.svg";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <GoBackIcon
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default GoBackButton;
