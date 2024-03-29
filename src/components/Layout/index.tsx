"use client";
import { useOverlay } from "@toss/use-overlay";

import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Layout/Header";
import NavBar from "@/components/Layout/NavBar";
import {
  PROFILE_PATH,
  RECIPES_CALENDER_PATH,
  RECIPES_CREATE_PATH,
  RECIPES_PATH,
  RECIPES_SEARCH_PATH,
} from "@/constants/routes";

import React from "react";
import { usePathname } from "next/navigation";
import GoBackButton from "@/components/common/GoBackButton";
import KakaoShareButton from "@/components/Kakao/KakaoShareButton";

const HEADER_LIST = [
  {
    href: RECIPES_PATH,
    headerTitle: "My Family Recipe Book",
  },

  {
    href: RECIPES_SEARCH_PATH,
    headerTitle: "Family Recipe Search",
  },
  {
    href: RECIPES_CREATE_PATH,
    headerTitle: "Family Recipe Book Write",
  },
  {
    href: RECIPES_CALENDER_PATH,
    headerTitle: "Family Calendar",
  },
  {
    href: PROFILE_PATH,
    headerTitle: "My Profile",
  },
] as const;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const overlay = useOverlay();
  const pathname = usePathname();

  const pathRoutes = pathname.split("/");
  const id = pathname.startsWith(RECIPES_PATH)
    ? pathRoutes[pathRoutes.length - 1]
    : null;

  console.log(id);
  console.log(pathname);

  const headerInfo = HEADER_LIST.find(({ href }) => {
    return href === pathname;
  });

  if (id && !headerInfo) {
    return (
      <>
        <Header
          text={"Family Recipe Book Detail"}
          left={<GoBackButton />}
          right={<KakaoShareButton />}
        />
        {children}
      </>
    );
  }

  if (!headerInfo) {
    return <div>{children}</div>;
  }

  if (headerInfo.href === RECIPES_CREATE_PATH) {
    return (
      <>
        <Header text={headerInfo.headerTitle} left={<GoBackButton />} />
        {children}
      </>
    );
  }

  return (
    <div>
      <Header text={headerInfo.headerTitle} />
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
