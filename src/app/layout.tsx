import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/providers/sessionProvider";
import Script from "next/script";
import React from "react";
import NavBar from "../components/Layout/NavBar";
import QueryProvider from "@/providers/queryProvider";

const KAKAO_SDK_URL = "https://developers.kakao.com/sdk/js/kakao.js";
export const metadata: Metadata = {
  title: "대대손손",
  description: "가족 레시피북을 만들어보세요!",
};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthSession>
            <div className="flex justify-center h-screen overflow-hidden">
              <div className="w-full h-screen overflow-scroll max-w-screen-md bg-beige-100 text-main-black">
                <div className="px-4 h-[calc(100vh-58px)]">{children}</div>
                <NavBar />
              </div>
            </div>
            <Script src={KAKAO_SDK_URL} />
          </AuthSession>
        </QueryProvider>
      </body>
    </html>
  );
}
