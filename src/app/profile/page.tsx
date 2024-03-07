import React from "react";
import ProfileSettingButtonList from "@/components/Profile";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="py-[25px] font-bold text-xl">대대손손님</div>
        <div className="flex h-[74px] border-y border-main-black items-center bg-beige-200 m-2.5">
          <div className="w-full text-sm pl-[18px]">
            <div className="text-beige-700">레시피 게시물</div>
            <span className="font-bold">4</span>
          </div>
          <div className="w-px bg-beige-700 h-[46px]" />
          <div className="w-full text-sm pl-[18px]">
            <div className="text-beige-700">댓글 단 글</div>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
      <ProfileSettingButtonList />
    </div>
  );
};

export default ProfilePage;
