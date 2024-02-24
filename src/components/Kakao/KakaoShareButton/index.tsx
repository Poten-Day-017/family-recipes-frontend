"use client";

import React from "react";
import ShareIcon from "@/assets/icons/share.svg";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Kakao: any;
  }
}

const handleClick = () => {
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "스테이크 솥밥",
      description: "내 최애 푸드 중 하나",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "http://localhost:3000/recipes/1",
        webUrl: "http://localhost:3000/recipes/1",
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    itemContent: {
      profileText: "Kakao",
      profileImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageUrl:
        "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      titleImageText: "Cheese cake",
      titleImageCategory: "Cake",
      items: [
        {
          item: "우리집 요리사",
          itemOp: "아빠",
        },
        {
          item: "카테고리",
          itemOp: "한식",
        },
        {
          item: "용량",
          itemOp: "2인분용",
        },
      ],
      sum: "Total",
      sumOp: "15000원",
    },
    buttons: [
      {
        title: "레시피 보러가기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};

const KakaoShareButton = () => {
  return (
    <div>
      <a id="kakaotalk-sharing-btn">
        <ShareIcon onClick={handleClick} />
      </a>
    </div>
  );
};

export default KakaoShareButton;
