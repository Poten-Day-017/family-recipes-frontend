import LockIcon from "@/assets/lock.svg";
import UnLockIcon from "@/assets/unlock.svg";
import React from "react";

export const Private = () => {
  return (
    <div className="bg-main-black inline-flex px-1.5 h-5 rounded-[3px] gap-[5px] justify-center items-center">
      <LockIcon />
      <span className="text-[10px] text-white">비공개</span>
    </div>
  );
};

export const Public = () => {
  return (
    <div className="border border-beige-400 inline-flex px-1.5 h-5 rounded-[3px] gap-[5px] justify-center items-center">
      <UnLockIcon />
      <span className="text-[10px] text-beige-500">공개</span>
    </div>
  );
};
