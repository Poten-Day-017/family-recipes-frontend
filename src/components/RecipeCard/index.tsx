import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import LockIcon from "@/assets/lock.svg";
import UnLockIcon from "@/assets/unlock.svg";
import Link from "next/link";

interface Props {
  mainImageSrc: string | StaticImageData;
  title: string;
  subTitle: string;
  origin: string;
  tags: string[];
  isNew: boolean;
  isPrivate: boolean;
  recipeId: string;
}

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

const RecipeCard: FC<Props> = ({
  mainImageSrc,
  isPrivate,
  origin,
  title,
  subTitle,
  tags,
  recipeId,
}) => {
  return (
    <Link href={`/recipes/${recipeId}`}>
      <div className="w-full bg-beige flex items-center border-beige-400 border-t border-b border-dashed py-[8px] px-[11px]">
        <div className="pr-[15px] flex items-center aspect-square border-r-[0.5px] border-beige-400">
          <div className="w-[114px] h-[114px] rounded-[5px] border border-main-black flex-shrink-0 overflow-hidden">
            <Image src={mainImageSrc} alt={title} width={114} height={114} />
          </div>
        </div>
        <div className=" w-full pl-[15px] py-2.5">
          {isPrivate ? <Private /> : <Public />}
          <h3 className="font-pretendard font-bold pt-2">{title}</h3>
          <p className="text-beige-700 text-[12px]">{subTitle}</p>
          <div className="bg-beige-400 w-full h-[0.5px] my-3" />
          <div className="flex gap-1.5 flex-wrap">
            <div
              key={origin}
              className="border text-[12px] rounded-[3px] bg-main-green-2 px-2 h-7 inline-flex justify-center items-center border-main-black"
            >
              {origin}
            </div>
            {tags.map((tag) => (
              <div
                key={tag}
                className="border text-[12px] rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
