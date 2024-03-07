"use client";

import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Layout/Header";
import NavBar from "@/components/Layout/NavBar";
import {
  HOME_PATH,
  ONBOARDING_PATH,
  PROFILE_PATH,
  RECIPES_CALENDER_PATH,
  RECIPES_CREATE_PATH,
  RECIPES_DETAIL_PATH,
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
    headerTitle: "Family Recipe Book",
  },
  {
    href: RECIPES_CALENDER_PATH,
    headerTitle: "Family Calendar",
  },
  {
    href: PROFILE_PATH,
    headerTitle: "Profile",
  },
] as const;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const pathRoutes = pathname.split("/");
  const id = pathname.startsWith(RECIPES_PATH)
    ? pathRoutes[pathRoutes.length - 1]
    : null;

  console.log(id);
  console.log(pathname);

  const headerInfo = HEADER_LIST.find(({ href }) => {
    console.log(href, pathname, href === pathname);
    return href === pathname;
  });

  if (id) {
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

  return (
    <div>
      <Header text={headerInfo.headerTitle} />
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
