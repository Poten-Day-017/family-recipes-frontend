import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/providers/sessionProvider";
import React from "react";
import NavBar from "../components/Layout/NavBar";
import QueryProvider from "@/providers/queryProvider";
import KakaoShareScript from "../components/Kakao/KakaoShareScript";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "대대손손",
  description: "가족 레시피북을 만들어보세요!",
};

const pretendardFont = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendardFont.className}>
      <body>
        <QueryProvider>
          <AuthSession>
            <div className="flex justify-center h-screen overflow-hidden">
              <div className="w-full h-screen overflow-scroll max-w-screen-md bg-beige-100 text-main-black">
                <div className="px-4 h-[calc(100vh-58px)]">{children}</div>
                <NavBar />
              </div>
            </div>
          </AuthSession>
          <KakaoShareScript />
        </QueryProvider>
      </body>
    </html>
  );
}
