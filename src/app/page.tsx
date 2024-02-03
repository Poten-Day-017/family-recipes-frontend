// import KakaoButton from "@/components/KakaoButton";

import Header from "@/components/Layout/Header";
import React from "react";
import RecipeCard from "@/components/RecipeCard";
import SampleMainImage from "@/assets/sample-main-image1.png";
import { getRecipes } from "@/fetcher";
import CookingBookIcon from "@/assets/cooking-book-icon.svg";

// "recipeId": 2,
//     "title": "아빠의 김치볶음밥",
//     "origin": "아빠",
//     "content": "레시피 소개 샘플2",
//     "category": "CTGR_001",
//     "categoryName": "탕/면",
//     "capacity": 1,
//     "totalOpenYn": "Y",
//     "cookingImageUrl": "http://www.daedaesonson.site/static/sample8.jpeg"

export default async function Home() {
  const { recipeList } = await getRecipes({ page: 1 });
  console.log(recipeList);

  // return <KakaoButton />;
  return (
    <div className="h-full">
      <Header />
      <div className="py-5 h-full flex flex-col gap-2.5">
        {recipeList.length === 0 && (
          <div className="pt-40">
            <div className="w-full h-full flex flex-col justify-center items-center text-center">
              <CookingBookIcon />
              <h3 className="text-[20px] font-bold">리스트가 아직 없어요!</h3>
              <p className="text-sm text-beige-700">
                우리 가족만의 레시피를 작성하고 <br /> 추억을 간직해보세요
              </p>
              <button className="flex h-[50px] w-full justify-center items-center mt-4 rounded-[5px] border border-main-orange text-main-orange font-bold text-sm">
                레시피 작성하기
              </button>
            </div>
          </div>
        )}
        {recipeList.map(
          (
            {
              title,
              origin,
              content,

              categoryName,
              capacity,
              totalOpenYn,
              cookingImageUrl,
            },
            idx,
          ) => (
            <RecipeCard
              key={title + idx}
              mainImageSrc={cookingImageUrl}
              title={title}
              subTitle={content}
              origin={origin}
              tags={[categoryName, capacity + "인분용"]}
              isNew
              isPrivate={totalOpenYn === "N"}
            />
          ),
        )}
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          origin={"아빠"}
          tags={["한식", "2인분 용"]}
          isNew
          isPrivate
        />
      </div>
    </div>
  );
}
