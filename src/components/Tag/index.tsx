import LockIcon from "@/assets/lock.svg";
import UnLockIcon from "@/assets/unlock.svg";
import React from "react";

export const Private = () => {
  return (
    <div className="bg-main-black inline-flex px-2.5 h-5 rounded-[3px] gap-[5px] justify-center items-center">
      <LockIcon />
      <span className="text-[10px] text-white">비공개</span>
    </div>
  );
};

export const Public = () => {
  return (
    <div className="bg-main-black inline-flex px-2.5 h-5 rounded-[3px] gap-[5px] justify-center items-center">
      <UnLockIcon />
      <span className="text-[10px] text-white">공개</span>
    </div>
  );
};
