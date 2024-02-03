import React, { FC } from "react";

interface Props {
  setIsPrivate: (isPrivate: boolean) => void;
  isPrivate: boolean;
}
const PrivateToggle: FC<Props> = ({ setIsPrivate, isPrivate }) => {
  console.log(isPrivate);
  return (
    <div className="w-full h-[50px] flex justify-center items-center text-beige-500 border rounded-[5px] mt-4">
      <div
        className={`w-full h-[44px] border-1 border-transparent rounded-[5px] flex justify-center items-center ${isPrivate ? "bg-main-black text-white" : ""} `}
        onClick={() => setIsPrivate(true)}
      >
        비공개
      </div>
      <div
        className={`w-full h-[44px] order-1 border-transparent rounded-[5px] flex justify-center items-center ${isPrivate ? "" : "bg-main-black text-white"} `}
        onClick={() => setIsPrivate(false)}
      >
        전체 공개
      </div>
    </div>
  );
};

export default PrivateToggle;
