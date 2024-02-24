"use client";

import React from "react";
import Script from "next/script";

const KAKAO_SDK_URL = "https://developers.kakao.com/sdk/js/kakao.js";

const KakaoShareScript = () => {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  return <Script src={KAKAO_SDK_URL} async onLoad={onLoad}></Script>;
};

export default KakaoShareScript;
