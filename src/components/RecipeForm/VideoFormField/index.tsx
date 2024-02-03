import React from "react";
import CameraIcon from "@/assets/icon-camera.svg";

const VideoField = () => {
  return (
    <div>
      {<input type="file" />}
      <div className="text-[#151B1E] text-xs font-bold">
        음식 영상
        {<span className="text-beige-500">(선택 1개)</span>}
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
          가족과 함께한 레시피 영상을 올려주세요.
        </p>
        <span>최대 1GB까지 업로드 가능</span>
      </div>
    </div>
  );
};

export default VideoField;
