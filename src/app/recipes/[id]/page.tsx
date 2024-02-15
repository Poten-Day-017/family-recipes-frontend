import React from "react";
import Header from "@/components/Layout/Header";
import { getRecipeDetail } from "@/fetcher";
import { headers } from "next/headers";
import { notFound, redirect, usePathname } from "next/navigation";
import Image from "next/image";
import { Private } from "@/components/RecipeCard";
import RecipeStep from "@/assets/recipe-step.svg";

const RecipeDetail = async () => {
  // const handleClick = () => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  //
  //   window.Kakao.Share.createDefaultButton({
  //     container: "#kakaotalk-sharing-btn",
  //     objectType: "feed",
  //     content: {
  //       title: "오늘의 디저트",
  //       description: "아메리카노, 빵, 케익",
  //       imageUrl:
  //         "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
  //       link: {
  //         mobileWebUrl: "https://developers.kakao.com",
  //         webUrl: "https://developers.kakao.com",
  //       },
  //     },
  //     itemContent: {
  //       profileText: "Kakao",
  //       profileImageUrl:
  //         "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
  //       titleImageUrl:
  //         "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
  //       titleImageText: "Cheese cake",
  //       titleImageCategory: "Cake",
  //       items: [
  //         {
  //           item: "Cake1",
  //           itemOp: "1000원",
  //         },
  //         {
  //           item: "Cake2",
  //           itemOp: "2000원",
  //         },
  //         {
  //           item: "Cake3",
  //           itemOp: "3000원",
  //         },
  //         {
  //           item: "Cake4",
  //           itemOp: "4000원",
  //         },
  //         {
  //           item: "Cake5",
  //           itemOp: "5000원",
  //         },
  //       ],
  //       sum: "Total",
  //       sumOp: "15000원",
  //     },
  //     social: {
  //       likeCount: 10,
  //       commentCount: 20,
  //       sharedCount: 30,
  //     },
  //     buttons: [
  //       {
  //         title: "웹으로 이동",
  //         link: {
  //           mobileWebUrl: "https://developers.kakao.com",
  //           webUrl: "https://developers.kakao.com",
  //         },
  //       },
  //       {
  //         title: "앱으로 이동",
  //         link: {
  //           mobileWebUrl: "https://developers.kakao.com",
  //           webUrl: "https://developers.kakao.com",
  //         },
  //       },
  //     ],
  //   });
  // };

  const heads = headers();

  const pathname = heads.get("next-url");
  const id = pathname
    ? pathname.split("/")[pathname.split("/").length - 1]
    : null;

  console.log(id);

  const {
    title,
    origin,
    content,
    categoryName,
    capacity,
    episode,
    episodeOpenYn,
    totalOpenYn,
    cookingImageUrl,
    cookingVideoUrl,
    ingredientList,
    procedureList,
    secretIngredientList,
  } = await getRecipeDetail(id ?? "2");

  return (
    <div>
      <div>
        <Header text={"family recipe book detail"} />
        <div className="w-full h-[220px] relative rounded-base overflow-hidden border border-main-black my-[15px]">
          <Image
            src={cookingImageUrl}
            alt={"main image"}
            fill
            className="object-cover"
          />
        </div>
        <Private />
        <h2 className="text-[20px] font-bold">{title}</h2>
        <p className="text-beige-700 text-xs mt-2.4">{content}</p>
        <div className="py-2 border-y border-b-main-black mt-[15px]">
          <div className="h-10 flex justify-between items-center">
            <span>우리집 요리사</span>
            <div className="border text-[12px] font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black bg-main-green-2">
              {origin}
            </div>
            <span>카테고리</span>
            <div className="border text-[12px] font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black">
              {categoryName}
            </div>
            <span>용량</span>
            <div className="border text-[12px] font-bold rounded-[3px] px-2 h-7 inline-flex justify-center items-center border-main-black">
              {capacity} 인분용
            </div>
          </div>
        </div>
        <section className="pt-10">
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
                    <span className="text-[10px]">{amount}</span>
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
                    <span className="text-[10px]">{amount}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <section className="bg-main-green-2 flex flex-col items-center pt-5">
        <RecipeStep className="mb-[15px]" />
        <div className="w-full">
          {procedureList.map(({ order, description }) => {
            return (
              <div key={order} className="border-b border-main-black flex">
                <Image
                  src={"http://via.placeholder.com/480x480"}
                  alt={description + "image"}
                  width={144}
                  height={144}
                />
                <div className="">
                  <span>step {order}</span>
                  <p className="text-[13px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;
