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
            <div className="flex justify-center">
              <div className="w-full max-w-screen-md pt-10 bg-beige-100">
                <div className="px-4">{children}</div>
                <NavBar />
                <div className="w-full h-[85px]" />
              </div>
            </div>
            <Script src={KAKAO_SDK_URL} />
          </AuthSession>
        </QueryProvider>
      </body>
    </html>
  );
}
