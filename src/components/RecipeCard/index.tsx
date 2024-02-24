import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { getRecipeDetailPath } from "@/constants/routes";
import { Private, Public } from "@/components/Tag";

interface Props {
  recipeOrder: number;
  mainImageSrc: string | StaticImageData;
  title: string;
  subTitle: string;
  origin: string;
  tags: string[];
  isNew: boolean;
  isPrivate: boolean;
  recipeId: string;
  date: string; // YYYY.MM.DD 형식
}

// const RecipeBook = ({}) => {};

const RecipeCard: FC<Props> = ({
  recipeOrder,
  mainImageSrc,
  isPrivate,
  origin,
  title,
  subTitle,
  tags,
  recipeId,
  date,
}) => {
  return (
    <Link href={getRecipeDetailPath(recipeId)}>
      <div className="w-full bg-beige flex items-center border-beige-400 border-t border-b border-dashed py-[8px] px-[11px]">
        <div className="pr-[15px] flex items-center aspect-square border-r-[0.5px] border-beige-400">
          <div className="relative w-[100px] h-[131px] border border-main-black rounded-r-base flex justify-center items-center ">
            <div className="w-[5px] h-full border-r border-main-black  absolute left-0" />
            <div className="flex flex-col items-center">
              <span>No.{recipeOrder}</span>
              <Image
                src={mainImageSrc}
                alt={title}
                width={70}
                height={70}
                className="border border-main-black rounded-r-base"
              />
              <span>{date}</span>
            </div>
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
