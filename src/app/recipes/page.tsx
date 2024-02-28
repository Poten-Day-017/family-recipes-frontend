import Header from "@/components/Layout/Header";
import React from "react";
import RecipeCard from "@/components/RecipeCard";
// import SampleMainImage from "@/assets/sample-main-image1.png";
import { getRecipes } from "@/fetcher";
import CookingBookIcon from "@/assets/cooking-book-icon.svg";
import Link from "next/link";
import { RECIPES_CREATE_PATH } from "@/constants/routes";

export default async function RecipePage() {
  const { recipeList } = await getRecipes({ page: 1 });
  console.log("recipeList: ", recipeList);

  return (
    <div className="w-full h-full">
      <Header text="My Family Recipe Book" />
      <div className="w-full py-5 flex flex-col gap-2.5">
        {recipeList.length === 0 && (
          <div className="pt-40">
            <div className="w-full h-full flex flex-col justify-center items-center text-center">
              <CookingBookIcon />
              <h3 className="text-[20px] font-bold">리스트가 아직 없어요!</h3>
              <p className="text-sm text-beige-700">
                우리 가족만의 레시피를 작성하고 <br /> 추억을 간직해보세요
              </p>
              <button className="flex h-[50px] w-full justify-center items-center mt-4 rounded-[5px] border border-main-orange text-main-orange font-bold text-sm">
                <Link href={RECIPES_CREATE_PATH}>레시피 작성하기</Link>
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
              recipeId,
              categoryName,
              capacity,
              totalOpenYn,
              cookingImageUrl,
              createdAt,
              order,
            },
            idx,
          ) => (
            <RecipeCard
              recipeOrder={order}
              recipeId={recipeId}
              key={title + idx}
              mainImageSrc={cookingImageUrl}
              title={title}
              subTitle={content}
              origin={origin}
              tags={[categoryName, `${capacity}인분용`]}
              isNew
              isPrivate={totalOpenYn === "N"}
              date={createdAt}
            />
          ),
        )}
        <div className="h-[58px]"></div>
      </div>
    </div>
  );
}
