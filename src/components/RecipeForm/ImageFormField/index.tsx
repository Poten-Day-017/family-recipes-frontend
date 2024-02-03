import React from "react";
import CameraIcon from "@/assets/icon-camera.svg";

const ImageField = () => {
  return (
    <div>
      {<input type="file" />}
      <div className="text-[#151B1E] text-xs font-bold">
        대표 음식 사진
        {<span className="text-[#F7744C]"> * 1장</span>}
      </div>
      <div
        className="w-full h-[144px]
      my-4
      flex flex-col justify-center
    items-center border border-beige-500 rounded-[5px] border-dashed
    cursor-pointer
    "
      >
        <CameraIcon />
        <p className="text-sm text-beige-500 pt-2.5">
          레시피 대표 음식 사진을 올려주세요.
        </p>
      </div>
    </div>
  );
};

export default ImageField;
