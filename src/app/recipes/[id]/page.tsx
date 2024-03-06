import React from "react";
import Header from "@/components/Layout/Header";
import { getRecipeDetail } from "@/fetcher";
import Image from "next/image";
import RecipeStep from "@/assets/recipe-step.svg";
import KakaoShareButton from "../../../components/Kakao/KakaoShareButton";
import { Damion } from "next/font/google";
import { Private, Public } from "@/components/Tag";
import GoBackButton from "@/components/common/GoBackButton";
import { notFound } from "next/navigation";

const DamionFont = Damion({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const RecipeDetailPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  console.log("page path: ", id);

  if (!id) {
    notFound();
  }

  const {
    title,
    origin,
    content,
    categoryName,
    capacity,
    episode,
    totalOpenYn,
    cookingImageUrl,
    cookingVideoUrl,
    ingredientList,
    procedureList,
    secretIngredientList,
  } = await getRecipeDetail(id);

  return (
    <div>
      <Header
        left={<GoBackButton />}
        text={"Family Recipe Book Detail"}
        right={<KakaoShareButton />}
      />
      <div className="w-full aspect-[328/220] relative rounded-base overflow-hidden border border-main-black mt-[15px] mb-[24px]">
        {cookingImageUrl && (
          <Image
            src={cookingImageUrl}
            alt={"main image"}
            fill
            className="object-cover"
          />
        )}
      </div>
      {totalOpenYn === "Y" ? <Public /> : <Private />}
      <h2 className="text-[20px] font-bold">{title}</h2>
      <p className="text-beige-700 text-xs mt-2.4">{content}</p>
      <div className="py-2 border-y border-b-main-black mt-[15px]">
        <div className="h-10 flex text-xs justify-between items-center">
          <span className="">우리집 요리사</span>
          <div className="border  font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black bg-main-green-2">
            {origin}
          </div>
          <span>카테고리</span>
          <div className="border font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black">
            {categoryName}
          </div>
          <span>용량</span>
          <div className="border font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black">
            {capacity} 인분용
          </div>
        </div>
      </div>
      <section className="py-10">
        <div className="flex justify-between">
          <span className="w-full text-xs font-bold">필수 재료</span>
          <div className="w-full">
            {ingredientList.map(({ order, name, amount }) => {
              return (
                <div
                  key={order}
                  className="flex items-center justify-between h-[22px] border-b-[0.5px] border-main-black"
                >
                  <span className="text-xs">{name}</span>
                  <span className={`text-2xs ${DamionFont.className}`}>
                    {amount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-px border-t border-beige-400 my-10 border-dotted" />
        <div className="flex justify-between">
          <span className="w-full text-xs font-bold">우리집 비법 양념</span>
          <div className="w-full">
            {secretIngredientList.map(({ order, name, amount }) => {
              return (
                <div
                  key={order}
                  className="flex items-center justify-between h-[22px] border-b-[0.5px] border-main-black"
                >
                  <span className="text-xs">{name}</span>
                  <span className={`text-2xs ${DamionFont.className}`}>
                    {amount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="absolute left-[-16px] w-[calc(100%+32px)] px-4 bg-main-green-2 flex flex-col items-center pt-5 rounded-t-[10px]">
          <RecipeStep className="mb-[15px]" />
          <div className="w-full border-main-black border-y mb-5">
            <div className="w-full border-beige-500">
              {procedureList.map(({ order, description, imageUrl }) => {
                return (
                  <div
                    key={order}
                    className="border-b border-beige-500 flex py-5 px-2.5"
                  >
                    {imageUrl && (
                      <>
                        <Image
                          src={imageUrl}
                          alt={description + "image"}
                          width={144}
                          height={144}
                          className="rounded-base border border-main-black"
                        />
                        <div className="w-px h-[144px] bg-beige-500 mx-5" />
                      </>
                    )}
                    <div className="">
                      <span className={`${DamionFont.className}`}>
                        step {order}
                      </span>
                      <p className="text-xs">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailPage;
