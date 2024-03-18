import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/providers/sessionProvider";
import React from "react";
import NavBar from "../components/Layout/NavBar";
import QueryProvider from "@/providers/queryProvider";
import KakaoShareScript from "../components/Kakao/KakaoShareScript";
import localFont from "next/font/local";
import Layout from "@/components/Layout";
import { OverlayProvider } from "@toss/use-overlay";

export const metadata: Metadata = {
  title: "대대손손",
  description: "가족 레시피북을 만들어보세요!",
};

// NOTE: 왜 variable font는 안될까
const pretendardFont = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendardFont.variable} font-pretendard`}>
      <body>
        <OverlayProvider>
          <QueryProvider>
            <AuthSession>
              <div className="flex justify-center h-screen overflow-hidden">
                <div className="w-full h-screen overflow-y-scroll overflow-x-hidden max-w-screen-md bg-beige-100 text-main-black">
                  <Layout>
                    <div className="px-4 h-screen">{children}</div>
                  </Layout>
                </div>
              </div>
            </AuthSession>
            <KakaoShareScript />
          </QueryProvider>
        </OverlayProvider>
      </body>
    </html>
  );
}
