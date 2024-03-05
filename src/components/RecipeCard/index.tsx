import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { getRecipeDetailPath } from "@/constants/routes";
import { Private, Public } from "@/components/Tag";
import { Damion } from "next/font/google";

interface Props {
  recipeOrder: number;
  mainImageSrc: string | StaticImageData | undefined;
  title: string;
  subTitle: string;
  origin: string;
  tags: string[];
  isNew: boolean;
  isPrivate: boolean;
  recipeId: number;
  date: string; // YYYY.MM.DD 형식
}

const DamionFont = Damion({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const BOOK_COLOR = [
  {
    // orange
    mainColor: "bg-main-orange",
    text: "text-main-black",
    sideColor: "bg-[#DD5027]",
  },
  {
    // gray
    mainColor: "bg-beige-400",
    text: "text-main-black",
    sideColor: "bg-beige-600",
  },
  {
    // green
    mainColor: "bg-main-green-1",
    text: "text-main-black",
    sideColor: "bg-[#789342]",
  },
  {
    // black
    mainColor: "bg-main-black",
    text: "text-white",
    sideColor: "bg-beige-700",
  },
];

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
  const bookColorIdx = (recipeOrder - 1) % 4;
  return (
    <Link href={getRecipeDetailPath(recipeId)}>
      <div className="w-full bg-beige flex items-center border-main-black border-t border-b border-dashed py-[8px] px-[11px]">
        <div className="pr-[15px] flex items-center aspect-square border-r border-beige-400">
          <div
            className={
              "relative w-[100px] h-[131px] border border-main-black rounded-r-base flex justify-center items-center " +
              BOOK_COLOR[bookColorIdx].mainColor
            }
          >
            <div
              className={
                "w-[5px] h-full border-r border-main-black absolute left-0 " +
                BOOK_COLOR[bookColorIdx].sideColor
              }
            />
            <div
              className={
                "flex flex-col items-center " + BOOK_COLOR[bookColorIdx].text
              }
            >
              <span
                className={
                  DamionFont.className + " underline underline-offset-1 text-sm"
                }
              >
                No.{recipeOrder}
              </span>
              {mainImageSrc ? (
                <Image
                  src={mainImageSrc}
                  alt={title}
                  width={70}
                  height={70}
                  className="border border-main-black rounded-r-base"
                />
              ) : (
                <div
                  className={
                    "w-[70px] h-[70px] border border-main-black rounded-r-base"
                  }
                />
              )}
              <span className={DamionFont.className + " text-xs"}>{date}</span>
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
