// import KakaoButton from "@/components/KakaoButton";

import Header from "@/components/Layout/Header";
import React from "react";
import RecipeCard from "@/components/RecipeCard";
import SampleMainImage from "@/assets/sample-main-image1.png";

export default function Home() {
  // return <KakaoButton />;
  return (
    <div className="h-screen">
      <Header />
      <div className="py-5 flex flex-col gap-2.5">
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
        <RecipeCard
          mainImageSrc={SampleMainImage}
          title={"스테이크 솥밥"}
          subTitle={"내 최애 푸드 중 하나"}
          tags={["아빠", "한식", "2인분 용"]}
          isNew
          isPrivate
        />
      </div>
    </div>
  );
}
